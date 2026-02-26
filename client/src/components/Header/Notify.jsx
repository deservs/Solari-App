import { X, CreditCard, Clapperboard } from 'lucide-react';

import "./Notify.css";

function ExibirNotificacao({ mensagens, aoLimpar }) {
  return (
    <div id="Notificacao" className="popup-estilo">
      <div id="Notify-Head">
        <h2>Notificações</h2>
        <button id='Close-Notify'><X size={16} /></button>
      </div>
      <div id="Notify-Body">
        {/* Aqui usamos o Ternário para decidir o conteúdo interno */}
        {mensagens.length > 0 ? (
          <>
            <ul>
              {mensagens.map((msg, index) => (
                <li key={index}>{msg}</li>
              ))}
            </ul>
            <button onClick={aoLimpar}>Limpar Tudo 🧹</button>
          </>
        ) : (
          <p>Nenhuma notificação nova 📭</p>
        )}
      </div>
    </div>
  );
}
export default ExibirNotificacao;
