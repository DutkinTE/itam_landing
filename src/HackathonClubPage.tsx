import { type JSX } from "react";
import Header from "./components/Header";
import PageTransition from "./components/PageTransition";
import Footer from "./components/Footer";
import "./App.css";
import "./hackathon-club.css";

const stats = [
    { value: "1800+", label: "Участников клуба" },
    { value: "15+", label: "Мероприятий" },
    { value: "322", label: "Побед на хакатонах" },
];

const team = [
    {
        name: "Дмитрий Кряжев",
        role: "Руководитель клуба",
        avatar: "https://placehold.co/100x100",
    },
    {
        name: "Геннадий Альхеев",
        role: "Коммьюнити-менеджер",
        avatar: "https://placehold.co/100x100",
    },
    {
        name: "Максим Усков",
        role: "Разработчик",
        avatar: "https://placehold.co/100x100",
    },
    {
        name: "Ранель Хаметшин",
        role: "Разработчик",
        avatar: "https://placehold.co/100x100",
    },
    {
        name: "Денис Земцов",
        role: "Коммьюнити-менеджер",
        avatar: "https://placehold.co/100x100",
    },
    {
        name: "Иван Григорьев",
        role: "Коммьюнити-менеджер",
        avatar: "https://placehold.co/100x100",
    },
];

const projects = [
    {
        title: "Хакатон курсов",
        image: "https://placehold.co/728x410",
        tags: ["МИСИС", "Курсы", "Хакатон"],
    },
    {
        title: "Хакатон курсов",
        image: "https://placehold.co/728x410",
        tags: ["МИСИС", "Курсы", "Хакатон"],
    },
];

export default function HackathonClubPage(): JSX.Element {
    return (
        <div className="page">
            <PageTransition />
            <Header />
            <main>
                <section className="hackClub">
                    <div className="hackClub__hero">
                        <div className="container hackClub__container">
                            <div className="hackClub__heroInner">
                                <h1 className="hackClub__title">Хакатон клуб</h1>

                                <div className="hackClub__buttonsRow">
                                    <button
                                        type="button"
                                        className="hackClub__primaryButton"
                                    >
                                        <span className="hackClub__primaryLabel">Чат клуба</span>
                                        <svg
                                            className="hackClub__primaryIcon"
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
                                        className="hackClub__primaryButton"
                                    >
                                        <span className="hackClub__primaryLabel">Канал клуба</span>
                                        <svg
                                            className="hackClub__primaryIcon"
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

                                <div className="hackClub__statsRow">
                                    <div className="hackClub__statsCards">
                                        {stats.map((item) => (
                                            <div className="hackClub__statCard" key={item.label}>
                                                <div className="hackClub__statNumber">
                                                    {item.value}
                                                </div>
                                                <div className="hackClub__statLabel">
                                                    {item.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="hackClub__badgeWrap">
                                        <img
                                            className="hackClub__badge"
                                            src="/images/hackClub.svg"
                                            alt="Hack Club"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hackClub__section hackClub__section--neutral">
                        <div className="container hackClub__container">
                            <div className="hackClub__sectionInner">
                                <div className="hackClub__textBlock">
                                    <h2 className="hackClub__sectionTitle">Описание</h2>
                                    <p className="hackClub__text">
                                        Хакатон-клуб НИТУ МИСИС - это динамичное сообщество студентов,
                                        специализирующееся на участии в технологических конкурсах и
                                        хакатонах. Студенты, состоящие в клубе, нацелены на развитие
                                        своих профессиональных навыков и компетенций через
                                        практический опыт в решении реальных бизнес-задач. Это
                                        сообщество не только способствует академическому и
                                        профессиональному росту своих участников, но и служит
                                        платформой для создания инновационных IT-проектов и развития
                                        карьеры в сфере информационных технологий.
                                    </p>
                                </div>

                                <div className="hackClub__textBlock">
                                    <h2 className="hackClub__sectionTitle">Цель клуба</h2>
                                    <p className="hackClub__text">
                                        Участники Хакатон-клуба НИТУ МИСИС получают бесценный опыт,
                                        научившись работать с бизнес-заказчиками, менторами и
                                        инвесторами напрямую, без посредников. Клуб предоставляет
                                        возможность студентам разрабатывать реальные IT-решения в
                                        ограниченные сроки, что способствует развитию их способности к
                                        быстрому принятию решений и адаптации к изменяющимся условиям.
                                        Студенты также учатся многофункциональному сотрудничеству в
                                        командах, охватывающих различные роли, такие как
                                        программисты, аналитики и дизайнеры.
                                    </p>
                                </div>

                                <div className="hackClub__imagesRow hackClub__imagesRow--wide">
                                    <div className="hackClub__imageLarge" />
                                    <div className="hackClub__imageLarge" />
                                </div>

                                

                                <div className="hackClub__imagesRow">
                                    <div className="hackClub__imageMedium" />
                                    <div className="hackClub__imageMedium" />
                                    <div className="hackClub__imageMedium" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hackClub__section">
                        <div className="container hackClub__container">
                            <h2 className="hackClub__sectionHeading">Команда</h2>
                            <div className="hackClub__teamGrid">
                                {team.map((member) => (
                                    <article className="hackClub__teamCard" key={member.name}>
                                        <img
                                            className="hackClub__teamAvatar"
                                            src={member.avatar}
                                            alt={member.name}
                                        />
                                        <div className="hackClub__teamText">
                                            <div className="hackClub__teamName">
                                                {member.name}
                                            </div>
                                            <div className="hackClub__teamRole">
                                                {member.role}
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="hackClub__section">
                        <div className="container hackClub__container">
                            <div className="hackClub__projectsHeader">
                                <h2 className="hackClub__sectionHeading">Проекты</h2>
                                <div className="hackClub__navButtons">
                                    <button
                                        type="button"
                                        className="hackClub__navButton hackClub__navButton--prev"
                                        aria-label="Предыдущий проект"
                                    >
                                        <img
                                            className="hackClub__navIcon"
                                            src="/images/arr_r_icon.svg"
                                            alt=""
                                            aria-hidden="true"
                                        />
                                    </button>
                                    <button
                                        type="button"
                                        className="hackClub__navButton"
                                        aria-label="Следующий проект"
                                    >
                                        <img
                                            className="hackClub__navIcon"
                                            src="/images/arr_r_icon.svg"
                                            alt=""
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>
                            </div>

                            <div className="hackClub__projectsGrid">
                                {projects.map((project) => (
                                    <article className="hackClub__projectCard" key={project.title}>
                                        <img
                                            className="hackClub__projectImage"
                                            src={project.image}
                                            alt={project.title}
                                        />
                                        <div className="hackClub__projectFooter">
                                            <div className="hackClub__projectInfo">
                                                <h3 className="hackClub__projectTitle">
                                                    {project.title}
                                                </h3>
                                                <div className="hackClub__tagsRow">
                                                    {project.tags.map((tag) => (
                                                        <span className="hackClub__tag" key={tag}>
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="hackClub__projectAction">
                                                <span className="hackClub__projectActionSquare">
                                                    <svg
                                                        className="hackClub__projectActionIcon"
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
                </section>
            </main>
            <Footer />
        </div>
    );
}
