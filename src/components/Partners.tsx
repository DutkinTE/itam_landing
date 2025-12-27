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
                        <div className="partners__logosRow">
                            <div className="partners__logoBlock partners__logoBlock--w167h45" />
                            <img
                                className="partners__logoImage partners__logoImage--w161h27"
                                src="https://placehold.co/161x27"
                                alt="Логотип партнёра"
                            />
                            <div className="partners__logoBlock partners__logoBlock--w114h45" />
                            <div className="partners__logoBlock partners__logoBlock--w164h39" />
                            <div className="partners__logoBlock partners__logoBlock--w70h39" />
                            <div className="partners__logoBlock partners__logoBlock--w272h40" />
                            <img
                                className="partners__logoImage partners__logoImage--w126h39"
                                src="https://placehold.co/126x39"
                                alt="Логотип партнёра"
                            />
                            <div className="partners__logoBlock partners__logoBlock--w210h45" />
                            <div className="partners__logoBlock partners__logoBlock--w110h43" />
                            <div className="partners__logoBlock partners__logoBlock--w200h45" />
                            <div className="partners__logoBlock partners__logoBlock--w233h45" />
                            <div className="partners__logoBlock partners__logoBlock--w176h19" />
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
