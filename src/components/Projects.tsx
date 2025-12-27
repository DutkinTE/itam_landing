import { type JSX, useState } from "react";
import "./projects.css";

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

    const projectsCount = projects.length;

    const getWrappedIndex = (index: number): number => {
        const mod = index % projectsCount;
        return mod < 0 ? mod + projectsCount : mod;
    };

    const visible = [
        { project: projects[getWrappedIndex(activeIndex - 1)], index: getWrappedIndex(activeIndex - 1), position: "prev" as const },
        { project: projects[getWrappedIndex(activeIndex)], index: getWrappedIndex(activeIndex), position: "current" as const },
        { project: projects[getWrappedIndex(activeIndex + 1)], index: getWrappedIndex(activeIndex + 1), position: "next" as const },
    ];

    return (
        <section className="projects" >
            <div className="container">
                <div className="projects__inner">
                    <div className="projects_header">
                        <div className="projects__title">
                            ПРОЕКТЫ
                        </div>
                        <div className="projects__subtitle">
                            Что мы делаем?
                        </div>
                    </div>
                    <div className="projects__button">
                        Смотреть все
                        <svg
                            className="projects__iconArrowRight"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path
                                d="M14.5355 3.92909L13.1213 5.3433L17.7812 10.0031H1.39042V11.9972H17.7812L13.1213 16.657L14.5355 18.0712L21.6066 11.0002L14.5355 3.92909Z"
                            />
                        </svg>
                    </div>
                </div>


            </div>
                <div className="projects__carousel">
                    <div className="projects__track">
                        {visible.map(({ project, index, position }) => (
                            <article
                                className={`projects__card projects__card--${position}`}
                                key={`${project.title}-${position}`}
                                onClick={position === "current" ? undefined : () => setActiveIndex(index)}
                            >
                                <div className="projects__cardImageWrapper">
                                    <img
                                        className="projects__cardImage"
                                    src={project.img}
                                    alt={project.title}
                                        loading="lazy"
                                    />
                                </div>
                                {position === "current" && (
                                    <div className="projects__cardContent">
                                        <h3 className="projects__cardTitle">{project.title}</h3>
                                        <div className="projects__cardTags">
                                            {project.tags.map((tag) => (
                                                <span className="projects__cardTag" key={tag}>
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </article>
                        ))}
                    </div>
                </div>
        </section>
    );
}
