import { type JSX, useEffect, useLayoutEffect, useRef, useState } from "react";
import "./projects.css";
import ArrowButton from "./ArrowButton";

type Project = {
    title: string;
    img: string;
    tags: string[];
};

export default function Projects(): JSX.Element {
    const projects: Project[] = [
        {
            title: "Хакатон курсов",
            img: "./images/project_image.svg",
            tags: ["МИСИС", "Курсы", "Хакатон"],
        },
        {
            title: "ИКН Фест 2025",
            img: "./images/project_image-2.svg",
            tags: ["МИСИС", "Мероприятие"],
        },
        {
            title: "Креатон",
            img: "./images/project_image-3.svg",
            tags: ["МИСИС", "Хакатон", "Дизайн"],
        },
        {
            title: "Фестиваль ИКН 2024",
            img: "./images/project_image-4.svg",
            tags: ["МИСИС", "Мероприятие"],
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [trackOffset, setTrackOffset] = useState(0);
    const [trackPadding, setTrackPadding] = useState(0);
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const cardRefs = useRef<(HTMLElement | null)[]>([]);

    const [isMobile, setIsMobile] = useState(() =>
        typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches
    );

    useEffect(() => {
        const mql = window.matchMedia("(max-width: 768px)");
        const onChange = (e: MediaQueryListEvent): void => setIsMobile(e.matches);

        // Safari < 14
        if ("addEventListener" in mql) {
            mql.addEventListener("change", onChange);
            return () => mql.removeEventListener("change", onChange);
        } else {
            (mql as any).addListener(onChange);
            return () => (mql as any).removeListener(onChange);
        }
    }, []);

    useLayoutEffect(() => {
        if (isMobile) return;
        if (!carouselRef.current || !trackRef.current) return;

        const updateOffset = () => {
            const carousel = carouselRef.current;
            const track = trackRef.current;
            const card = cardRefs.current[activeIndex];

            if (!carousel || !track || !card) return;

            const carouselWidth = carousel.clientWidth;
            const cardHalf = card.offsetWidth / 2;
            const padding = Math.max(0, carouselWidth / 2 - cardHalf);
            const trackWidth = track.scrollWidth;
            const cardCenter = card.offsetLeft + cardHalf;

            if (padding !== trackPadding) {
                setTrackPadding(padding);
                return;
            }

            const desiredOffset = carouselWidth / 2 - cardCenter;
            const minOffset = carouselWidth - trackWidth;
            const maxOffset = 0;

            setTrackOffset(Math.min(maxOffset, Math.max(minOffset, desiredOffset)));
        };

        updateOffset();

        const resizeObserver = new ResizeObserver(() => updateOffset());
        resizeObserver.observe(carouselRef.current);
        resizeObserver.observe(trackRef.current);
        cardRefs.current.forEach((node) => {
            if (node) resizeObserver.observe(node);
        });

        return () => resizeObserver.disconnect();
    }, [activeIndex, isMobile, trackPadding]);

    const trackTransform = isMobile ? "none" : `translateX(${trackOffset}px)`;

    return (
        <section className="projects" >
            <div className="container">
                <div className="projects__inner">
                    <div className="projects_header">
                        <div className="projects__title">
                            Проекты
                        </div>
                        <div className="projects__subtitle">
                            Наши продукты
                        </div>
                    </div>
                    <ArrowButton
                        className="projects__button"
                        iconClassName="projects__iconArrowRight"
                        href="/projects"
                        label="Смотреть все"
                    />
                </div>


            </div>
            <div className="projects__carousel" ref={carouselRef}>
                <div
                    className="projects__track"
                    style={{
                        transform: trackTransform,
                        paddingInline: isMobile ? undefined : `${trackPadding}px`,
                    }}
                    ref={trackRef}
                >
                    {projects.map((project, index) => {
                        let positionClass = "projects__card--rest";

                        if (index === activeIndex) {
                            positionClass = "projects__card--current";
                        } else if (index === activeIndex - 1) {
                            positionClass = "projects__card--prev";
                        } else if (index === activeIndex + 1) {
                            positionClass = "projects__card--next";
                        }

                        const isCurrent = index === activeIndex;

                        return (
                            <article
                                className={`projects__card ${positionClass}`}
                                key={project.title}
                                ref={(node) => {
                                    cardRefs.current[index] = node;
                                }}
                                onClick={
                                    isCurrent ? undefined : () => setActiveIndex(index)
                                }
                            >
                                <img
                                    className="projects__cardImage"
                                    src={project.img}
                                    alt={project.title}
                                    loading="lazy"
                                />
                                <div className="projects__cardContent">
                                    <h3 className="projects__cardTitle">{project.title}</h3>
                                    <div className="projects__cardTags">
                                        {project.tags.map((tag) => (
                                            <span className="projects__cardTag" key={tag + project.title}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
