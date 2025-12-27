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

    const currentIndex = activeIndex;
    const trackTransform = `translateX(calc(50vw - 417px - (1072px * ${currentIndex})))`;

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
