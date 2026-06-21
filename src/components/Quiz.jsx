import { useState } from "react";

export default function Quiz({ questions, onFinish }) {
  const [current, setCurrent] = useState(0);
  const [message, setMessage] = useState("");

  const question = questions[current];

  function answer(option) {
    if (option === question.answer) {
      setMessage("Resposta certa! 💚");

      setTimeout(() => {
        setMessage("");

        if (current + 1 < questions.length) {
          setCurrent(current + 1);
        } else {
          onFinish();
        }
      }, 800);
    } else {
      setMessage("Quase! Tenta de novo 😅");
    }
  }

  return (
    <section className="screen">
      <span className="tag">Fase 2</span>

      <h2>Quiz do Casal</h2>

      <p>{question.question}</p>

      <div className="choices">
        {question.options.map((option) => (
          <button key={option} onClick={() => answer(option)}>
            {option}
          </button>
        ))}
      </div>

      {message && <p className="quiz-message">{message}</p>}
    </section>
  );
}