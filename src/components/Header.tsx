import { type JSX, useState } from "react";
import "./header.css";

export default function Header(): JSX.Element {
    const [isActive, setIsActive] = useState(false);

    const handleToggleMenu = (): void => {
        setIsActive((prev) => !prev);
    };

    return (
        <header className="header">
            <div className={isActive ? "header__active" : "header__disabled"}>
                <div className="container header__inner">
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

                <div className="header__menuPanel">
                    <div className="header__menuColumn header__menuColumn--main">
                        <div className="header__menuItem header__menuItem--active">
                            <div className="header__menuItemDot" />
                            <a className="header__menuItemLabel" href="#highest-point">Главная</a>
                        </div>

                        <div className="header__menuItem">
                            <div className="header__menuItemDot" />
                            <a className="header__menuItemLabel">Проекты</a>
                        </div>

                        <div className="header__menuItem">
                            <div className="header__menuItemDot" />
                            <a className="header__menuItemLabel">Достижения</a>
                        </div>

                        <div className="header__menuItem">
                            <div className="header__menuItemDot" />
                            <a className="header__menuItemLabel">Упоминания в СМИ</a>
                        </div>

                        <div className="header__menuItem">
                            <div className="header__menuItemDot" />
                            <a className="header__menuItemLabel">Команда</a>
                        </div>

                        <div className="header__menuItem">
                            <div className="header__menuItemDot" />
                            <a className="header__menuItemLabel">Блог</a>
                        </div>
                    </div>

                    <div className="header__menuColumn header__menuColumn--clubs">
                        <div className="header__menuSectionTitle">Клубы</div>

                        <div className="header__submenuItem">
                            <div className="header__submenuDot" />
                            <div className="header__submenuLabel">Хакатон</div>
                        </div>
                        <div className="header__submenuItem">
                            <div className="header__submenuDot" />
                            <div className="header__submenuLabel">Дизайн</div>
                        </div>
                        <div className="header__submenuItem">
                            <div className="header__submenuDot" />
                            <div className="header__submenuLabel">AI-knowledge</div>
                        </div>
                        <div className="header__submenuItem">
                            <div className="header__submenuDot" />
                            <div className="header__submenuLabel">Геймдев</div>
                        </div>
                        <div className="header__submenuItem">
                            <div className="header__submenuDot" />
                            <div className="header__submenuLabel">Робо</div>
                        </div>
                        <div className="header__submenuItem">
                            <div className="header__submenuDot" />
                            <div className="header__submenuLabel">ACM</div>
                        </div>
                        <div className="header__submenuItem">
                            <div className="header__submenuDot" />
                            <div className="header__submenuLabel">CTF</div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    );
}
