import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import BeforeAfter from "./components/BeforeAfter/BeforeAfter";
import About from "./components/About/About";
import "./App.css";
import "./index.css";

export default function App() {
  return (
    <>
      <div className="hero-section">
        <Header />
        <Hero />
      </div>
      <Services />
      <BeforeAfter />
      <About />
    </>
  );
}