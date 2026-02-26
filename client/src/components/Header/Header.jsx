import { Search, Compass, House, CircleUserRound, Bell } from "lucide-react";

import { useState } from "react";

import ExibirNotificacao from "./notify";

import Logo from "../../assets/Logo_Solari.svg";
import "./header.css";

function Header() {
  const [isClosed, setIsClosed] = useState(true);
  const [mensagens, setMensagens] = useState(["Msg 1", "Msg 2"]);

  const alternar = () => {
    setIsClosed(!isClosed);
  };

  const limparNotificacoes = () => {
    setMensagens([]); 
    console.log("Mensagens apagadas!");
  };

  return (
    <>
      <div id="Header">
        <div id="Logo-Area">
          <img src={Logo} alt="Logo" />
          <h1>Solari</h1>
        </div>
        {/* Menu para telas desktop */}
        <div id="Top-Menu">
          <ul>
            <li>Filmes</li>
            <li>Séries</li>
            <li>Desenhos</li>
            <li>Animes</li>
          </ul>
        </div>
        {/* icone de notificação isolado somente para mobile */}
        <div id="Mobile-Notifi" Close={isClosed} onClick={alternar}>
          <Bell size={32} strokeWidth={2.25} />
        </div>
      </div>
      {/* O menu inferior fixo para usuarios mobile */}
      <div id="Bottom-Menu">
        <ul>
          <li>
            <p>
              <House size={32} />
            </p>
            <p>Home</p>
          </li>
          <li>
            <p>
              <Compass size={32} />
            </p>
            <p>Descobrir</p>
          </li>
          <li>
            <p>
              <Search size={32} />
            </p>
            <p>Buscar</p>
          </li>
          <li>
            <p>
              <CircleUserRound size={32} />
            </p>
            <p>Perfil</p>
          </li>
        </ul>
      </div>
      {!isClosed && <ExibirNotificacao mensagens={mensagens} aoLimpar={limparNotificacoes} />}
    </>
  );
}

export default Header;
