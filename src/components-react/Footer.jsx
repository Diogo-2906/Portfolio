import "../Components-styles/Footer.css"

const  currentYear = new Date().getFullYear();

function Footer() {
      return (
            <footer className="footer">
                  <p>© {currentYear} - Desenvolvido por um jovem Estudante do SENAI</p>
                  <p>Feito com React</p>
            </footer>
      );
}

export default Footer;