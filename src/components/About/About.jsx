import { ArrowRight } from "lucide-react";
import img from "../../assets/images/about_image.jpg"
import "./About.css";

export default function About() {
  return (
    <section className="about">
      <div className="about__image-container">
        <img src={img} alt="Про нас" className="about__image" />
      </div>

      <div className="about__content">
        <span className="about__eyebrow">Про нас</span>
        <h2 className="about__title">Ми любимо свою справу</h2>
        <p className="about__text">
          Наша студія — це місце, де поєднуються краса, якість і затишок.
          Ми працюємо лише з перевіреними матеріалами та стерильними
          інструментами, щоб ви почувались впевнено та комфортно.
        </p>
        <button className="about__cta">
          Детальніше про студію <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}