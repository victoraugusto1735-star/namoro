export default function Proposal({ accepted, onAccept, onRestart, nome }) {
  if (accepted) {
    return (
      <section className="screen finished">
        <div className="flower-rain">
          {Array.from({ length: 24 }).map((_, index) => (
            <span key={index}>❀</span>
          ))}
        </div>

        <span className="tag">Missão concluída ✨</span>

        <h1>Pedido aceito 🎉</h1>

        <p>Você desbloqueou a fase mais bonita:</p>

        <h2>Nossa história como namorados 💚</h2>

        <p>
          Agora começa uma nova aventura, {nome}, e eu quero viver ela com você.
        </p>

        <button onClick={onRestart}>Jogar de novo</button>
      </section>
    );
  }

  return (
    <section className="screen final">
      <span className="corner-flower top-left">❀</span>
      <span className="corner-flower top-right">❀</span>
      <span className="corner-flower bottom-left">❀</span>
      <span className="corner-flower bottom-right">❀</span>

      <span className="tag">Pedido desbloqueado 💍</span>

      <h1>{nome}, você aceita namorar comigo?</h1>

      <p>
        Depois de tudo que a gente viveu, das conversas, dos momentos, das
        risadas e de tudo que foi crescendo entre nós, eu quero começar uma nova
        fase ao seu lado.
      </p>

      <div className="proposal-image-container">
        <img
          src="/pedido/pedido.png"
          alt="Nossa história"
          className="proposal-image"
        />
      </div>

      <div className="buttons">
        <button onClick={onAccept}>Sim 💚</button>
        <button onClick={onAccept}>Claro que sim 💍</button>
      </div>
    </section>
  );
}