import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// ================= CONFIG =================
const QUOTES = [
  "You are my sunshine",
  "You made my life beautiful",
  "You are not just my Valentine",
  "You are my peace",
  "You are my smile",
  "You are my safe place",
  "You are my forever",
  "With you, everything feels right",
];

// Replace with your actual images
const PHOTOS = [
  "/photos/1.jpg",
  "/photos/2.jpg",
  "/photos/3.jpg",
  "/photos/4.jpg",
  "/photos/5.jpg",
  "/photos/6.jpg",
  "/photos/7.jpg",
  "/photos/8.jpg",
];

// ================= HELPERS =================
const random = (min, max) => Math.random() * (max - min) + min;

// Prevent overlap by assigning lanes (important for 9:16)
const LANES = [10, 30, 50, 70, 90]; // percentage X positions

// ================= HEART PARTICLES =================
const Heart = ({ delay }) => (
  <motion.div
    initial={{ y: "110vh", opacity: 0 }}
    animate={{ y: "-10vh", opacity: [0, 1, 1, 0] }}
    transition={{
      duration: random(6, 10),
      delay,
      repeat: Infinity,
      ease: "linear",
    }}
    style={{
      position: "absolute",
      left: `${random(0, 100)}%`,
      fontSize: `${random(16, 32)}px`,
      pointerEvents: "none",
    }}
  >
    ❤️
  </motion.div>
);

// ================= FLOATING PHOTO =================
const FloatingPhoto = ({ src, laneIndex, delay }) => (
  <motion.img
    src={src}
    initial={{ y: "110vh", opacity: 0 }}
    animate={{ y: "-20vh", opacity: [0, 1, 1, 0] }}
    transition={{
      duration: random(12, 18),
      delay,
      repeat: Infinity,
      ease: "linear",
    }}
    style={{
      position: "absolute",
      left: `${LANES[laneIndex]}%`,
      transform: "translateX(-50%)",
      width: "120px",
      height: "160px",
      objectFit: "cover",
      borderRadius: "20px",
      boxShadow: "0 0 30px rgba(255,0,80,0.4)",
      pointerEvents: "none",
    }}
  />
);

// ================= FLOATING QUOTE =================
const FloatingQuote = ({ text, laneIndex, delay }) => (
  <motion.div
    initial={{ y: "110vh", opacity: 0 }}
    animate={{ y: "-20vh", opacity: [0, 1, 1, 0] }}
    transition={{
      duration: random(10, 16),
      delay,
      repeat: Infinity,
      ease: "linear",
    }}
    style={{
      position: "absolute",
      left: `${LANES[laneIndex]}%`,
      transform: "translateX(-50%)",
      maxWidth: "180px",
      textAlign: "center",
      color: "white",
      fontSize: "18px",
      fontWeight: 600,
      textShadow: "0 0 15px rgba(255,100,150,0.9)",
      pointerEvents: "none",
    }}
  >
    {text}
  </motion.div>
);

// ================= FRONT PAGE =================
const FrontPage = ({ onYes }) => {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  const moveNo = () => {
    setNoPos({
      x: random(-150, 150),
      y: random(-80, 80),
    });
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f6c1cc",
        position: "relative",
        overflow: "hidden",
        fontFamily: "sans-serif",
      }}
    >
      {/* floating hearts background */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: "110vh", opacity: 0 }}
          animate={{ y: "-10vh", opacity: [0, 1, 1, 0] }}
          transition={{ duration: random(6, 12), delay: i * 0.5, repeat: Infinity }}
          style={{
            position: "absolute",
            left: `${random(0, 100)}%`,
            fontSize: `${random(18, 32)}px`,
          }}
        >
          ❤️
        </motion.div>
      ))}

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "#fff0f4",
          padding: "40px",
          borderRadius: "30px",
          textAlign: "center",
          boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
        }}
      >
        <h2 style={{ color: "#ff4d88", marginBottom: 10 }}>Manje,</h2>
        <h1 style={{ color: "#333", marginBottom: 20 }}>
          Will you be my Valentine? 💖
        </h1>

        <div style={{ display: "flex", gap: 20, justifyContent: "center" }}>
          <button
            onClick={onYes}
            style={{
              background: "#ff4d88",
              color: "white",
              border: "none",
              padding: "14px 30px",
              borderRadius: "14px",
              fontSize: "18px",
              cursor: "pointer",
              boxShadow: "0 10px 25px rgba(255,77,136,0.4)",
            }}
          >
            YES
          </button>

          <motion.button
            onMouseEnter={moveNo}
            animate={{ x: noPos.x, y: noPos.y }}
            transition={{ type: "spring", stiffness: 200 }}
            style={{
              background: "#d0d0d0",
              border: "none",
              padding: "14px 30px",
              borderRadius: "14px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            NO
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

// ================= IMAGE REEL PAGE =================
const ReelPage = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const arr = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      delay: random(0, 8),
    }));
    setHearts(arr);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        position: "relative",
        background: "#f6c1cc", // same pink background as front page
        fontFamily: "sans-serif",
      }}
    >
      {/* Hearts Layer */}
      <div style={{ position: "absolute", inset: 0, zIndex: 2 }}>
        {hearts.map((h) => (
          <Heart key={h.id} delay={h.delay} />
        ))}
      </div>

      {/* Photos */}
      <div style={{ position: "absolute", inset: 0, zIndex: 3 }}>
        {PHOTOS.map((p, i) => (
          <FloatingPhoto
            key={i}
            src={p}
            laneIndex={i % LANES.length}
            delay={i * 1.5}
          />
        ))}
      </div>

      {/* Quotes */}
      <div style={{ position: "absolute", inset: 0, zIndex: 4 }}>
        {QUOTES.map((q, i) => (
          <FloatingQuote
            key={i}
            text={q}
            laneIndex={(i + 2) % LANES.length}
            delay={i * 2}
          />
        ))}
      </div>
    </div>
  );
};

// ================= MAIN =================
export default function ReelCinematicValentine() {
  const [accepted, setAccepted] = useState(false);

  return accepted ? (
    <ReelPage />
  ) : (
    <FrontPage onYes={() => setAccepted(true)} />
  );
}
