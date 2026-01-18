import { type JSX } from "react";
import "./footer.css";

const pages = [
    { label: "Главная", href: "/#highest-point" },
    { label: "Проекты", href: "/projects" },
    { label: "Достижения", href: "/wins" },
    { label: "Упоминания в СМИ", href: "/media" },
    { label: "Команда", href: "/team" },
    { label: "Блог", href: "/" },
    { label: "История ITAM", href: "/" },
];

const clubs = [
    { label: "Хакатон", href: "/club/hackathon" },
    { label: "Дизайн", href: "/#clubs" },
    { label: "AI-knowledge", href: "/#clubs" },
    { label: "Геймдев", href: "/#clubs" },
    { label: "Робо", href: "/#clubs" },
    { label: "ACM", href: "/#clubs" },
    { label: "CTF", href: "/#clubs" },
];

const socials = [
    { label: "Telegram канал", href: "/" },
    { label: "Группа VK", href: "/" },
    { label: "TikTok аккаунт", href: "/" },
    { label: "База знаний", href: "/" },
    { label: "Витрина возможностей", href: "/" },
];

export default function Footer(): JSX.Element {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__top">
                    <div className="footer__brand">
                        <img
                            className="footer__logo"
                            src="/images/Logo.svg"
                            alt="Логотип IT at MISIS"
                        />
                        <div className="footer__meta">
                            <div className="footer__address">
                                <div>НИТУ МИСИС</div>
                                <div>Ленинский проспект, 6</div>
                            </div>
                            <div className="footer__contactRow">
                                <span>По всем вопросам:</span>
                                <a className="footer__link" href="https://t.me/Daniil_Y">
                                    @Daniil_Y
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="footer__links">
                        <div className="footer__column">
                            <div className="footer__columnTitle">Страницы</div>
                            <div className="footer__columnList">
                                {pages.map((item) => (
                                    <a key={item.label} href={item.href} className="footer__link">
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="footer__column">
                            <div className="footer__columnTitle">Клубы</div>
                            <div className="footer__columnList">
                                {clubs.map((item) => (
                                    <a key={item.label} href={item.href} className="footer__link">
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="footer__socials">
                        {socials.map((item) => (
                            <a key={item.label} href={item.href} className="footer__link">
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="footer__mobile">
                    <div className="footer__mobileHeader">
                        <img
                            className="footer__logo footer__logo--mobile"
                            src="/images/Logo.svg"
                            alt="Логотип IT at MISIS"
                        />
                        <div className="footer__mobileAddress">
                            <div>НИТУ МИСИС</div>
                            <div>Ленинский проспект, 6</div>
                        </div>
                    </div>

                    <div className="footer__divider footer__divider--mobile" />

                    <div className="footer__mobileIcons">
                        <a className="footer__socialIcon" href="/">
                            <img
                                className="footer__socialIconImage"
                                src="/images/vector_icon_tg.svg"
                                alt="Telegram"
                            />
                        </a>
                        <a className="footer__socialIcon" href="/">
                            <img
                                className="footer__socialIconImage"
                                src="/images/vector_icon_vk.svg"
                                alt="VK"
                            />
                        </a>
                        <a className="footer__socialIcon" href="/">
                            <img
                                className="footer__socialIconImage"
                                src="/images/vector_icon_tt.svg"
                                alt="TikTok"
                            />
                        </a>
                    </div>

                    <div className="footer__divider footer__divider--mobile" />

                    <div className="footer__mobileLinks">
                        <a className="footer__mobileLink" href="/">
                            База знаний
                        </a>
                        <a className="footer__mobileLink" href="/">
                            Витрина возможностей
                        </a>
                        <a className="footer__mobileLink" href="/">
                            Сотрудничество
                        </a>
                    </div>

                    <div className="footer__divider footer__divider--mobile" />
                </div>

                <div className="footer__bottom">
                    <div className="footer__divider footer__divider_hide" />
                    <div className="footer__credits">
                        <div className="footer__copyright">© itatmisis 2026</div>
                        <div className="footer__creditList">
                            <div className="footer__credit">
                                <span className="footer__creditLabel">Фронтенд:</span>
                                <a className="footer__link" href="https://t.me/DutkinTimur">
                                    Дуткин Тимур
                                </a>
                            </div>
                            <div className="footer__credit">
                                <span className="footer__creditLabel">Бэкенд + фронтенд:</span>
                                <a className="footer__link" href="https://t.me/zemdenalex">
                                    Земцов Денис
                                </a>
                            </div>
                            <div className="footer__credit">
                                <span className="footer__creditLabel">Дизайн:</span>
                                <a className="footer__link" href="https://t.me/zentka">
                                    Зенцов Данила
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer__marquee">
                <div className="footer__marqueeTrack">
                    <div className="footer__marqueeGroup">
                        <img src="/images/IT AT MISIS.svg" alt="IT AT MISIS" />
                        <img src="/images/Star 1.svg" alt="" aria-hidden="true" />
                        <img src="/images/IT AT MISIS.svg" alt="" aria-hidden="true" />
                        <img src="/images/Star 1.svg" alt="" aria-hidden="true" />
                        <img src="/images/IT AT MISIS.svg" alt="" aria-hidden="true" />
                        <img src="/images/Star 1.svg" alt="" aria-hidden="true" />
                        <img src="/images/IT AT MISIS.svg" alt="" aria-hidden="true" />
                        <img src="/images/Star 1.svg" alt="" aria-hidden="true" />
                        <img src="/images/IT AT MISIS.svg" alt="" aria-hidden="true" />
                    </div>
                    <div className="footer__marqueeGroup" aria-hidden="true">
                        <img src="/images/IT AT MISIS.svg" alt="" />
                        <img src="/images/Star 1.svg" alt="" />
                        <img src="/images/IT AT MISIS.svg" alt="" />
                        <img src="/images/Star 1.svg" alt="" />
                        <img src="/images/IT AT MISIS.svg" alt="" />
                        <img src="/images/Star 1.svg" alt="" />
                        <img src="/images/IT AT MISIS.svg" alt="" />
                        <img src="/images/Star 1.svg" alt="" />
                        <img src="/images/IT AT MISIS.svg" alt="" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
