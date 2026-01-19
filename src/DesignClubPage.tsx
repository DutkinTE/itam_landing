import { type JSX } from "react";
import Header from "./components/Header";
import PageTransition from "./components/PageTransition";
import Footer from "./components/Footer";
import "./App.css";
import "./design-club.css";

const stats = [
    { value: "800+", label: "Участников клуба" },
    { value: "6", label: "Мероприятий" },
    { value: "2", label: "Выигранных креатона" },
];

const team = [
    {
        name: "Даниил Хатунцев",
        role: "Руководитель клуба",
        avatar: "https://placehold.co/100x100",
    },
    {
        name: "Маргарита Болгар",
        role: "Роль в команде",
        avatar: "https://placehold.co/100x100",
    },
    {
        name: "Маша Ковалева",
        role: "Роль в команде",
        avatar: "https://placehold.co/100x100",
    },
    {
        name: "Имя Фамилия",
        role: "Роль в команде",
        avatar: "https://placehold.co/100x100",
    },
    {
        name: "Владимир (Фамилия)",
        role: "Роль в команде",
        avatar: "https://placehold.co/100x100",
    },
    {
        name: "Аня (Фамилия)",
        role: "Роль в команде",
        avatar: "https://placehold.co/100x100",
    },
];

const projects = [
    {
        title: "Хакатон курсов",
        image: "https://placehold.co/728x410",
        tags: ["МИСИС", "Курсы", "Хакатон"],
    },
];

export default function DesignClubPage(): JSX.Element {
    return (
        <div className="page">
            <PageTransition />
            <Header />
            <main>
                <section className="designClub">
                    <div className="designClub__hero">
                        <div className="container designClub__container">
                            <div className="designClub__heroInner">
                                <h1 className="designClub__title">Дизайн клуб</h1>

                                <div className="designClub__buttonsRow">
                                    <button
                                        type="button"
                                        className="designClub__primaryButton"
                                    >
                                        <span className="designClub__primaryLabel">Чат клуба</span>
                                        <svg
                                            className="designClub__primaryIcon"
                                            width="22"
                                            height="22"
                                            viewBox="0 0 22 22"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                        >
                                            <path d="M14.5355 3.92909L13.1213 5.3433L17.7812 10.0031H1.39042V11.9972H17.7812L13.1213 16.657L14.5355 18.0712L21.6066 11.0002L14.5355 3.92909Z" />
                                        </svg>
                                    </button>
                                    <button
                                        type="button"
                                        className="designClub__primaryButton"
                                    >
                                        <span className="designClub__primaryLabel">Канал клуба</span>
                                        <svg
                                            className="designClub__primaryIcon"
                                            width="22"
                                            height="22"
                                            viewBox="0 0 22 22"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                        >
                                            <path d="M14.5355 3.92909L13.1213 5.3433L17.7812 10.0031H1.39042V11.9972H17.7812L13.1213 16.657L14.5355 18.0712L21.6066 11.0002L14.5355 3.92909Z" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="designClub__statsRow">
                                    <div className="designClub__statsCards">
                                        {stats.map((item) => (
                                            <div className="designClub__statCard" key={item.label}>
                                                <div className="designClub__statNumber">
                                                    {item.value}
                                                </div>
                                                <div className="designClub__statLabel">
                                                    {item.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="designClub__marks">
                                        <span className="designClub__mark designClub__mark--wide" />
                                        <span className="designClub__mark designClub__mark--mid" />
                                        <span className="designClub__mark designClub__mark--tall" />
                                        <span className="designClub__mark designClub__mark--dot" />
                                        <span className="designClub__mark designClub__mark--dot" />
                                        <span className="designClub__mark designClub__mark--square" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="designClub__section designClub__section--neutral">
                        <div className="container designClub__container">
                            <div className="designClub__sectionInner">
                                <div className="designClub__textBlock">
                                    <h2 className="designClub__sectionTitle">Описание</h2>
                                    <p className="designClub__text">
                                        Cообщество единомышленников, в котором каждый студент может получить необходимые навыки для успешного проектирования продуктов, рекламы и предметов, а также раскрыть
                                        свой творческий потенциал и научиться работать с графическими инструментами
                                    </p>
                                </div>

                                <div className="designClub__imagesRow designClub__imagesRow--wide">
                                    <div className="designClub__imageLarge" />
                                    <div className="designClub__imageLarge" />
                                </div>

                                <div className="designClub__textBlock">
                                    <h2 className="designClub__sectionTitle">Цель клуба</h2>
                                    <p className="designClub__text">
                                        Студенты учатся в краткие сроки создавать продукты, работать в IT-команде бок о бок
                                        с разработчиками и менеджерами, продумывать пользовательские пути, проводить исследования клиентского опыта и презентовать идеи. А за счет активного комьюнити
                                        и разборов решений, формируется благоприятная среда для обмена опытом
                                    </p>
                                </div>

                                <div className="designClub__imagesRow">
                                    <div className="designClub__imageMedium" />
                                    <div className="designClub__imageMedium" />
                                    <div className="designClub__imageMedium" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="designClub__section">
                        <div className="container designClub__container">
                            <div className="designClub__projectsHeader">
                                <h2 className="designClub__sectionHeading">Проекты</h2>
                                <div className="designClub__navButtons">
                                    <button
                                        type="button"
                                        className="designClub__navButton designClub__navButton--prev"
                                        aria-label="Предыдущий проект"
                                    >
                                        <img
                                            className="designClub__navIcon"
                                            src="/images/arr_r_icon.svg"
                                            alt=""
                                            aria-hidden="true"
                                        />
                                    </button>
                                    <button
                                        type="button"
                                        className="designClub__navButton"
                                        aria-label="Следующий проект"
                                    >
                                        <img
                                            className="designClub__navIcon"
                                            src="/images/arr_r_icon.svg"
                                            alt=""
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>
                            </div>

                            <div className="designClub__projectsGrid">
                                {projects.map((project) => (
                                    <article className="designClub__projectCard" key={project.title}>
                                        <img
                                            className="designClub__projectImage"
                                            src={project.image}
                                            alt={project.title}
                                        />
                                        <div className="designClub__projectFooter">
                                            <div className="designClub__projectInfo">
                                                <h3 className="designClub__projectTitle">
                                                    {project.title}
                                                </h3>
                                                <div className="designClub__tagsRow">
                                                    {project.tags.map((tag) => (
                                                        <span className="designClub__tag" key={tag}>
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="designClub__projectAction">
                                                <span className="designClub__projectActionSquare">
                                                    <svg
                                                        className="designClub__projectActionIcon"
                                                        width="22"
                                                        height="22"
                                                        viewBox="0 0 22 22"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        aria-hidden="true"
                                                    >
                                                        <path d="M14.5355 3.92909L13.1213 5.3433L17.7812 10.0031H1.39042V11.9972H17.7812L13.1213 16.657L14.5355 18.0712L21.6066 11.0002L14.5355 3.92909Z" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="designClub__section">
                        <div className="container designClub__container">
                            <h2 className="designClub__sectionHeading">Команда</h2>
                            <div className="designClub__teamGrid">
                                {team.map((member) => (
                                    <article className="designClub__teamCard" key={member.name}>
                                        <img
                                            className="designClub__teamAvatar"
                                            src={member.avatar}
                                            alt={member.name}
                                        />
                                        <div className="designClub__teamText">
                                            <div className="designClub__teamName">
                                                {member.name}
                                            </div>
                                            <div className="designClub__teamRole">
                                                {member.role}
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
