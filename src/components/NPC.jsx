export default function NPC({ onContinue }) {
  return (
    <section className="screen">
      <span className="tag">NPC Misterioso</span>

      <div className="npc">🧚‍♀️</div>

      <h2>Olá, aventureira</h2>

      <p>
        Essa jornada foi criada com carinho para uma pessoa muito especial.
        Cada fase guarda um pedacinho da nossa história.
      </p>

      <p>
        Complete a missão e desbloqueie o tesouro final.
      </p>

      <button onClick={onContinue}>Aceitar missão ✨</button>
    </section>
  );
}