import { type JSX, useEffect, useMemo, useState } from "react";
import Papa from "papaparse";
import Header from "./components/Header";
import "./App.css";
import "./hackathon-wins.css";

type HackResult = {
    event: string;
    team: string;
    place: string;
    year: number;
    awardDate: string;
};

const YEARS = ["Все", "2026", "2025", "2024", "2023"] as const;

export default function HackathonWins(): JSX.Element {
    const [data, setData] = useState<HackResult[]>([]);
    const [activeYear, setActiveYear] = useState<string>("Все");

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

                        return {
                            event: String(row["Название хакатона"] ?? "").trim(),
                            team: String(row["Название команды"] ?? "").trim(),
                            place: String(row["Результат"] ?? "").trim(),
                            year,
                            awardDate: awardDateRaw,
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

                setData(parsed);
            },
        });
    }, []);

    const filteredData = useMemo(() => {
        if (activeYear === "Все") return data;
        const year = Number(activeYear);
        return data.filter((item) => item.year === year);
    }, [data, activeYear]);

    return (
        <div className="page" id="hackathon-wins">
            <Header />
            <main>
                <section className="wins">
                    <div className="wins__container">
                        <header className="container wins__hero">
                            <h1 className="wins__title">Хакатон победы</h1>

                            <div className="wins__filters">
                                {YEARS.map((year) => (
                                    <button
                                        key={year}
                                        type="button"
                                        className={`wins__filter ${activeYear === year ? "wins__filter--active" : ""
                                            }`}
                                        onClick={() => setActiveYear(year)}
                                    >
                                        {year}
                                    </button>
                                ))}
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
                                {filteredData.map((item, idx) => (
                                    <div key={idx} className="wins__rowGroup">
                                        <div className="wins__row container">
                                            <div className="wins__cell wins__cell--event">
                                                {item.event}
                                            </div>
                                            <div className="wins__cell wins__cell--team">
                                                {item.team}
                                            </div>
                                            <div className="wins__cell wins__cell--place">
                                                {item.place}
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {filteredData.length === 0 && (
                                    <div className="wins__empty container">
                                        Нет данных за выбранный год
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
