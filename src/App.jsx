import { useState, useEffect } from "react";

/* Importar componentes */
import Intro from "./components/sections/Intro";
import Sobre from "./components/sections/Sobre";
import Educacao from "./components/sections/Educacao";
import Trabalhos from "./components/sections/Trabalhos";
import Contatos from "./components/sections/Contatos";
import Footer from "./components/sections/Footer";
import Navbar from "./components/sections/NavBar";
import CurvedLoop from "./components/animations/CurvedLoop";
import CurvedLoopFooter from "./components/animations/CurvedLoopFooter";

/* Estilos globais */
import "./components/styles/Global.css";

export default function App() {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    if (lightMode) {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, [lightMode]);

  const toggleTheme = () => setLightMode((prev) => !prev);



  return (
    <div className="container">
      <Navbar toggleTheme={toggleTheme} lightMode={lightMode} />

      <section id="inicio">
        <Intro />
      </section>

      <CurvedLoop marqueeText="Criatividade ✦ Modernidade ✦" />

      <section id="sobre">
        <Sobre />
      </section>

      <section id="educacao">
        <Educacao />
      </section>

      <section id="trabalhos">
        <Trabalhos />
      </section>

      <CurvedLoopFooter
        marqueeText="  Ideias ✦ em ✦ desenvolvimento ✦"
        speed={1.5}
        curveAmount={260}
        interactive
      />

      <section id="contatos">
        <Contatos />
      </section>
      <Footer />
    </div>
  );
}
