import { type JSX } from "react";
import ClubPage from "./components/ClubPage";
import "./App.css";
import "./hackathon-club.css";

export default function CtfClubPage(): JSX.Element {
    return (
        <ClubPage
            title="CTF клуб"
            buttons={["Чат клуба"]}
            stats={[
                { value: "600+", label: "Участников клуба" },
            ]}
            marks={[
                { width: 117, height: 40, color: "#FAFAFA", radius: 0 },
            ]}
            description="---"
            goal="---"
            team={[
                { name: "Вадим Коратаев", role: "Роль в команде" },
                { name: "Ярослав (Фамилия)", role: "Роль в команде" },
                { name: "Михаил Емильянцев", role: "Роль в команде" },
            ]}
        />
    );
}
