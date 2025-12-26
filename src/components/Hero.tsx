import  { type JSX } from "react";
import "./hero.css";

export default function Hero(): JSX.Element {
  return (
    <section className="hero hero--misis" id="about">
      <div className="hero__bg" aria-hidden="true" />

      <div className="container hero__layout">
        <h1 className="hero__title hero__title--misis">IT at MISIS</h1>

        <p className="hero__desc">
          IT-комьюнити нового поколения, состоящее
          <br />
          из мотивированных и талантливых участников.
        </p>

        <a className="hero__more" href="#projects">
          <span className="hero__moreIcon" aria-hidden="true">↓</span>
          <span>Смотреть подробнее</span>
          <span className="hero__moreIcon" aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
