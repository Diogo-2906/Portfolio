import { useState } from "react";
import "../styles/NavBar.css";

export default function Navbar({ toggleTheme, lightMode }) {
    const [active, setActive] = useState("inicio");
    const [menuAberto, setMenuAberto] = useState(false);

    const handleClick = (section) => {
        setActive(section);
        setMenuAberto(false);
    };

    return (
        <nav className="navbar">
            <h2>Portfolio</h2>

            <ul className={`nav-links ${menuAberto ? "aberto" : ""}`}>
                <li>
                    <a href="#inicio" className={active === "inicio" ? "active" : ""}
                        onClick={() => handleClick("inicio")}>Início</a>
                </li>
                <li>
                    <a href="#sobre" className={active === "sobre" ? "active" : ""}
                        onClick={() => handleClick("sobre")}>Sobre mim</a>
                </li>
                <li>
                    <a href="#educacao" className={active === "educacao" ? "active" : ""}
                        onClick={() => handleClick("educacao")}>Formações</a>
                </li>
                <li>
                    <a href="#trabalhos" className={active === "trabalhos" ? "active" : ""}
                        onClick={() => handleClick("trabalhos")}>Trabalhos</a>
                </li>
                <li>
                    <a href="#contatos" className={active === "contatos" ? "active" : ""}
                        onClick={() => handleClick("contatos")}>Contatos</a>
                </li>
            </ul>

            <button
                className="menu-toggle"
                onClick={() => setMenuAberto((prev) => !prev)}
                aria-label="Abrir menu"
            >
                <i className={`bi ${menuAberto ? "bi-x-lg" : "bi-list"}`}></i>
            </button>

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
