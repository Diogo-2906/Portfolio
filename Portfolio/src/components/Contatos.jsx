import React from 'react'

export default function Contatos() {
    return (
        <section className="secao contato">
            <div className="texto">
                <h2>CONTATOS</h2>
                <p>
                    Fique à vontade para me enviar uma mensagem ou me encontrar nas redes abaixo:
                </p>
                <div className="icon-list">
                    <a
                        href="https://www.instagram.com/di_ogooh/"
                        title="Instagram"
                    >
                        <i className="bi bi-instagram"></i>
                    </a>

                 

                    <a
                        href="mailto:diogo.ozeliero@aluno.senai.br"
                        title="Email"
                    >
                        <i className="bi bi-envelope"></i>
                    </a>


                    <a
                        href="https://discord.com/users/670832851750617098"
                        title="Discord"
                    >
                        <i class="bi bi-discord"></i>
                    </a>

                </div>

                <div id="Numero">
                    <i className="bi bi-whatsapp"></i>
                    <span>(14) 99132-0960</span>
                </div>

            </div>
        </section>
    )
}