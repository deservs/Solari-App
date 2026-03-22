import {Share2, Earth} from "lucide-react";

import "./footer.css";
import logo from "../../assets/Logo_Solari.svg";

function Footer() {
  return (
    <footer className="footer">
      <div id="up-footer">
        <div id="logo-area">
          <div>
            <img src={logo} alt="Logo Solari" />
            Solari
          </div>
          <p>
            Plataforma de streaming premium que leva entretenimento de alta
            fidelidade a entusiastas em todo o mundo. Alta definição, sem
            concessões.
          </p>
        </div>
        <div className="footer-column" id="plataform-area">
            <h3>Plataforma</h3>
            <ul>
                <li>Filmes</li>
                <li>Séries</li>
                <li>Originais</li>
                <li>Animes</li>
            </ul>
        </div>
        <div className="footer-column" id="suport-area">
            <h3>Suporte</h3>
            <ul>
                <li>Central de Ajuda</li>
                <li>Minha Conta</li>
                <li>Fale Conosco</li>
                <li>Dispositivos</li>
            </ul>
        </div>
        <div className="footer-column" id="company-area">
            <h3>Empresa</h3>
            <ul>
                <li>Sobre Nós</li>
                <li>Imprensa</li>
                <li>Carreiras</li>
                <li>Jurídico</li>
            </ul>
        </div>
        <div id="social-area">
            <h3>Social</h3>
            <ul>
                <li><Share2 /></li>
                <li><Earth /></li>
            </ul>
        </div>
      </div>
      <div id="down-footer">
        <div id="copyright">© 2024 Solari Streaming Inc. Todos os direitos reservados.</div>
        <div id="whatever">
            <ul>
                <li>Política de Privacidade</li>
                <li>Termos de Serviço</li>
                <li>Preferências de Cookies</li>
            </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
