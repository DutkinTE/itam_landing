import { type JSX } from "react";
import "./projects.css";

type Project = {
    title: string;
    desc: string;
    tag: string;
};

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
        <section className="projects" id="projects">
            <div className="container">
                <div className="projects__title">
                    ПРОЕКТЫ
                </div>
            </div>
        </section>
    );
}
