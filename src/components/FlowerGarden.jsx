import { useState } from "react";

const messages = [
  "Você tornou meus dias mais leves",
  "Seu sorriso fica guardado na minha memória",
  "Eu gosto da paz que sinto perto de você",
  "Você faz até os momentos simples ficarem especiais",
  "Eu quero viver essa nova fase com você",
];

export default function FlowerGarden({ onFinish }) {
  const [opened, setOpened] = useState([]);

  function openFlower(index) {
    if (!opened.includes(index)) {
      setOpened([...opened, index]);
    }
  }

  return (
    <section className="screen">
      <span className="corner-flower top-left">❀</span>
      <span className="corner-flower top-right">❀</span>
      <span className="corner-flower bottom-left">❀</span>
      <span className="corner-flower bottom-right">❀</span>

      <span className="tag">Jardim das Flores</span>

      <h1>Jardim Encantado</h1>

      <p>Clique nas flores para desbloquear mensagens antes do pedido final.</p>

      <div className="garden">
        {messages.map((message, index) => (
          <button
            key={message}
            className={opened.includes(index) ? "garden-flower active" : "garden-flower"}
            onClick={() => openFlower(index)}
          >
            ❀
          </button>
        ))}
      </div>

      <div className="garden-messages">
        {opened.map((index) => (
          <p key={index}>✨ {messages[index]}</p>
        ))}
      </div>

      {opened.length === messages.length && (
        <button onClick={onFinish}>Desbloquear pedido 💍</button>
      )}
    </section>
  );
}