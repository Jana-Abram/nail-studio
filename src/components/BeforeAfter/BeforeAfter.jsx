import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import damagedNailsImg from "../../assets/images/damages-nails.jpg";
import whiteManicureImg from "../../assets/images/white-manicure.jpg";
import nailsManicureImg from "../../assets/images/nails-manicure.jpeg";
import "./BeforeAfter.css";

export default function BeforeAfter() {
  const works = [
    { id: 1, after: whiteManicureImg },
    { id: 2, after: nailsManicureImg },
    { id: 3, after: whiteManicureImg },
    { id: 4, after: nailsManicureImg },
  ];

 return (
    <section className="before-after">
      <div className="container">
        <div className="before-after__header">
          <div>
            <span className="before-after__eyebrow">До / Після</span>
            <h2 className="before-after__title">Подивіться наші роботи</h2>
          </div>
          <a href="#" className="before-after__link">
            Дивитись всі роботи <ArrowRight size={16} />
          </a>
        </div>

        <div className="before-after__row">
  <button className="before-after__nav before-after__nav--prev" aria-label="Попередні">
    <ChevronLeft size={18} />
  </button>

            <div className="before-after__track">
    {works.map((work) => (
      <div key={work.id} className="before-after__pair">
        <div className="before-after__photo">
          <img src={damagedNailsImg} alt="До" className="before-after__image" />
          <span className="before-after__label">До</span>
        </div>
        <div className="before-after__photo">
          <img src={work.after} alt="Після" className="before-after__image" />
          <span className="before-after__label">Після</span>
        </div>
      </div>
    ))}
  </div>

          <button className="before-after__nav before-after__nav--next" aria-label="Наступні">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}