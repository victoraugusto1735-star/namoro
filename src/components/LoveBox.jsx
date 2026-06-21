export default function LoveBox({ onContinue }) {
  const motivos = [
    "❀ Seu sorriso",
    "❀ Seu jeito de ser",
    "❀ Suas risadas",
    "❀ Como você me faz sentir",
    "❀ Nossas conversas",
    "❀ Seu carinho",
    "❀ Seu coração",
    "❀ Tudo em você 💚",
  ];

  return (
    <section className="screen">
      <span className="tag">Segredo desbloqueado ✨</span>

      <h1>Coisas que eu amo em você 💚</h1>

      <p>
        Antes da última missão, tem algumas coisas que eu queria te contar...
      </p>

      <div className="love-box">
        {motivos.map((motivo, index) => (
          <div
            key={index}
            className="love-item"
            style={{
              animationDelay: `${index * 0.3}s`,
            }}
          >
            {motivo}
          </div>
        ))}
      </div>

      <button onClick={onContinue}>
        Continuar para a missão final 💍
      </button>
    </section>
  );
}