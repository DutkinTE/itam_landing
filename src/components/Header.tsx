import { type JSX } from "react";
import "./header.css";

export default function Header(): JSX.Element {
    return (
        <header className="header">
            <div className="container header__inner">
                <div className="brand">
                    <img src="./public/Logo.svg" className="brand__mark" />
                </div>


                <nav className="nav" aria-label="Навигация">
                    <a className="nav__link" href="#hero">
                        Главная
                    </a>
                    <a className="nav__link" href="#projects">
                        Проекты
                    </a>
                    <a className="nav__link" href="#clubs">
                        Клубы
                    </a>
                    <a className="nav__link" href="#team">
                        Команда
                    </a>
                    <a className="nav__link" href="#blog">
                        Блог
                    </a>
                </nav>
            </div>
        </header >
    );
}
