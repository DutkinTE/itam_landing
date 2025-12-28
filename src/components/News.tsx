import { type JSX } from "react";
import "./news.css";

type NewsItem = {
    date: string;
    source: string;
    title: string;
    image: string;
    link: string;
};

const newsItems: NewsItem[] = [
    {
        date: "18 июн 2024",
        source: "Habr",
        title: "Хакатоны — это не страшно: в НИТУ МИСИС придумали как помочь новичкам",
        image: "./images/project_image-5.svg",
        link: "/media",
    },
    {
        date: "18 июн 2024",
        source: "Habr",
        title: "Хакатоны — это не страшно: в НИТУ МИСИС придумали как помочь новичкам.",
        image: "./images/project_image-5.svg",
        link: "/media",
    },
];

export default function News(): JSX.Element {
    return (
        <section className="news">
            <div className="container news__container">
                <div className="news__layout">
                    <header className="news__header">
                        <div className="news__eyebrowRow">
                            <div className="news__dot" />
                            <div className="news__eyebrow">последние упоминания</div>
                        </div>
                        <h2 className="news__title">СМИ о нас</h2>
                    </header>

                    <div className="news__list">
                        <div className="news__divider" />
                        {newsItems.map((item) => (
                            <div className="news__item" key={`${item.source}-${item.date}-${item.title}`}>
                                <div className="news__row">
                                    <div className="news__date">{item.date}</div>

                                    <div className="news__content">
                                        <img
                                            className="news__image"
                                            src={item.image}
                                            alt={item.title}
                                            loading="lazy"
                                        />

                                        <div className="news__textColumn">
                                            <div className="news__meta">
                                                <div className="news__badge">
                                                    <div className="news__badgeLabel">{item.source}</div>
                                                </div>
                                                <div className="news__headline">{item.title}</div>
                                            </div>

                                            <a
                                                className="news__readMore"
                                                href={item.link}
                                            >
                                                <span className="news__readMoreLabel">Читать подробнее</span>
                                                <svg
                                                    className="news__readMoreIcon"
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
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="news__divider" />
                            </div>
                        ))}
                        <a className="news__more" href="/media">
                            <div className="news__moreRow">
                                <span className="news__moreLabel">Смотреть все</span>
                                <span className="news__moreSquare">
                                    <svg
                                        className="news__moreIcon"
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
                                </span>
                            </div>
                            <div className="news__moreLine" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
