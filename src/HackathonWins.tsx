import { type JSX } from "react";
import Header from "./components/Header";
import "./App.css";
import "./hackathon-wins.css";

type HackResult = {
    event: string;
    team: string;
    place: string;
};

const hackResults: HackResult[] = [
    {
        event: "MTS FinTech Хакатон 2.0",
        team: "MISIS Venum",
        place: "1 место",
    },
    {
        event: "Alfa Hack",
        team: "FULLSTAK EXCEL ITMO_MISIS_HSE",
        place: "3 место",
    },
    {
        event: "Хакатон Импульс Т1",
        team: "MISIS x OptonGroup",
        place: "1 место",
    },
    {
        event: "Хакатон Импульс Т1",
        team: "MISIS x BGITU",
        place: "3 место",
    },
    {
        event: "TulaHack",
        team: "Динозаврики МИСИС",
        place: "2 место",
    },
    {
        event: "Хакатон по кибериммунной разработке 3.0",
        team: "misis v solo",
        place: "2 место",
    },
    {
        event: "Tulahackdays",
        team: "MISIS GoGoRiki",
        place: "1 место",
    },
    {
        event: "Tulahackdays",
        team: "Динозаврики МИСИС",
        place: "2 место",
    },
    {
        event: "Сеченовский хакатон",
        team: "projectX MISIS",
        place: "1 место",
    },
    {
        event: "Smolathon 2.0",
        team: "projectX MISIS",
        place: "1 место",
    },
    {
        event: "VTB API hackathon",
        team: "MISIS x BGITU",
        place: "1 место",
    },
    {
        event: "VTB API hackathon",
        team: "MISIS-Mojarung",
        place: "3 место",
    },
    {
        event: "Дизайн-Цех",
        team: "MEOW MISIS",
        place: "1 место",
    },
    {
        event: "HSE AI Assistant Hack: Python",
        team: "МИСИС Computer",
        place: "1 место",
    },
    {
        event: "Цифровой прорыв",
        team: "MISIS 73 x OPTON GROUP",
        place: "2 место",
    },
    {
        event: "Цифровой прорыв",
        team: "MISIS 1109_Kamenka",
        place: "2 место",
    },
    {
        event: "Цифровой прорыв",
        team: "MISIS_Gogoriki",
        place: "3 место",
    },
    {
        event: "Кокос Hackathon",
        team: "MISIS x BGITU",
        place: "1 место",
    },
    {
        event: "IT Inno Hack",
        team: "Shmyaks MISIS",
        place: "2 место",
    },
    {
        event: "Импульс Т1: Нижний Новгород",
        team: "Верхний МИСИС",
        place: "1 место",
    },
    {
        event: "ВШЭ ПСБ",
        team: "projectX misis",
        place: "3 место",
    },
    {
        event: "E-CUP OZON Tech",
        team: "MISIS Neychev Loss",
        place: "2 место",
    },
    {
        event: "Цифровой Прорыв",
        team: "misis_total_timbudon",
        place: "2 место",
    },
    {
        event: "Цифровая Эра Транспорта",
        team: "MISIS X6Retail",
        place: "1 место",
    },
    {
        event: "Зеленый код Москвы",
        team: "MISIS GO",
        place: "2 место",
    },
    {
        event: "Экспохак",
        team: "MISIS GO",
        place: "2 место",
    },
    {
        event: "Лидеры Цифровой Трансформации",
        team: "misis.tech",
        place: "1 место",
    },
    {
        event: "Лидеры Цифровой Трансформации",
        team: "МИСИС Два Миллиона",
        place: "3 место",
    },
    {
        event: "Лидеры Цифровой Трансформации",
        team: "principal point misis",
        place: "2 место",
    },
    {
        event: "Лидеры Цифровой Трансформации",
        team: "Beverly Hills MISIS",
        place: "3 место",
    },
    {
        event: "Лидеры Цифровой Трансформации",
        team: "Каши Сиквенс МИСИС",
        place: "3 место",
    },
    {
        event: "Гагарин хакатон",
        team: "Динозаврики МИСИС",
        place: "1 место",
    },
    {
        event: "Гагарин хакатон",
        team: "Shmyaks MISIS",
        place: "1 место",
    },
    {
        event: "Гагарин хакатон",
        team: "MISIS status md",
        place: "2 место",
    },
    {
        event: "Гагарин хакатон",
        team: "МИСИС Либа Справа 2 этаж",
        place: "2 место",
    },
    {
        event: "Гагарин хакатон",
        team: "DAO MISIS",
        place: "3 место",
    },
    {
        event: "Цифровой прорыв",
        team: "miss misis & mister deeppavlov",
        place: "3 место",
    },
    {
        event: "НТО",
        team: "МИСИС прогрев градиетов",
        place: "1 место",
    },
    {
        event: "Tender Hack",
        team: "SOKOLOVxMISIS",
        place: "3 место",
    },
    {
        event: "Moscow Travel Hack 2024",
        team: "МИСИС Решающий корень",
        place: "2 место",
    },
    {
        event: "Moscow Travel Hack 2024",
        team: "14-Bit MISIS",
        place: "2 место",
    },
    {
        event: "Moscow Travel Hack 2024",
        team: "MISIS x MIREA Koptevo",
        place: "3 место",
    },
    {
        event: "Moscow Travel Hack 2024",
        team: "Удивительный цифровой МИСИС",
        place: "3 место",
    },
    {
        event: "RLT.Hack",
        team: "Мисисково",
        place: "1 место",
    },
    {
        event: "EESTECH",
        team: "MISIS Kirovets K-700",
        place: "2 место",
    },
    {
        event: "Цифровая Эра Транспорта2",
        team: "MISIS X6Retail",
        place: "1 место",
    },
    {
        event: "IT Purple Hack",
        team: "Динозаврики МИСИС",
        place: "1 место",
    },
    {
        event: "IT Purple Hack",
        team: "Мисисково",
        place: "1 место",
    },
    {
        event: "IT Purple Hack",
        team: "MISIS FOUND HACK",
        place: "1 место",
    },
    {
        event: "IT Purple Hack",
        team: "MISIS Banach Space",
        place: "1 место",
    },
    {
        event: "Всемирный Фестиваль Молодежи",
        team: "miss misis x AI Talent Hub",
        place: "1 место",
    },
    {
        event: "Sber Garage Startup",
        team: "ITUT MISIS",
        place: "2 место",
    },
    {
        event: "ML Talent Match",
        team: "МИСИС Олег Данило Лев",
        place: "1 место",
    },
    {
        event: "ML Talent Match",
        team: "МИСИС 42",
        place: "1 место",
    },
    {
        event: "ML Talent Match",
        team: "Skibidi_MISIS",
        place: "2 место",
    },
    {
        event: "ML Talent Match",
        team: "Xx_HSE_MADI_MISIS_FA_SQUAD_xX",
        place: "3 место",
    },
    {
        event: "Selectel Hackathon",
        team: "Динозаврики МИСИС",
        place: "1 место",
    },
];

