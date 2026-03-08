import BlurText from "../Components-animations/BlurText"
import "../Components-styles/Intro.css"

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};



export default function Intro() {
  return (
    <section className="secao intro">

      <div id="bloco-intro">
        <img src="/imagens/foto-per2.png" alt="perfil" id="intro-img" />
      </div>

      <h1 style={{ FontFamily: "Climate Crisis; sans-serif" }} ><BlurText
        text="PORTFOLIO"
        delay={200}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="texto-grande"
      /></h1>

      <div className="intro-info">
        <p className="pequeno">Bem-Vindo</p>
        <p className="descricao">
          Aqui compartilho meus projetos e minha evolução como desenvolvedor.
        </p>

      </div>
    </section>
  );
}