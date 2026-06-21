import { useState } from "react";

export default function TreasureChest({ onOpen }) {
  const [opened, setOpened] = useState(false);

  function openChest() {
    setOpened(true);
  }

  return (
    <section className="screen">
      <span className="tag">Fase Final</span>

      <h2>Baú Lendário</h2>

      {!opened ? (
        <>
          <p>O item mais raro dessa missão está aqui dentro.</p>

          <button className="chest" onClick={openChest}>
            📦 Abrir Baú
          </button>
        </>
      ) : (
        <div className="treasure">
          <p>Você encontrou um item lendário...</p>

          <img className="ring" src="/icons/ring.png" alt="Anel" />

          <button onClick={onOpen}>Desbloquear pergunta 💍</button>
        </div>
      )}
    </section>
  );
}