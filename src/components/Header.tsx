import { type JSX, useState } from "react";
import "./header.css";

export default function Header(): JSX.Element {
    const [isActive, setIsActive] = useState(false);

    const handleToggleMenu = (): void => {
        setIsActive((prev) => !prev);
    };

    return (
        <header className={`header`}>
            <div className={`${isActive ? " header__active" : "header__disabled"}`}>
                <div className={`container header__inner`}>
                    <div className="brand">
                        <img src="./images/Logo.svg" alt="Логотип IT at MISIS" className="brand__mark" />
                    </div>
                    <button
                        type="button"
                        className="header__menu"
                        onClick={handleToggleMenu}
                        aria-label="Открыть меню"
                        aria-pressed={isActive}
                    >
                        <div className="header__menu1line"></div>
                        <div className="header__menu2line"></div>
                        <div className="header__menu3line"></div>
                    </button>
                </div>
            </div>

        </header >
    );
}
