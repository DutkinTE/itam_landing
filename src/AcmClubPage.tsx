import { type JSX } from "react";
import ClubPage from "./components/ClubPage";
import "./App.css";
import "./hackathon-club.css";

export default function AcmClubPage(): JSX.Element {
    return (
        <ClubPage
            title="ACM клуб"
            buttons={["Чат клуба", "Канал клуба"]}
            logoSrc="/images/acm.svg"
            stats={[
                { value: "600+", label: "Участников клуба" },
            ]}
            description="---"
            goal="--"
            team={[
                { name: "Артём Макаров", role: "Руководитель клуба" },
                { name: "Анастасия Галицкова", role: "Коммьюнити-менеджер" },
                { name: "Елизавета Пластинина", role: "Коммьюнити-менеджер" },
            ]}
        />
    );
}
