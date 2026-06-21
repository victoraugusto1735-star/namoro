import { useState } from "react";

export default function MemoryGame({ memories, onFinish }) {
  const [opened, setOpened] = useState([]);

  function collect(index) {
    if (!opened.includes(index)) {
      setOpened([...opened, index]);
    }
  }

  return (
    <section className="screen">
      <span className="tag">Fase 1</span>

      <h2>Colete as Memórias</h2>

      <p>Clique nos corações para desbloquear lembranças especiais.</p>

      <div className="memory-grid">
        {memories.map((memory, index) => (
          <button
            key={memory}
            className={opened.includes(index) ? "memory active" : "memory"}
            onClick={() => collect(index)}
          >
            💚

          </button>
        ))}
      </div>

      <p className="progress">
        {opened.length}/{memories.length} memórias coletadas
      </p>

      <div className="unlocked">
        {opened.map((index) => (
          <p key={index}>✨ {memories[index]}</p>
        ))}
      </div>

      {opened.length === memories.length && (
        <button onClick={onFinish}>Próxima fase 🎯</button>
      )}
    </section>
  );
}