import { type JSX, useEffect, useRef } from "react";
import * as THREE from "three";
import "./about.css";

export default function About(): JSX.Element {
    const wrapRef = useRef<HTMLDivElement | null>(null);
    const imageSrc = "/images/photo.png";

    useEffect(() => {
        const wrap = wrapRef.current;
        if (!wrap) {
            return;
        }

        let scene: THREE.Scene | null = null;
        let camera: THREE.Camera | null = null;
        let renderer: THREE.WebGLRenderer | null = null;
        let planeMesh: THREE.Mesh | null = null;
        let animationFrame = 0;
        let resizeObserver: ResizeObserver | null = null;

        let easeFactor = 0.02;
        let mousePosition = { x: 0.5, y: 0.5 };
        let targetMousePosition = { x: 0.5, y: 0.5 };
        let aberrationIntensity = 0.25;
        let prevPosition = { x: 0.48, y: 0.5 };

        const vertexShader = `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `;

        const fragmentShader = `
            varying vec2 vUv;
            uniform sampler2D u_texture;
            uniform vec2 u_mouse;
            uniform vec2 u_prevMouse;
            uniform float u_aberrationIntensity;
            uniform vec2 u_resolution;
            uniform vec2 u_textureSize;

            void main() {
                vec2 gridUV = floor(vUv * vec2(20.0, 20.0)) / vec2(20.0, 20.0);
                vec2 centerOfPixel = gridUV + vec2(1.0/20.0, 1.0/20.0);

                vec2 mouseDirection = u_mouse - u_prevMouse;
                vec2 pixelToMouseDirection = centerOfPixel - u_mouse;
                float pixelDistanceToMouse = length(pixelToMouseDirection);
                float strength = smoothstep(0.3, 0.0, pixelDistanceToMouse);

                vec2 uvOffset = strength * -mouseDirection * 0.2;
                float textureAspect = u_textureSize.x / u_textureSize.y;
                float resolutionAspect = u_resolution.x / u_resolution.y;
                vec2 scale = resolutionAspect > textureAspect
                    ? vec2(1.0, resolutionAspect / textureAspect)
                    : vec2(textureAspect / resolutionAspect, 1.0);
                vec2 uvCover = (vUv - 0.5) * scale + 0.5;
                vec2 uv = clamp(uvCover - uvOffset, 0.0, 1.0);

                vec4 colorR = texture2D(u_texture, uv + vec2(strength * u_aberrationIntensity * 0.01, 0.0));
                vec4 colorG = texture2D(u_texture, uv);
                vec4 colorB = texture2D(u_texture, uv - vec2(strength * u_aberrationIntensity * 0.01, 0.0));

                gl_FragColor = vec4(colorR.r, colorG.g, colorB.b, 1.0);
            }
        `;

        const initializeScene = (texture: THREE.Texture) => {
            scene = new THREE.Scene();
            camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
            const image = texture.image as HTMLImageElement | ImageBitmap | undefined;
            const textureWidth =
                (image && "naturalWidth" in image ? image.naturalWidth : image?.width) ??
                wrap.clientWidth;
            const textureHeight =
                (image && "naturalHeight" in image ? image.naturalHeight : image?.height) ??
                wrap.clientHeight;

            const shaderUniforms = {
                u_mouse: { value: new THREE.Vector2() },
                u_prevMouse: { value: new THREE.Vector2() },
                u_aberrationIntensity: { value: 0.0 },
                u_texture: { value: texture },
                u_resolution: { value: new THREE.Vector2(wrap.clientWidth, wrap.clientHeight) },
                u_textureSize: { value: new THREE.Vector2(textureWidth, textureHeight) },
            };

            planeMesh = new THREE.Mesh(
                new THREE.PlaneGeometry(2, 2),
                new THREE.ShaderMaterial({
                    uniforms: shaderUniforms,
                    vertexShader,
                    fragmentShader,
                }),
            );

            scene.add(planeMesh);

            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setPixelRatio(window.devicePixelRatio || 1);
            renderer.setSize(wrap.clientWidth, wrap.clientHeight);
            renderer.setClearColor(0x000000, 0);
            renderer.domElement.className = "about__imageCanvas";
            wrap.appendChild(renderer.domElement);
        };

        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load(imageSrc, () => {
            initializeScene(texture);
        });
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.generateMipmaps = false;

        const updateSize = () => {
            if (!renderer || !camera) {
                return;
            }
            const width = wrap.clientWidth;
            const height = wrap.clientHeight;
            renderer.setSize(width, height);
            if (planeMesh) {
                const material = planeMesh.material as THREE.ShaderMaterial;
                material.uniforms.u_resolution.value.set(width, height);
            }
        };

        resizeObserver = new ResizeObserver(updateSize);
        resizeObserver.observe(wrap);

        const animateScene = () => {
            animationFrame = window.requestAnimationFrame(animateScene);
            if (!planeMesh || !renderer || !camera || !scene) {
                return;
            }

            mousePosition.x += (targetMousePosition.x - mousePosition.x) * easeFactor;
            mousePosition.y += (targetMousePosition.y - mousePosition.y) * easeFactor;

            const material = planeMesh.material as THREE.ShaderMaterial;
            material.uniforms.u_mouse.value.set(
                mousePosition.x,
                1.0 - mousePosition.y,
            );

            material.uniforms.u_prevMouse.value.set(
                prevPosition.x,
                1.0 - prevPosition.y,
            );

            aberrationIntensity = Math.max(0.25, aberrationIntensity - 0.05);
            material.uniforms.u_aberrationIntensity.value = aberrationIntensity;

            renderer.render(scene, camera);
        };

        const handleMouseMove = (event: MouseEvent) => {
            easeFactor = 0.02;
            const rect = wrap.getBoundingClientRect();
            prevPosition = { ...targetMousePosition };
            targetMousePosition = {
                x: (event.clientX - rect.left) / rect.width,
                y: (event.clientY - rect.top) / rect.height,
            };
            aberrationIntensity = 1;
        };

        const handleMouseEnter = (event: MouseEvent) => {
            easeFactor = 0.02;
            const rect = wrap.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width;
            const y = (event.clientY - rect.top) / rect.height;
            mousePosition = { x, y };
            targetMousePosition = { x, y };
        };

        const handleMouseLeave = () => {
            easeFactor = 0.05;
            targetMousePosition = { ...prevPosition };
        };

        wrap.addEventListener("mousemove", handleMouseMove);
        wrap.addEventListener("mouseenter", handleMouseEnter);
        wrap.addEventListener("mouseleave", handleMouseLeave);

        animateScene();

        return () => {
            window.cancelAnimationFrame(animationFrame);
            wrap.removeEventListener("mousemove", handleMouseMove);
            wrap.removeEventListener("mouseenter", handleMouseEnter);
            wrap.removeEventListener("mouseleave", handleMouseLeave);
            resizeObserver?.disconnect();
            if (planeMesh) {
                planeMesh.geometry.dispose();
                if (Array.isArray(planeMesh.material)) {
                    planeMesh.material.forEach((material) => material.dispose());
                } else {
                    planeMesh.material.dispose();
                }
            }
            texture.dispose();
            if (renderer) {
                renderer.dispose();
                renderer.domElement.remove();
            }
            scene = null;
            camera = null;
            renderer = null;
            planeMesh = null;
        };
    }, []);

    return (
        <section className="about container">
            <div className="about__layout">
                <div className="about__header">
                    <div className="about__eyebrowRow">
                        <div className="about__dot" />
                        <div className="about__eyebrow">О нас</div>
                    </div>
                    <h2 className="about__title">Кто мы такие?</h2>
                </div>

                <div className="about__content">
                    <div className="about__leadWrapper">
                        <p className="about__lead">
                            Университет — это тысячи людей. Тысячи талантливых студентов, которые активно развиваются
                            в различных профессиональных сферах. Платформа IT at MISIS (ITAM) помогает студентам,
                            интересующимся информационными технологиями, развиваться в различных областях
                        </p>
                    </div>

                    <div className="about__stats">
                        <div className="about__statCard">
                            <div className="about__statNumber">5.500+</div>
                            <div className="about__statText">
                                Подписчиков на всех площадках суммарно
                                (Telegram, VK, Youtube)
                            </div>
                        </div>

                        <div className="about__statCard">
                            <div className="about__statNumber">30+</div>
                            <div className="about__statText">
                                Проектов и внутренних
                                мероприятий создано
                                коммьюнити
                            </div>
                        </div>

                        <div className="about__statCard">
                            <div className="about__statNumber">7</div>
                            <div className="about__statText">
                                Клубов, объединенных
                                в одну платформу
                            </div>
                        </div>

                        <div className="about__statCard">
                            <div className="about__statNumber">22+</div>
                            <div className="about__statText">
                                Курсов, организованных студентами
                            </div>
                        </div>
                    </div>

                    <div className="about__imageWrap" ref={wrapRef} />
                    {/* <div className="about__what">
                        <div className="about__subtitle">Что мы делаем?</div>
                        <div className="about__whatRow">
                            <div className="about__whatCard">
                                <div className="about__whatTitle">Митапы</div>
                                <div className="about__whatText">
                                    Подписчиков на всех площадках суммарно
                                    <br />
                                    (Telegram, VK, Youtube)
                                </div>
                            </div>
                            <div className="about__whatCard">
                                <div className="about__whatTitle">Курсы</div>
                                <div className="about__whatText">
                                    Подписчиков на всех площадках суммарно
                                    <br />
                                    (Telegram, VK, Youtube)
                                </div>
                            </div>
                            <div className="about__whatCard">
                                <div className="about__whatTitle">Фестивали</div>
                                <div className="about__whatText">Создаем полноценные</div>
                            </div>
                            <div className="about__whatCard">
                                <div className="about__whatTitle">Хакатоны</div>
                                <div className="about__whatText">
                                    Подписчиков на всех площадках суммарно
                                    <br />
                                    (Telegram, VK, Youtube)
                                </div>
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
        </section>
    );
}
