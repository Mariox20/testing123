import React from 'react';
import confetti from 'canvas-confetti';

function App() {
  // Función para generar lluvia de corazones
  const makeItRainHearts = () => {
    const duration = 5 * 1000; // 5 segundos
    const animationEnd = Date.now() + duration;

    const colors = ['#ff0000', '#ff5e5e', '#ff9f9f'];

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
        shapes: ['circle'], // Usamos círculos para simular corazones pequeños
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
        shapes: ['circle'],
      });

      if (Date.now() < animationEnd) {
        requestAnimationFrame(frame);
      }
    })();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 to-red-500 text-white">
      <h1 className="text-5xl font-bold mb-4 text-center">Feliz Cumplemes, Vania ❤️</h1>
      <p className="text-lg mb-6 text-center max-w-md">
        Cada momento contigo es único y especial. Estoy muy agradecido por tenerte en mi vida.
        Este pequeño gesto es para recordarte cuánto te amo. 💕
      </p>
      <button
        onClick={makeItRainHearts}
        className="text-4xl mt-6 animate-bounce"
        aria-label="Lluvia de corazones"
      >
        ❤️
      </button>

    </div>
  );
}

export default App;
