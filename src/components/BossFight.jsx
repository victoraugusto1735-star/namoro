import { useState } from "react";

export default function BossFight({ onWin }) {
  const [life, setLife] = useState(5);

  function attack() {
    const newLife = life - 1;
    setLife(newLife);

    if (newLife <= 0) {
      setTimeout(onWin, 600);
    }
  }

  return (
    <section className="screen">
      <span className="tag">Fase 3</span>

      <h2>Boss das Inseguranças</h2>

      <div className="boss-monster">👾</div>

      <p className="boss-life">HP do boss: {life}</p>

      {life > 0 ? (
        <>
          <p>
            Use carinho, confiança e respeito para vencer essa fase.
          </p>

          <div className="choices">
            <button onClick={attack}>💚 Carinho</button>
            <button onClick={attack}>🤝 Confiança</button>
            <button onClick={attack}>🌹 Respeito</button>
          </div>
        </>
      ) : (
        <p className="success-text">Boss derrotado! Caminho liberado ✨</p>
      )}
    </section>
  );
}