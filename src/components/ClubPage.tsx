import { type JSX } from "react";
import Header from "./Header";
import PageTransition from "./PageTransition";
import Footer from "./Footer";

type Stat = {
    value: string;
    label: string;
};

type Mark = {
    width: number;
    height: number;
    color: string;
    radius?: number;
};

type TeamMember = {
    name: string;
    role: string;
    avatar?: string;
};

type Project = {
    title: string;
    image: string;
    tags: string[];
};

type ClubPageProps = {
    title: string;
    buttons: string[];
    stats: Stat[];
    logoSrc?: string;
    marks?: Mark[];
    description: string;
    goal: string;
    team: TeamMember[];
    projects?: Project[];
};

const defaultProjects: Project[] = [
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

export default function ClubPage(props: ClubPageProps): JSX.Element {
    const {
        title,
        buttons,
        stats,
        logoSrc,
        marks,
        description,
        goal,
        team,
        projects = defaultProjects,
    } = props;

    return (
        <div className="page">
            <PageTransition />
            <Header />
            <main>
                <section className="hackClub">
                    <div className="hackClub__hero">
                        <div className="container hackClub__container">
                            <div className="hackClub__heroInner">
                                <h1 className="hackClub__title">{title}</h1>

                                <div className="hackClub__buttonsRow">
                                    {buttons.map((label) => (
                                        <button
                                            key={label}
                                            type="button"
                                            className="hackClub__primaryButton"
                                        >
                                            <span className="hackClub__primaryLabel">{label}</span>
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
                                    ))}
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

                                    {logoSrc ? (
                                        <div className="hackClub__logoWrap">
                                            <img
                                                className="hackClub__logo"
                                                src={logoSrc}
                                                alt=""
                                                aria-hidden="true"
                                            />
                                        </div>
                                    ) : marks?.length ? (
                                        <div className="hackClub__marks">
                                            {marks.map((mark, index) => (
                                                <span
                                                    key={`${mark.width}-${mark.height}-${index}`}
                                                    className="hackClub__mark"
                                                    style={{
                                                        width: `${mark.width}px`,
                                                        height: `${mark.height}px`,
                                                        background: mark.color,
                                                        borderRadius:
                                                            mark.radius ?? 9999,
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hackClub__section hackClub__section--neutral">
                        <div className="container hackClub__container">
                            <div className="hackClub__sectionInner">
                                <div className="hackClub__textBlock">
                                    <h2 className="hackClub__sectionTitle">Описание</h2>
                                    <p className="hackClub__text">{description}</p>
                                </div>

                                <div className="hackClub__imagesRow hackClub__imagesRow--wide">
                                    <div className="hackClub__imageLarge" />
                                    <div className="hackClub__imageLarge" />
                                </div>

                                <div className="hackClub__textBlock">
                                    <h2 className="hackClub__sectionTitle">Цель клуба</h2>
                                    <p className="hackClub__text">{goal}</p>
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
                                            src={member.avatar ?? "https://placehold.co/100x100"}
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

                    {projects.length ? (
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
                    ) : null}
                </section>
            </main>
            <Footer />
        </div>
    );
}
