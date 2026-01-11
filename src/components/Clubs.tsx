import { type JSX } from "react";
import "./clubs.css";

export default function Clubs(): JSX.Element {
    const clubsList = [
        "Хакатон клуб",
        "Дизайн клуб",
        "AI-knowledge клуб",
        "Геймдев клуб",
        "Клуб робототехники",
        "ACM клуб",
        "CTF клуб",
    ];

    return (
        <section className="clubs" id="clubs">
            <div className="container ">
                <div className="clubs__layout">
                    <header className="clubs__header">
                        <div className="clubs__eyebrowRow">
                            <div className="clubs__dot" />
                            <div className="clubs__eyebrow">Клубы</div>
                        </div>
                        <h2 className="clubs__title">Наши клубы</h2>
                    </header>
                    <div className="clubs__container">
                        <div className="clubs__listWrapper">
                            <div className="clubs__list">
                                {clubsList.map((name) => {
                                    const content = (
                                        <>
                                            <img
                                                className="clubs__iconArrowRight"
                                                src="./images/Union.svg"
                                                alt=""
                                            />
                                            <div className="clubs__itemLabel">{name}</div>
                                        </>
                                    );

                                    if (name === "Хакатон клуб") {
                                        return (
                                            <a
                                                className="clubs__item"
                                                href="/club/hackathon"
                                                key={name}
                                            >
                                                {content}
                                            </a>
                                        );
                                    }

                                    return (
                                        <div className="clubs__item" key={name}>
                                            {content}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <img className="clubs__img" src="./images/3d-element.svg" alt="core" />
                    </div>

                </div>

            </div>

        </section>
    );
}
