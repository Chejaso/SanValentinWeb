import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

const gifUrls = [
  "https://i.pinimg.com/originals/79/05/91/790591dc5125b195210c1fc858a10353.gif",
  "https://i.pinimg.com/originals/ef/f4/be/eff4be08d90db3e8d30a322101e945ae.gif",
  "https://i.pinimg.com/originals/bf/99/6d/bf996db548b8d5e76f3dce3e5502038a.gif",
  "https://media.tenor.com/EX6v0Es3a4sAAAAM/ryanandteresa-ryannteresa.gif"
];

const CelebrationPage = () => {
  const [currentGif, setCurrentGif] = useState(0);

  useEffect(() => {
    // 🎉 Lanzar confeti al entrar
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    // 🔄 Cambiar GIF automáticamente cada 5 segundos
    const interval = setInterval(() => {
      setCurrentGif((prev) => (prev + 1) % gifUrls.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="container text-center d-flex flex-column justify-content-center align-items-center"
      style={{
        position: "relative",
        minHeight: "100vh",
        padding: "20px",
        backgroundColor: "rgba(255, 255, 255, 0.5)", // Filtro blanco semitransparente
      }}
    >
      {/* Fondo con opacidad */}
      <div 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('https://png.pngtree.com/background/20210717/original/pngtree-cute-love-heart-background-picture-image_1433196.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3, // Fondo más desvanecido
          zIndex: -1
        }}
      ></div>

      <h1 className="display-3 fw-bold text-success">¡Sabía que dirías que sí! 🎉❤️</h1>

      <div className="mt-4">
        <img 
          src={gifUrls[currentGif]} 
          alt="Celebración" 
          className="img-fluid rounded"
          style={{ width: "300px", height: "auto" }}
        />
      </div>

      <p className="mt-3 fs-4">¡Gracias mi amor, te amitooo 💖,
        Ojala encontremos un lugar para hacer un tutsi tutsi tutsi 👉👈 
      </p>

      {/* 🎶 Música oculta pero sonando desde el minuto correcto */}
      <audio autoPlay loop style={{ display: "none" }}>
        <source src="/Musica.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default CelebrationPage;
