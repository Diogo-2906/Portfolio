import { useState, useEffect } from "react";

/* Importar componentes */
import Intro from "./components/Intro";
import Sobre from "./components/Sobre";
import Educacao from "./components/Educacao";
import Trabalhos from "./components/Trabalhos";
import Contatos from "./components/Contatos";

export default function App() {
  /* Estado do modo claro */
  const [lightMode, setLightMode] = useState(false);

  /* Efeito para alternar classe de tema no body */
  useEffect(() => {
    if (lightMode) {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, [lightMode]);

  /* Função para alternar tema */
  const toggleTheme = () => setLightMode((prev) => !prev);

  return (
    <div className="container">
      {/* Botão de alternância de tema */}
      <button className="theme-toggle" onClick={toggleTheme}>
        {lightMode ? "⏾" : "☀︎"}
      </button>

      {/* Seções principais */}
      <Intro />
      <Sobre />
      <Educacao />
      <Trabalhos />
      <Contatos />
    </div>
  );
}

