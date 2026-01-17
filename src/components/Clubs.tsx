import { type JSX, useState } from "react";
import "./clubs.css";

export default function Clubs(): JSX.Element {
    const defaultImage = "./images/EMPTYCLUB.png0001 1.png";
    const clubsList = [
        { name: "Хакатон клуб", image: "./images/HACKCLUB.png0001 1.png" },
        { name: "Дизайн клуб", image: "./images/DAMCLUB.png0001 1.png" },
        { name: "AI-knowledge клуб", image: "./images/AIKCCLUB.png0001 1.png" },
        { name: "Геймдев клуб", image: "./images/GAMEDEVCLUB.png0001 1.png" },
        { name: "Клуб робототехники", image: "./images/ROBOCLUB.png0001 1.png" },
        { name: "ACM клуб", image: "./images/ACMCLUB.png0001 1.png" },
        { name: "CTF клуб", image: "./images/CTFCLUB.png0001 1.png" },
    ];
    const [currentImage, setCurrentImage] = useState(defaultImage);

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
                                {clubsList.map(({ name, image }) => {
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
                                                onMouseEnter={() => setCurrentImage(image)}
                                                onMouseLeave={() => setCurrentImage(defaultImage)}
                                            >
                                                {content}
                                            </a>
                                        );
                                    }

                                    return (
                                        <div
                                            className="clubs__item"
                                            key={name}
                                            onMouseEnter={() => setCurrentImage(image)}
                                            onMouseLeave={() => setCurrentImage(defaultImage)}
                                        >
                                            {content}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <img className="clubs__img" src={currentImage} alt="club" />
                    </div>

                </div>

            </div>

        </section>
    );
}
