import { type JSX } from "react";
import "./partners.css";

export default function Partners(): JSX.Element {
    return (
        <section className="partners">
            <div className="partners__layout">
                <header className="partners__header">
                    <div className="partners__eyebrowRow">
                        <div className="partners__dot" />
                        <div className="partners__eyebrow">Партнеры</div>
                    </div>
                    <h2 className="partners__title">С кем мы работали</h2>
                </header>

                <div className="partners__content">
                    <div className="partners__leadWrapper">
                        <p className="partners__lead">
                            Вместе с лучшими ИТ-компаниями мы реализуем масштабные образовательные проекты. Мы открыты к
                            сотрудничеству в различных форматах, направленных на развитие и карьерный рост студентов,
                            а также на поддержку студенческих ИТ-сообществ и проектов.
                        </p>
                    </div>

                    <div className="partners__logosSection">
                        <div className="partners__logosViewport" aria-hidden="true">
                            <div className="partners__logosRow partners__logosRow--marquee">
                                <img className="partners__logoImage" src="/images/Vector-2.svg" alt="Логотип партнёра" />
                                <img className="partners__logoImage" src="/images/Vector-3.svg" alt="Логотип партнёра" />
                                <img className="partners__logoImage" src="/images/Vector-4.svg" alt="Логотип партнёра" />
                                <img className="partners__logoImage" src="/images/Vector-5.svg" alt="Логотип партнёра" />
                                <img className="partners__logoImage" src="/images/Vector-6.svg" alt="Логотип партнёра" />
                                <img className="partners__logoImage" src="/images/Vector-7.svg" alt="Логотип партнёра" />
                                <img className="partners__logoImage" src="/images/Vector-8.svg" alt="Логотип партнёра" />
                                <img className="partners__logoImage" src="/images/Vector-9.svg" alt="Логотип партнёра" />
                                <img className="partners__logoImage" src="/images/Vector-10.svg" alt="Логотип партнёра" />
                                <img className="partners__logoImage" src="/images/Vector-11.svg" alt="Логотип партнёра" />
                                <img className="partners__logoImage" src="/images/Vector-12.svg" alt="Логотип партнёра" />
                                <img className="partners__logoImage" src="/images/Vector-13.svg" alt="Логотип партнёра" />

                                {/* дублируем логотипы для бесшовной анимации */}
                                <img className="partners__logoImage" src="/images/Vector-2.svg" alt="" />
                                <img className="partners__logoImage" src="/images/Vector-3.svg" alt="" />
                                <img className="partners__logoImage" src="/images/Vector-4.svg" alt="" />
                                <img className="partners__logoImage" src="/images/Vector-5.svg" alt="" />
                                <img className="partners__logoImage" src="/images/Vector-6.svg" alt="" />
                                <img className="partners__logoImage" src="/images/Vector-7.svg" alt="" />
                                <img className="partners__logoImage" src="/images/Vector-8.svg" alt="" />
                                <img className="partners__logoImage" src="/images/Vector-9.svg" alt="" />
                                <img className="partners__logoImage" src="/images/Vector-10.svg" alt="" />
                                <img className="partners__logoImage" src="/images/Vector-11.svg" alt="" />
                                <img className="partners__logoImage" src="/images/Vector-12.svg" alt="" />
                                <img className="partners__logoImage" src="/images/Vector-13.svg" alt="" />
                            </div>
                        </div>

                        <div className="partners__statsRow">
                            <div className="partners__statCard">
                                <div className="partners__statNumber">20+</div>
                                <div className="partners__statText">Компаний-партнеров</div>
                            </div>

                            <div className="partners__statsDivider" />

                            <div className="partners__statCard">
                                <div className="partners__statNumber">10+</div>
                                <div className="partners__statText">Совместных проектов</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
