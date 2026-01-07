import { type JSX, useEffect, useState } from "react";
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

    const currentIndex = activeIndex;
    const trackTransform = isMobile
        ? "none"
        : `translateX(calc(50vw - 417px - (1072px * ${currentIndex})))`;

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
            <div className="projects__carousel">
                <div
                    className="projects__track"
                    style={{ transform: trackTransform }}
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
