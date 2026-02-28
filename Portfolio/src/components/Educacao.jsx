import { FaCss3Alt } from "react-icons/fa";

export default function Educacao() {
  return (
    <section className="secao educacao">
      <div id="Educacao-img">
        <div className="circulo"></div>
        <img src="./imagens/foto-td2.png" alt="perfil" id="bloco2" />
      </div>

      <div className="texto">
        <h2>MINHAS FORMAÇÕES</h2>

        <div className="item-educacao">
          <strong>Minha jornada</strong>
          <span>2025 — 2026</span>
          <p>Formação voltada para desenvolvimento de sistema, com foco em lógica,
            criação de aplicações e boas práticas de código.</p>
        </div>

        <div className="item-educacao">
          <strong>Tecnologias Estudadas</strong>
          <div id="tech-icons">
            <i className="devicon-html5-plain colored"></i>
            <i className="devicon-css3-plain colored"></i>
            <i className="devicon-javascript-plain colored"></i>
            <i className="devicon-csharp-plain colored"></i>
            <i className="devicon-react-original colored"></i>
          </div>

        </div>
      </div>
    </section>
  );
}