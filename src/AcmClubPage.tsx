import { type JSX } from "react";
import ClubPage from "./components/ClubPage";
import "./App.css";
import "./hackathon-club.css";

export default function AcmClubPage(): JSX.Element {
    return (
        <ClubPage
            title="ACM клуб"
            buttons={["Чат клуба", "Канал клуба"]}
            stats={[
                { value: "600+", label: "Участников клуба" },
            ]}
            marks={[
                { width: 63, height: 40, color: "#FAFAFA", radius: 0 },
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