export default function HackathonWins(): JSX.Element {
    return (
        <div className="page" id="hackathon-wins">
            <Header />
            <main>
                <section className="wins">
                    <div className=" wins__container">
                        <header className="container wins__hero">
                            <h1 className="wins__title">Хакатон победы</h1>
                            <div className="wins__filters">
                                <button className="wins__filter wins__filter--active" type="button">
                                    Все
                                </button>
                                <button className="wins__filter" type="button">
                                    2026
                                </button>
                                <button className="wins__filter" type="button">
                                    2025
                                </button>
                                <button className="wins__filter" type="button">
                                    2024
                                </button>
                                <button className="wins__filter" type="button">
                                    2023
                                </button>
                            </div>
                        </header>

                        <div className="wins__table">
                            <div className="wins__tableHeader container">
                                <div className="wins__headerCell wins__headerCell--event">
                                    Название хакатона
                                </div>
                                <div className="wins__headerCell wins__headerCell--team">
                                    Название команды
                                </div>
                                <div className="wins__headerCell wins__headerCell--place">
                                    Место
                                </div>
                            </div>

                            <div className="wins__rows">
                                {hackResults.map((item) => (
                                    <div key={`${item.event}-${item.team}-${item.place}`} className="wins__rowGroup">
                                        <div className="wins__row container">
                                            <div className="wins__cell wins__cell--event">{item.event}</div>
                                            <div className="wins__cell wins__cell--team">{item.team}</div>
                                            <div className="wins__cell wins__cell--place">{item.place}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

