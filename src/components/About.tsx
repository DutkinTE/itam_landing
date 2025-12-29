import { type JSX } from "react";
import "./about.css";

export default function About(): JSX.Element {

    return (
        <section className="about container">
            <div className="about__layout">
                <div className="about__header">
                    <div className="about__eyebrowRow">
                        <div className="about__dot" />
                        <div className="about__eyebrow">О нас</div>
                    </div>
                    <h2 className="about__title">Кто мы такие?</h2>
                </div>

                <div className="about__content">
                    <div className="about__leadWrapper">
                        <p className="about__lead">
                            Университет — это тысячи людей. Тысячи талантливых студентов, которые активно развиваются
                            в различных профессиональных сферах. Платформа IT at MISIS (ITAM) помогает студентам,
                            интересующимся информационными технологиями, развиваться в различных областях
                        </p>
                    </div>

                    <div className="about__stats">
                        <div className="about__statCard">
                            <div className="about__statNumber">5.500+</div>
                            <div className="about__statText">
                                Подписчиков на всех площадках суммарно
                                < br />
                                (Telegram, VK, Youtube)
                            </div>
                        </div>

                        <div className="about__statCard">
                            <div className="about__statNumber">30+</div>
                            <div className="about__statText">
                                Проектов и внутренних
                                <br />
                                мероприятий создано
                                <br />
                                коммьюнити
                            </div>
                        </div>

                        <div className="about__statCard">
                            <div className="about__statNumber">7</div>
                            <div className="about__statText">
                                Клубов, объединенных
                                <br />
                                в одну платформу
                            </div>
                        </div>

                        <div className="about__statCard">
                            <div className="about__statNumber">22+</div>
                            <div className="about__statText">
                                Курсов, организованных студентами,
                                <br />
                                для студентов
                            </div>
                        </div>
                    </div>

                    <img
                        className="about__image"
                        src="./images/photo.svg"
                        alt="IT at MISIS"
                    />
                    {/* <div className="about__what">
                        <div className="about__subtitle">Что мы делаем?</div>
                        <div className="about__whatRow">
                            <div className="about__whatCard">
                                <div className="about__whatTitle">Митапы</div>
                                <div className="about__whatText">
                                    Подписчиков на всех площадках суммарно
                                    <br />
                                    (Telegram, VK, Youtube)
                                </div>
                            </div>
                            <div className="about__whatCard">
                                <div className="about__whatTitle">Курсы</div>
                                <div className="about__whatText">
                                    Подписчиков на всех площадках суммарно
                                    <br />
                                    (Telegram, VK, Youtube)
                                </div>
                            </div>
                            <div className="about__whatCard">
                                <div className="about__whatTitle">Фестивали</div>
                                <div className="about__whatText">Создаем полноценные</div>
                            </div>
                            <div className="about__whatCard">
                                <div className="about__whatTitle">Хакатоны</div>
                                <div className="about__whatText">
                                    Подписчиков на всех площадках суммарно
                                    <br />
                                    (Telegram, VK, Youtube)
                                </div>
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
        </section>
    );
}
