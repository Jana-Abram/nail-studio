import { Menu, Sparkle } from "lucide-react";
import "./Header.css";

export default function Header() {
  const navLinks = [
    "Послуги",
    "Прайс",
    "Галерея",
    "Про нас",
    "Локація",
    "Контакти",
  ];

  return (
    <header className="header">
       
      <div className="header__logo">
        NAIL STUDIO <Sparkle size={14} strokeWidth={2} className="header__logo-icon" />
      </div>

      <nav className="header__nav">
        {navLinks.map((link) => (
          <a key={link} href="#" className="header__link">
            {link}
          </a>
        ))}
      </nav>

      <div className="header__actions">
        <button className="header__cta">Записатися</button>
        <button className="header__menu-btn" aria-label="Меню">
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
}

