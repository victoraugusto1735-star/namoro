export default function Intro({ onStart }) {
  return (
    <section className="screen intro-screen">
      <span className="tag">Nova missão desbloqueada</span>

      <h1>Quest do Namoro</h1>

      <p>
        Preparei uma pequena jornada com algumas lembranças especiais e uma
        surpresa no final. 💚
      </p>

      <button onClick={onStart}>Começar missão 🎮</button>
    </section>
  );
}
