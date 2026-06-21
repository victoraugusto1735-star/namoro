import { useState } from "react";

const photos = [
  {
    src: "/fotos/foto1.png",
    text: "Uma memória especial da nossa jornada 💚",
  },
  {
    src: "/fotos/foto2.png",
    text: "Um momento que eu gosto de lembrar ✨",
  },
  {
    src: "/fotos/foto3.png",
    text: "Mais uma parte bonita da nossa história ❀",
  },
];

export default function Gallery({ onContinue }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section className="screen">
      <span className="corner-flower top-left">❀</span>
      <span className="corner-flower top-right">❀</span>
      <span className="corner-flower bottom-left">❀</span>
      <span className="corner-flower bottom-right">❀</span>

      <span className="tag">Fase 4</span>

      <h2>Memórias Desbloqueadas</h2>

      <p>Clique em uma foto para ver melhor.</p>

      <div className="gallery">
        {photos.map((photo, index) => (
          <img
            key={photo.src}
            src={photo.src}
            alt={`Memória ${index + 1}`}
            onClick={() => setSelectedPhoto(photo)}
          />
        ))}
      </div>

      <button onClick={onContinue}>Continuar ✨</button>

      {selectedPhoto && (
        <div className="photo-modal" onClick={() => setSelectedPhoto(null)}>
          <div className="photo-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedPhoto(null)}>
              ✕
            </button>

            <img src={selectedPhoto.src} alt="Memória ampliada" />
            <p>{selectedPhoto.text}</p>
          </div>
        </div>
      )}
    </section>
  );
}