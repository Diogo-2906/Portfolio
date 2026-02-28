import React, { useState } from "react";

export default function Trabalhos() {
  const trabalhos = [
    { nome: "Calculador IMC ", funcao: "React | Css", imagem: "/imagens/CalculadoraImc.png" },
    { nome: "Imagem 2", funcao: "Categoria", imagem: "/imagens/tra2.png" },
    { nome: "Imagem 3", funcao: "Categoria", imagem: "/imagens/tra3.png" },
    { nome: "Imagem 4", funcao: "Categoria", imagem: "/imagens/tra4.png" },
  ];

  const [imagemAtiva, setImagemAtiva] = useState(trabalhos[0].imagem);

  return (

    <div>
      <div className="titulo-Top">
        <h2><strong>TRABALHOS</strong> </h2>
      </div>
      <section className="trabalhos-container">

        <div className="trabalhos-esquerda">

          <img src={imagemAtiva} className="imagem-trabalho visivel" />
        </div>

        <div className="trabalhos-direita">


          {trabalhos.map((item, index) => (
            <div
              key={index}
              className="item-trabalho"
              onMouseEnter={() => setImagemAtiva(item.imagem)}
            >
              <span>{item.nome}</span>
              <span className="funcao">{item.funcao}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}