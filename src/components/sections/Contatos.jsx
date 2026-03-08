import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contato.css";

export default function Contatos() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_t9x5xtr",
                "template_1kcw8vf",
                form.current,
                "IHpcVC9pXFzkdxVED"
            )
            .then(() => {
                alert("Mensagem enviada com sucesso!");
                form.current.reset();
            })
            .catch(() => {
                alert("Erro ao enviar mensagem.");
            });
    };

    return (
        <section className="section">

            <h2>CONTATOS</h2>
            <p>
                Fique à vontade para me enviar uma mensagem ou me encontrar nas redes abaixo:
            </p>

            {/* FORMULÁRIO */}
            <form ref={form} onSubmit={sendEmail} className="form-contato">
                <input
                    type="text"
                    name="user_name"
                    placeholder="Seu nome"
                    required
                />
                <input
                    type="email"
                    name="user_email"
                    placeholder="Seu email"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Digite sua mensagem"
                    required
                />
                <button type="submit">Enviar Mensagem</button>
            </form>

            {/* REDES SOCIAIS */}
            <div className="icon-list">
                <a href="https://www.instagram.com/di_ogooh/"
                    target="_blank" rel="noopener noreferrer" title="Instagram">
                    <i className="bi bi-instagram"></i>
                </a>
                <a href="https://discord.com/users/670832851750617098"
                    target="_blank" rel="noopener noreferrer" title="Discord">
                    <i className="bi bi-discord"></i>
                </a>
                <a href="https://wa.me/5514991320960"
                    target="_blank" rel="noopener noreferrer" title="WhatsApp">
                    <i className="bi bi-whatsapp"></i>
                </a>
                <a href="https://www.linkedin.com/in/diogo-ozeliero-63b6633b5"
                    target="_blank" rel="noopener noreferrer" title="Linkedin">
                    <i className="bi bi-linkedin"></i>
                </a>
                <a href="https://github.com/Diogo-2906"
                    target="_blank" rel="noopener noreferrer" title="GitHub">
                    <i className="bi bi-github"></i>
                </a>
            </div>

        </section>
    );
}
