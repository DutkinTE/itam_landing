import { type JSX } from "react";
import Header from "./components/Header";
import "./App.css";
import "./media-page.css";

type MediaItem = {
    date: string;
    source: string;
    title: string;
    image: string;
};

const mediaItems: MediaItem[] = [
    {
        date: "18 июн 2024",
        source: "Habr",
        title: "Хакатоны — это не страшно: в НИТУ МИСИС придумали как помочь новичкам",
        image: "https://placehold.co/565x320",
    },
    {
        date: "07 мая 2024",
        source: "Forbes Education",
        title: "Как студенческие IT‑сообщества помогают стартовать в индустрии",
        image: "https://placehold.co/565x320",
    },
    {
        date: "22 апр 2024",
        source: "VC.ru",
        title: "От хакатона до собственной студии: кейс IT at MISIS",
        image: "https://placehold.co/565x320",
    },
    {
        date: "15 мар 2024",
        source: "RB.ru",
        title: "Почему студенты выбирают карьеру через проектные команды",
        image: "https://placehold.co/565x320",
    },
];

export default function MediaPage(): JSX.Element {
    return (
        <div className="page">
            <Header />
            <main>
                <section className="mediaPage">
                    <div className="container mediaPage__container">
                        <div className="mediaPage__heroRow">
                            <header className="mediaPage__hero">
                                <h1 className="mediaPage__title">Упоминания в СМИ</h1>
                                <div className="mediaPage__filters">
                                    <button
                                        className="mediaPage__filter mediaPage__filter--active"
                                        type="button"
                                    >
                                        Все
                                    </button>
                                    <button className="mediaPage__filter" type="button">
                                        2026
                                    </button>
                                    <button className="mediaPage__filter" type="button">
                                        2025
                                    </button>
                                    <button className="mediaPage__filter" type="button">
                                        2024
                                    </button>
                                    <button className="mediaPage__filter" type="button">
                                        2023
                                    </button>
                                </div>
                            </header>


                        </div>

                        <div className="mediaPage__list">
                            <div className="mediaPage__divider" />

                            {mediaItems.map((item) => (
                                <article
                                    key={`${item.source}-${item.date}-${item.title}`}
                                    className="mediaPage__item"
                                >
                                    <div className="mediaPage__row">
                                        <div className="mediaPage__date">{item.date}</div>

                                        <div className="mediaPage__content">
                                            <img
                                                className="mediaPage__image"
                                                src={item.image}
                                                alt={item.title}
                                                loading="lazy"
                                            />

                                            <div className="mediaPage__textColumn">
                                                <div className="mediaPage__meta">
                                                    <div className="mediaPage__badge">
                                                        <div className="mediaPage__badgeLabel">
                                                            {item.source}
                                                        </div>
                                                    </div>
                                                    <h2 className="mediaPage__headline">
                                                        {item.title}
                                                    </h2>
                                                </div>

                                                <a
                                                    className="mediaPage__readMore"
                                                    href="#"
                                                >
                                                    <span className="mediaPage__readMoreLabel">
                                                        Читать подробнее
                                                    </span>
                                                    <svg
                                                        className="mediaPage__readMoreIcon"
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

                                    <div className="mediaPage__divider" />
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
