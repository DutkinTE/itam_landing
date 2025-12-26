import { type JSX } from "react";
import "./projects.css";

// type Project = {
//     title: string;
//     desc: string;
//     tag: string;
// };

export default function Projects(): JSX.Element {
    // const projects: Project[] = [
    //     {
    //         title: "Фестиваль «ИКТОН 2024»",
    //         desc: "Лендинг, регистрация, партнёры, контент.",
    //         tag: "flagship",
    //     },
    //     {
    //         title: "Хакатон / ShortHack",
    //         desc: "Платформа для участников и трекинг задач.",
    //         tag: "hack",
    //     },
    //     {
    //         title: "Внутренние сервисы комьюнити",
    //         desc: "Бот, CRM, учёт участников, аналитика.",
    //         tag: "tools",
    //     },
    // ];

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
        </section>
    );
}
