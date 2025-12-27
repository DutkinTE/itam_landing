import { type JSX } from "react";
import "./achievements.css";

export default function Achievements(): JSX.Element {

    return (
        <section className="achievements">
            <div className="achievements__layout">
                <header className="achievements__header">
                    <div className="achievements__eyebrowRow">
                        <div className="achievements__dot" />
                        <div className="achievements__eyebrow">Достижения</div>
                    </div>
                    <h2 className="achievements__title">Наши результаты</h2>
                </header>

                <div className="achievements__content">
                    <div className="achievements__leadWrapper">
                        <p className="achievements__lead">
                            Участники коммьюнити демонстрируют постоянный профессиональный рост и регулярно
                            добиваются впечатляющих успехов в престижных соревнованиях самого разного профиля.
                        </p>
                    </div>

                    <div className="achievements__stats">
                        <div className="achievements__statCard">
                            <div className="achievements__statNumber">~14 млн</div>
                            <div className="achievements__statText">
                                Рублей общий выигрыш
                                <br />
                                за 2024 год
                            </div>
                        </div>

                        <div className="achievements__statsDivider" />

                        <div className="achievements__statCard">
                            <div className="achievements__statNumber">93</div>
                            <div className="achievements__statText">
                                Побед и призовых мест было взято участниками коммьюнити
                                <br />
                                за последние 4 года
                            </div>
                        </div>

                        <div className="achievements__statsDivider" />

                        <div className="achievements__statCard">
                            <div className="achievements__statNumber">2</div>
                            <div className="achievements__statText">
                                Награда
                                <br />
                                «Мастерская побед»
                            </div>
                        </div>
                    </div>

                    <div className="achievements__list">
                        <div className="achievements__listHeader">
                            <h3 className="achievements__listTitle">
                                Последние 20 затащенных хакатонов 2025:
                            </h3>
                        </div>

                        <div className="achievements__listTable">
                            <div className="achievements__listSeparator" />

                            <div className="achievements__listRow">
                                <div className="achievements__listCell achievements__listCell--event">
                                    IT Purple Hack
                                </div>
                                <div className="achievements__listCell achievements__listCell--team">
                                    Т.Ч.К. MISIS
                                </div>
                                <div className="achievements__listCell achievements__listCell--place">
                                    1 место
                                </div>
                            </div>

                            <div className="achievements__listSeparator" />

                            <div className="achievements__listRow">
                                <div className="achievements__listCell achievements__listCell--event">
                                    IT Purple Hack
                                </div>
                                <div className="achievements__listCell achievements__listCell--team">
                                    Мы мисис 177 бочонок!!!
                                </div>
                                <div className="achievements__listCell achievements__listCell--place">
                                    2 место
                                </div>
                            </div>

                            <div className="achievements__listSeparator" />

                            <div className="achievements__listRow">
                                <div className="achievements__listCell achievements__listCell--event">
                                    IT Purple Hack
                                </div>
                                <div className="achievements__listCell achievements__listCell--team">
                                    МИСИС Блинчики
                                </div>
                                <div className="achievements__listCell achievements__listCell--place">
                                    3 место
                                </div>
                            </div>

                            <div className="achievements__listSeparator" />

                            <div className="achievements__listRow">
                                <div className="achievements__listCell achievements__listCell--event">
                                    TenderHack Иркутск
                                </div>
                                <div className="achievements__listCell achievements__listCell--team">
                                    Капитошка МИСИС
                                </div>
                                <div className="achievements__listCell achievements__listCell--place">
                                    2 место
                                </div>
                            </div>

                            <div className="achievements__listSeparator" />

                            <div className="achievements__listRow">
                                <div className="achievements__listCell achievements__listCell--event">
                                    BEST HACK Москва
                                </div>
                                <div className="achievements__listCell achievements__listCell--team">
                                    YSL MISIS
                                </div>
                                <div className="achievements__listCell achievements__listCell--place">
                                    2 место
                                </div>
                            </div>

                            <div className="achievements__listSeparator" />

                            <div className="achievements__listRow">
                                <div className="achievements__listCell achievements__listCell--event">
                                    МТС Система Хак: Нижний Новгород
                                </div>
                                <div className="achievements__listCell achievements__listCell--team">
                                    Динозаврики МИСИС
                                </div>
                                <div className="achievements__listCell achievements__listCell--place">
                                    1 место
                                </div>
                            </div>

                            <div className="achievements__listSeparator" />

                            <div className="achievements__listRow">
                                <div className="achievements__listCell achievements__listCell--event">
                                    МТС Система Хак: Нижний Новгород
                                </div>
                                <div className="achievements__listCell achievements__listCell--team">
                                    14-Bit MISIS
                                </div>
                                <div className="achievements__listCell achievements__listCell--place">
                                    1 место
                                </div>
                            </div>

                            <div className="achievements__listSeparator" />
                        </div>
                    </div>

                    <div className="achievements__more">
                        <div className="achievements__moreRow">
                            <span className="achievements__moreLabel">Смотреть все</span>
                            <span className="achievements__moreSquare" />
                        </div>
                        <div className="achievements__moreLine" />
                    </div>
                </div>
            </div>
        </section>
    );
}
