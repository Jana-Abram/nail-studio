import { ArrowRight, Plus } from "lucide-react";
import manicureImg from "../../assets/images/manicure.jpg";
import pedicureImg from "../../assets/images/pedicure.jpg";
import buildUpimg from "../../assets/images/build-up.jpg";

import "./Services.css";

export default function Services() {
  const services = [
    {
      title: "Манікюр",
      description: "Класичний, апаратний, комбінований",
       image: manicureImg,
    },
    {
      title: "Педикюр",
      description: "Класичний, апаратний, чоловічий, SPA-педикюр",
      image: pedicureImg,
    },
    {
      title: "Нарощування",
      description: "Гелеве нарощування, корекція, зміцнення нігтів",
      image: buildUpimg,
    },
  ];

  return (
    <section className="services">
      <div className="container">
      <div className="services__header"> </div>
        <div>
          <span className="services__eyebrow">Послуги</span>
          <h2 className="services__title">Що ми робимо</h2>
        </div>
        <a href="#" className="services__link">
          Дивитись всі послуги <ArrowRight size={16} />
        </a>
      </div>

      <div className="services__grid">
        {services.map((service) => (
          <div key={service.title} className="services__card">
            <img src={service.image} alt={service.title} className="services__image" />
            <div className="services__card-body">
              <div className="services__card-text">
                <h3 className="services__card-title">{service.title}</h3>
                <p className="services__card-desc">{service.description}</p>
              </div>
              <button className="services__card-plus" aria-label="Детальніше">
                <Plus size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}