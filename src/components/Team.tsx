import { type JSX } from "react";
import "./team.css";

function TeamRow(): JSX.Element {
    return (
        <div className="team__gridRow">
            <div className="team__cardLarge">
                <img
                    className="team__cardLargeImage"
                    src="https://placehold.co/350x350"
                    alt=""
                />
            </div>

            <div className="team__cluster">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div className="team__avatarWrapper" key={`cluster-1-${index}`}>
                        <img
                            className="team__avatar"
                            src="https://placehold.co/162x162"
                            alt=""
                        />
                    </div>
                ))}
            </div>

            <div className="team__cardLarge">
                <img
                    className="team__cardLargeImage"
                    src="https://placehold.co/350x350"
                    alt=""
                />
            </div>

            <div className="team__cluster">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div className="team__avatarWrapper" key={`cluster-2-${index}`}>
                        <img
                            className="team__avatar"
                            src="https://placehold.co/162x162"
                            alt=""
                        />
                    </div>
                ))}
            </div>

            <div className="team__cardLarge">
                <img
                    className="team__cardLargeImage"
                    src="https://placehold.co/350x350"
                    alt=""
                />
            </div>



            <div className="team__cluster">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div className="team__avatarWrapper" key={`cluster-3-${index}`}>
                        <img
                            className="team__avatar"
                            src="https://placehold.co/162x162"
                            alt=""
                        />
                    </div>
                ))}
            </div>

            <div className="team__cardLarge">
                <img
                    className="team__cardLargeImage"
                    src="https://placehold.co/350x350"
                    alt=""
                />
            </div>
        </div>
    );
}

export default function Team(): JSX.Element {
    return (
        <section className="team">
            <div className="container team__container">
                <div className="team__headerRow">
                    <header className="team__header">
                        <div className="team__eyebrowRow">
                            <div className="team__dot" />
                            <div className="team__eyebrow">Команда</div>
                        </div>
                        <h2 className="team__title">Наше сообщество</h2>
                    </header>

                    <div className="team__moreButton">
                        <span className="team__moreLabel">Подробнее</span>
                        <svg
                            className="team__moreIcon"
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
                    </div>
                </div>

            </div>
            <div className="team__carouselViewport" aria-hidden="true">
                <div className="team__carouselRow">
                    <TeamRow />
                    <TeamRow />
                </div>
            </div>
        </section>
    );
}
