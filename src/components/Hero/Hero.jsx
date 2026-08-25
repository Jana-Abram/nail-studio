import { Gem, Sparkles, Heart } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  const features = [
    { icon: <Gem size={16} />, text: "Якісні матеріали" },
    { icon: <Sparkles size={16} />, text: "Стерильні інструменти" },
    { icon: <Heart size={16} />, text: "Досвідчені майстри" },
  ];

  return (
    <section className="hero">
      <div className="hero__content">
        <span className="hero__eyebrow">Студія манікюру</span>
        <h1 className="hero__title">
          Краса у деталях,
          <br />
          довершена <span className="hero__title-accent">до кінчиків</span>
        </h1>
        <p className="hero__subtitle">
          Створюємо ідеальний манікюр і педикюр, аби ваші руки
          завжди виглядали доглянуто та витончено.
        </p>
        <button className="hero__cta">Записатись онлайн</button>

        <div className="hero__features">
          {features.map((f) => (
            <div key={f.text} className="hero__feature">
              <span className="hero__feature-icon">{f.icon}</span>
              <span>{f.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}