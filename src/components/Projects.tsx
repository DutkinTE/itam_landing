import { type JSX } from "react";
import "./projects.css";

type Project = {
  title: string;
  desc: string;
  tag: string;
};

export default function Projects(): JSX.Element {
  const projects: Project[] = [
    {
      title: "Фестиваль «ИКТОН 2024»",
      desc: "Лендинг, регистрация, партнёры, контент.",
      tag: "flagship",
    },
    {
      title: "Хакатон / ShortHack",
      desc: "Платформа для участников и трекинг задач.",
      tag: "hack",
    },
    {
      title: "Внутренние сервисы комьюнити",
      desc: "Бот, CRM, учёт участников, аналитика.",
      tag: "tools",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="kicker">ЧТО МЫ ДЕЛАЕМ</p>
            <h2 className="section-head__title">Проекты</h2>
            <p className="section-head__lead">
              От лендингов и платформ для ивентов до внутренних инструментов и
              исследовательских задач.
            </p>
          </div>

          <a className="btn btn--ghost section-head__cta" href="#">
            Все проекты
          </a>
        </div>

        <div className="projects__grid">
          <article className="project project--big">
            <div className="project__top">
              <span className="pill">{projects[0].tag}</span>
              <button className="btn btn--ghost btn--sm" type="button">
                Подробнее
              </button>
            </div>

            <h3 className="project__title">{projects[0].title}</h3>
            <p className="project__desc">{projects[0].desc}</p>

            <div className="media media--poster" aria-label="Постер проекта">
              <span className="chip">Превью/постер проекта</span>
            </div>
          </article>

          <div className="projects__side">
            {projects.slice(1).map((p) => (
              <article className="project" key={p.title}>
                <div className="project__top">
                  <span className="pill">{p.tag}</span>
                  <span className="arrow" aria-hidden>
                    →
                  </span>
                </div>

                <h3 className="project__title">{p.title}</h3>
                <p className="project__desc">{p.desc}</p>

                <div className="media media--mini" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>

        <div className="projects__cta-mobile">
          <a className="btn btn--ghost" href="#">
            Все проекты
          </a>
        </div>
      </div>
    </section>
  );
}
