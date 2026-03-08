import { useState } from "react";
import "../Components-styles/NavBar.css"

export default function Navbar({ toggleTheme, lightMode }) {
const [active, setActive] = useState("inicio");

    return (
        <nav className="navbar">
            <h2>Portfolio</h2>
            <ul className="nav-links">
                <li>
                    <a href="#inicio"  className={active === "inicio" ? "active" : ""}
                    onClick={() => setActive("inicio")}>
                         Início</a>
                </li>

                <li>
                    <a href="#sobre" className={active === "sobre" ? "active" : ""}
                    onClick={() => setActive("sobre")}> Sobre mim</a>
                </li>

                <li>
                   <a href="#educacao" className={active === "educacao" ? "active" : ""}
                    onClick={() => setActive("educacao")}>Formações</a> 
                </li>

                  <li>
                    
                    <a href="#trabalhos" className={active === "trabalhos" ? "active" : ""}
                    onClick={() => setActive("trabalhos")}>Trabalhos</a>
                </li>

                
                  <li>
                    <a href="#contatos" className={active === "contatos" ? "active" : ""}
                    onClick={() => setActive("contatos")}>Contatos</a>
                </li>
            </ul>

            <button
                className={`theme-toggle ${lightMode ? "active" : ""}`}
                onClick={toggleTheme}
            >
                {lightMode ? (
                    <i className="bi bi-sun-fill"></i>
                ) : (
                    <i className="bi bi-moon-fill"></i>
                )}
            </button>
        </nav>
    );
}