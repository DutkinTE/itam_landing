import { type JSX, useEffect, useRef } from "react";
import "./page-transition.css";

type TransitionMode = "enter" | "exit";

const GRID_SIZE = 84;
const TRANSITION_DURATION = 1800;

export default function PageTransition(): JSX.Element {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const rafRef = useRef<number | null>(null);
    const cellsRef = useRef<number[]>([]);
    const sizeRef = useRef({
        width: 0,
        height: 0,
        cols: 0,
        rows: 0,
    });
    const stateRef = useRef({
        running: false,
        startTime: 0,
        mode: "enter" as TransitionMode,
    });
    const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }

        const ctx = canvas.getContext("2d");
        if (!ctx) {
            return;
        }

        const overlayColor =
            getComputedStyle(document.documentElement)
                .getPropertyValue("--bg-primary")
                .trim() || "#0e0d0f";

        const updateSize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const dpr = window.devicePixelRatio || 1;
            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            const cols = Math.ceil(width / GRID_SIZE);
            const rows = Math.ceil(height / GRID_SIZE);
            sizeRef.current = { width, height, cols, rows };

            const total = cols * rows;
            const cells = new Array(total).fill(0).map(() => Math.random());
            cellsRef.current = cells;
        };

        const render = (coverage: number) => {
            const { width, height, cols, rows } = sizeRef.current;
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = overlayColor;

            let index = 0;
            for (let y = 0; y < rows; y += 1) {
                for (let x = 0; x < cols; x += 1) {
                    const threshold = cellsRef.current[index];
                    if (coverage >= threshold) {
                        ctx.fillRect(
                            x * GRID_SIZE,
                            y * GRID_SIZE,
                            GRID_SIZE,
                            GRID_SIZE,
                        );
                    }
                    index += 1;
                }
            }
        };

        const randomizeCells = () => {
            const total = sizeRef.current.cols * sizeRef.current.rows;
            const cells = new Array(total).fill(0).map(() => Math.random());
            cellsRef.current = cells;
        };

        const setVisible = (visible: boolean) => {
            canvas.style.visibility = visible ? "visible" : "hidden";
        };

        const animate = (mode: TransitionMode, onDone?: () => void) => {
            if (prefersReducedMotion) {
                onDone?.();
                return;
            }
            if (stateRef.current.running) {
                if (rafRef.current) {
                    window.cancelAnimationFrame(rafRef.current);
                }
                stateRef.current.running = false;
            }
            stateRef.current.running = true;
            stateRef.current.startTime = performance.now();
            stateRef.current.mode = mode;
            setVisible(true);
            randomizeCells();
            render(mode === "exit" ? 0 : 1);

            const tick = (now: number) => {
                const elapsed = now - stateRef.current.startTime;
                const progress = Math.min(elapsed / TRANSITION_DURATION, 1);
                const eased = progress * (2 - progress);
                const coverage =
                    stateRef.current.mode === "exit" ? eased : 1 - eased;

                render(coverage);

                if (progress < 1) {
                    rafRef.current = window.requestAnimationFrame(tick);
                } else {
                    stateRef.current.running = false;
                    if (stateRef.current.mode === "enter") {
                        setVisible(false);
                    }
                    onDone?.();
                }
            };

            rafRef.current = window.requestAnimationFrame(tick);
        };

        const handlePageShow = (event: PageTransitionEvent) => {
            if (event.persisted) {
                if (rafRef.current) {
                    window.cancelAnimationFrame(rafRef.current);
                }
                stateRef.current.running = false;
                setVisible(false);
            }
        };

        const handleClick = (event: MouseEvent) => {
            if (prefersReducedMotion) {
                return;
            }
            if (event.defaultPrevented) {
                return;
            }
            if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
                return;
            }
            const target = event.target as HTMLElement | null;
            const anchor = target?.closest("a");
            if (!anchor || anchor.target || anchor.hasAttribute("data-no-transition")) {
                return;
            }
            const href = anchor.getAttribute("href");
            if (!href || href.startsWith("#")) {
                return;
            }
            const url = new URL(href, window.location.href);
            if (url.origin !== window.location.origin) {
                return;
            }
            if (
                url.pathname === window.location.pathname &&
                url.search === window.location.search &&
                url.hash
            ) {
                return;
            }
            event.preventDefault();
            animate("exit", () => {
                window.location.href = url.toString();
            });
        };

        updateSize();
        setVisible(false);
        animate("enter");

        window.addEventListener("resize", updateSize);
        document.addEventListener("click", handleClick);
        window.addEventListener("pageshow", handlePageShow);

        return () => {
            if (rafRef.current) {
                window.cancelAnimationFrame(rafRef.current);
            }
            document.removeEventListener("click", handleClick);
            window.removeEventListener("resize", updateSize);
            window.removeEventListener("pageshow", handlePageShow);
        };
    }, [prefersReducedMotion]);

    return (
        <canvas
            ref={canvasRef}
            className="page-transition__canvas"
            aria-hidden="true"
            style={{
                position: "fixed",
                inset: 0,
                width: "100%",
                height: "100%",
                zIndex: 9999,
                pointerEvents: "none",
                visibility: "hidden",
                imageRendering: "pixelated",
            }}
        />
    );
}
