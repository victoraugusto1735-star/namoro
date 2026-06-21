import { useEffect, useRef, useState } from "react";

import Intro from "./components/Intro.jsx";
import NPC from "./components/NPC.jsx";
import MemoryGame from "./components/MemoryGame.jsx";
import Quiz from "./components/Quiz.jsx";
import BossFight from "./components/BossFight.jsx";
import Gallery from "./components/Gallery.jsx";
import LoveBox from "./components/LoveBox.jsx";
import TreasureChest from "./components/TreasureChest.jsx";
import FlowerGarden from "./components/FlowerGarden.jsx";
import Proposal from "./components/Proposal.jsx";

import { memories } from "./data/memories.js";
import { quizQuestions } from "./data/quiz.js";

const musicas = [
  "/musicas/tema.mp3",
  "/musicas/tema2.mp3",
  "/musicas/tema3.mp3",
];

const totalFases = 10;

export default function App() {
  const audioRef = useRef(null);

  const [loading, setLoading] = useState(true);
  const [fase, setFase] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(50);
  const [musicaAtual, setMusicaAtual] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  function changeVolume(e) {
    const value = Number(e.target.value);

    setVolume(value);

    if (audioRef.current) {
      audioRef.current.volume = value / 100;
    }
  }

  function startGame() {
    audioRef.current?.play();
    setFase(1);
  }

  function toggleMusic() {
    if (!audioRef.current) return;
    audioRef.current.muted = !audioRef.current.muted;
    setMuted(audioRef.current.muted);
  }

  function nextMusic() {
    const next = (musicaAtual + 1) % musicas.length;
    setMusicaAtual(next);

    setTimeout(() => {
      audioRef.current?.play();
    }, 100);
  }

  function restartGame() {
    setFase(0);
    setAccepted(false);
    setMuted(false);

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.muted = false;
    }
  }

  if (loading) {
    return (
      <main className="loading-screen">
        <div className="loading-particles"></div>

        <div className="loading-card">
          <span className="loading-icon">❀</span>
          <h1>Quest do Namoro</h1>
          <p>Preparando uma missão especial...</p>

          <div className="loading-bar">
            <span></span>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="game">
      <audio ref={audioRef} src={musicas[musicaAtual]} loop />

      <button className="volume-btn" onClick={toggleMusic}>
        {muted ? "🔇" : "🔊"}
      </button>

      <div className="volume-control">
        <span>🔉</span>

        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={changeVolume}
        />

        <span>🔊</span>
      </div>

      <button className="skip-btn" onClick={nextMusic}>
        ⏭️
      </button>

      <div className="magic-light"></div>
      <div className="stars"></div>

      <div className="flower-magic">
        {Array.from({ length: 35 }).map((_, index) => (
          <span key={index}>❀</span>
        ))}
      </div>

      <div className="moon">❀</div>

      <div className="hud">
        <span>Quest do Namoro</span>
        <span>Fase {fase + 1}</span>
      </div>

      <div className="progress-bar">
        <span style={{ width: `${((fase + 1) / totalFases) * 100}%` }}></span>
      </div>

      {fase === 0 && <Intro onStart={startGame} />}
      {fase === 1 && <NPC onContinue={() => setFase(2)} />}
      {fase === 2 && (
        <MemoryGame memories={memories} onFinish={() => setFase(3)} />
      )}
      {fase === 3 && (
        <Quiz questions={quizQuestions} onFinish={() => setFase(4)} />
      )}
      {fase === 4 && <BossFight onWin={() => setFase(5)} />}
      {fase === 5 && <Gallery onContinue={() => setFase(6)} />}
      {fase === 6 && <LoveBox onContinue={() => setFase(7)} />}
      {fase === 7 && <TreasureChest onOpen={() => setFase(8)} />}
      {fase === 8 && <FlowerGarden onFinish={() => setFase(9)} />}
      {fase === 9 && (
        <Proposal
          accepted={accepted}
          onAccept={() => setAccepted(true)}
          onRestart={restartGame}
          nome="meuu bem"
        />
      )}
    </main>
  );
}
