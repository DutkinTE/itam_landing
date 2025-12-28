import { type JSX } from "react";
import "./team.css";
import ArrowButton from "./ArrowButton";

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

                    <ArrowButton
                        className="team__moreButton"
                        href="/team"
                        label="Подробнее"
                        labelClassName="team__moreLabel"
                        iconClassName="team__moreIcon"
                    />
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
