import { type JSX } from "react";
import ClubPage from "./components/ClubPage";
import "./App.css";
import "./hackathon-club.css";

export default function RoboClubPage(): JSX.Element {
    return (
        <ClubPage
            title="Робо клуб"
            buttons={["Чат клуба"]}
            stats={[
                { value: "330+", label: "Участников клуба" },
            ]}
            marks={[
                { width: 37, height: 37, color: "#FAFAFA", radius: 0 },
                { width: 33, height: 7, color: "#0E0D0F", radius: 0 },
                { width: 4, height: 3, color: "#FAFAFA", radius: 0 },
                { width: 4, height: 3, color: "#FAFAFA", radius: 0 },
                { width: 8, height: 9, color: "#0E0D0F", radius: 0 },
                { width: 2, height: 4, color: "#FAFAFA", radius: 0 },
                { width: 8, height: 9, color: "#0E0D0F", radius: 0 },
                { width: 2, height: 4, color: "#FAFAFA", radius: 0 },
            ]}
            description="Мы - Робототехники: специалисты, которые разрабатывают конструкции роботов, пишут ПО на фреймворке ROS (Robot Operating System), разрабатывают платы и прошивки нижнего уровня. Наша работа в клубе требует не только технических знаний, но и умения мыслить творчески и находить решения для сложных задач."
            goal="Обучение в клубе робототехники начинается с изучения основных принципов мехатроники и программирования. Затем мы начнём создавать свои первые проекты, используя ROS и готовых роботов. В клубе учимся быть креативными, собираем крепкие знания в области электроники и программирования. В том числе научим работать с различными инструментами и технологиями, чтобы создавать крутых роботов."
            team={[
                { name: "Георгий Бондарь", role: "Роль в команде" },
                { name: "Адиля Зухурова", role: "Роль в команде" },
                { name: "Георгий Варин", role: "Роль в команде" },
                { name: "Егорова Кристина", role: "Роль в команде" },
            ]}
        />
    );
}
