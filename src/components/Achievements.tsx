import { Fragment, type JSX, useEffect, useMemo, useState } from "react";
import Papa from "papaparse";
import "./achievements.css";

type HackResult = {
    event: string;
    team: string;
    place: string;
    year: number;
    awardDate: string;
    link?: string;
};

export default function Achievements(): JSX.Element {

    const [wins, setWins] = useState<HackResult[]>([]);

    useEffect(() => {
        Papa.parse("/Wins.csv", {
            download: true,
            header: true,
            skipEmptyLines: true,
            delimiter: ";",
            transformHeader: (header: string) => header.replace(/^\uFEFF/, "").trim(),
            complete: (result) => {
                const parsed: HackResult[] = (result.data as any[])
                    .map((row) => {
                        const awardDateRaw = String(row["Дата награждения"] ?? "").trim();
                        const yearRaw = String(row["Год"] ?? "").trim();
                        const year = Number(yearRaw.replace(/[^\d]/g, ""));
                        const linkRaw = String(row["Ссылка"] ?? "").trim();

                        return {
                            event: String(row["Название хакатона"] ?? "").trim(),
                            team: String(row["Название команды"] ?? "").trim(),
                            place: String(row["Результат"] ?? "").trim(),
                            year,
                            awardDate: awardDateRaw,
                            link: linkRaw || undefined,
                        } satisfies HackResult;
                    })
                    .filter(
                        (item) =>
                            item.event !== "" &&
                            item.team !== "" &&
                            item.place !== "" &&
                            !Number.isNaN(item.year)
                    )
                    .sort((a, b) => {
                        if (b.year !== a.year) return b.year - a.year;

                        const parseAwardDate = (dateStr: string, year: number) => {
                            if (!dateStr) return new Date(year, 0, 1).getTime();
                            const [dayStr, monthStr, yearStr] = dateStr.split(".");
                            const day = Number(dayStr);
                            const month = Number(monthStr);
                            const fullYear = Number(yearStr);

                            if (!day || !month || !fullYear) {
                                return new Date(year, 0, 1).getTime();
                            }

                            return new Date(fullYear, month - 1, day).getTime();
                        };

                        const timeA = parseAwardDate(a.awardDate, a.year);
                        const timeB = parseAwardDate(b.awardDate, b.year);

                        return timeB - timeA;
                    });

                setWins(parsed);
            },
        });
    }, []);

    const latestWins = useMemo(() => wins.slice(0, 10), [wins]);
    const latestYear = latestWins[0]?.year;

    return (
        <section className="achievements ">
            <div className="achievements__layout">
                <header className="achievements__header container">
                    <div className="achievements__eyebrowRow">
                        <div className="achievements__dot" />
                        <div className="achievements__eyebrow">Достижения</div>
                    </div>
                    <h2 className="achievements__title">Наши результаты</h2>
                </header>

                <div className="achievements__content ">
                    <div className="achievements__leadWrapper ">
                        <p className="achievements__lead container">
                            Участники коммьюнити демонстрируют постоянный профессиональный рост и регулярно
                            добиваются впечатляющих успехов в престижных соревнованиях самого разного профиля
                        </p>
                    </div>

                    <div className="achievements__stats container">
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
                        <div className="achievements__listHeader container">
                            <h3 className="achievements__listTitle">
                                Последние победы на хакатонах:
                            </h3>
                        </div>

                        <div className="achievements__listTable">
                            <div className="achievements__listSeparator " />

                            {latestWins.map((item, index) => {
                                const isClickable = Boolean(item.link);
                                const handleClick = () => {
                                    if (!item.link) return;
                                    window.open(item.link, "_blank");
                                };

                                return (
                                    <Fragment
                                        key={`${item.event}-${item.team}-${item.place}-${index}`}
                                    >
                                        <div
                                            className={`achievements__listRowContainer ${isClickable ? " achievements__listRowContainer--clickable" : ""
                                                }`}
                                            onClick={isClickable ? handleClick : undefined}
                                        >
                                            <div className="achievements__listRow container">
                                                <div className="achievements__listCell achievements__listCell--event">
                                                    {item.event}
                                                </div>
                                                <div className="achievements__listCell achievements__listCell--team">
                                                    {item.team}
                                                </div>
                                                <div className="achievements__listCell achievements__listCell--place">
                                                    {item.place}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="achievements__listSeparator" />
                                    </Fragment>
                                );
                            })}
                        </div>
                    </div>

                    <a className="achievements__more" href="/wins">
                        <div className="achievements__moreRow">
                            <span className="achievements__moreLabel">Смотреть все</span>
                            <span className="achievements__moreSquare" >
                                <svg
                                    className="achievements__moreIcon"
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
                            </span>
                        </div>
                        <div className="achievements__moreLine" />
                    </a>
                </div>
            </div>
        </section>
    );
}
