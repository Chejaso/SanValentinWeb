import React, { useState } from 'react';
import { useRouter } from 'next/router';

const gifUrls = [
  "https://i.pinimg.com/originals/b3/66/20/b366201407b7d06f4622d1f5d30beec4.gif",
  "https://i.pinimg.com/originals/42/be/7c/42be7c2111a6e2ef3c3d0554307f0970.gif",
  "https://media.baamboozle.com/uploads/images/188060/1647089292_61673_gif-url.gif",
  "https://i.pinimg.com/originals/92/c8/ee/92c8ee360a537a7189ff52869c924e6e.gif"
];

const phrases = [
  "No", "¿Estás seguro?", "¿De verdad?", "¿Última oportunidad?",
  "¡Te lo suplico!", "¡No seas así!", "¡Dame una oportunidad!",
  "¡Sin ti no soy nada!", "¡Te necesito en mi vida!", "¡Mi corazón se rompe! 😭",
  "¡Por favor, di que sí! 🥺", "¡Haré lo que sea! 😩", "¡No me abandones! 💔",
  "¡Te amo demasiado! 🥰", "¡No puedo vivir sin ti! 😭", "¡Eres mi todo! ❤️"
];

const Home = () => {
  const [noCount, setNoCount] = useState(0);
  const [currentGif, setCurrentGif] = useState(0);
  const [yesButtonSize, setYesButtonSize] = useState(1);
  const router = useRouter();

  const handleYesClick = () => {
    router.push('/celebration-page');
  };

  const handleNoClick = () => {
    setNoCount(noCount + 1);
    setCurrentGif((prev) => (prev + 1) % gifUrls.length);
    setYesButtonSize(Math.min(1 + noCount * 0.1, 2)); // Aumenta el botón "Sí"
  };

  return (
    <div 
      className="container text-center d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/001/927/770/non_2x/pink-paper-hearts-on-pink-background-for-valentine-s-day-background-free-photo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "20px"
      }}
    >
      <h1 className="display-4 fw-bold text-danger">¿Quieres ser mi San Valentín? ❤️</h1>

      <div className="mt-4">
        <img 
          src={gifUrls[currentGif]} 
          alt="Reacción" 
          className="img-fluid rounded"
          style={{ width: "300px", height: "auto" }}
        />
      </div>

      <div className="mt-4 position-relative">
        {/* Botón "Sí" que vibra después de 5 intentos */}
        <button 
          className="btn btn-success btn-lg mx-2"
          style={{
            transform: `scale(${yesButtonSize})`,
            transition: "0.3s",
            animation: noCount >= 5 ? "vibrate 0.3s infinite" : "none"
          }}
          onClick={handleYesClick}
        >
          Sí {noCount >= 5 ? "😢" : ""}
        </button>

        {/* Botón "No" normal */}
        <button 
          className="btn btn-danger btn-lg mx-2"
          onClick={handleNoClick}
        >
          {phrases[Math.min(noCount, phrases.length - 1)]}
        </button>
      </div>
    </div>
  );
};

export default Home;