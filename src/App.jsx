import React, { useEffect, useState, useRef } from "react";
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
  "You feel like home to me",
  "My heart is calmer with you",
  "You are my favorite peace",
  "Life makes more sense with you",
  "I choose you, always",
  "You are my safest feeling",
  "Loving you feels right",
  "You are my quiet happiness",
  "You are where I belong",
  "My world is softer with you",
  "You are my today and tomorrow",
  "You make my heart feel full",
  "You are my best decision",
  "With you, I am enough",
  "You are my forever comfort",
  "You are my happy place",
  "You are my reason to smile",
  "You are my calm in chaos",
  "You are my heart’s favorite person",
  "You are my always"
];

// ================= STATIC YES MESSAGE =================

const YES_MESSAGE = `Aww 😻 You said yes 🫣😍
I love you so much dii en thangame 💋
Chellame 💋 Kunje 💋 Pattu ma love you 💋
Ammu kutty en bujjli 💋 alagi 😍 ladde umma dii 💋
Kunje 🫂 en alagu pondati 💋💋👀

No words to describe my love for you dii kunje 💯💋🫂
Love you more and more dii 🤍🫰💃❤️

My life became more beautiful since the day you entered my life 💯🫂🤍
Love you forever dii my dr alagu pondatiiiiii 💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋`;

// ================= MUSIC =================
import bgMusic from "./assets/music.mp3";

// ================= PHOTOS =================
const PHOTOS = [
  "src/assets/1.jpg","src/assets/2.jpg","src/assets/3.jpg","src/assets/4.jpg",
  "src/assets/5.jpg","src/assets/6.jpg","src/assets/7.jpg","src/assets/8.jpg",
  "src/assets/9.jpg","src/assets/10.jpg","src/assets/11.jpg","src/assets/12.jpg",
  "src/assets/13.jpg","src/assets/14.jpg","src/assets/15.jpg","src/assets/16.jpg",
  "src/assets/17.jpg","src/assets/18.jpg","src/assets/19.jpg","src/assets/20.jpg",
  "src/assets/21.jpg","src/assets/22.jpg","src/assets/23.jpg","src/assets/24.jpg",
  "src/assets/25.jpg","src/assets/26.jpg","src/assets/27.jpg","src/assets/28.jpg",
  "src/assets/29.jpg","src/assets/30.jpg","src/assets/31.jpg","src/assets/32.jpg",
  "src/assets/33.jpg","src/assets/34.jpg","src/assets/35.jpg"
];

// ================= HELPERS =================
const random = (min, max) => Math.random() * (max - min) + min;
const LANES = [10, 30, 50, 70, 90];

// ================= HEART PARTICLES =================
const Heart = ({ delay }) => (
  <motion.div
    initial={{ y: "110vh", opacity: 0 }}
    animate={{ y: "-10vh", opacity: [0, 1, 1, 0] }}
    transition={{ duration: random(6, 10), delay, repeat: Infinity, ease: "linear" }}
    style={{
      position: "absolute",
      left: `${random(0, 100)}%`,
      fontSize: `${random(16, 32)}px`,
      pointerEvents: "none"
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
    transition={{ duration: random(12, 18), delay, repeat: Infinity, ease: "linear" }}
    style={{
      position: "absolute",
      left: `${LANES[laneIndex]}%`,
      transform: "translateX(-50%)",
      width: "120px",
      height: "160px",
      objectFit: "cover",
      borderRadius: "20px",
      boxShadow: "0 0 30px rgba(255,0,80,0.4)",
      pointerEvents: "none"
    }}
  />
);

// ================= FLOATING QUOTE =================
const FloatingQuote = ({ text, laneIndex, delay }) => (
  <motion.div
    initial={{ y: "110vh", opacity: 0 }}
    animate={{ y: "-20vh", opacity: [0, 1, 1, 0] }}
    transition={{ duration: random(10, 16), delay, repeat: Infinity, ease: "linear" }}
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
      pointerEvents: "none"
    }}
  >
    {text}
  </motion.div>
);

// ================= FRONT PAGE =================
const FrontPage = ({ onYes }) => {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  const moveNo = () => {
    setNoPos({ x: random(-150, 150), y: random(-80, 80) });
  };

  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f6c1cc",
      position: "relative",
      overflow: "hidden",
      fontFamily: "sans-serif"
    }}>
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: "110vh", opacity: 0 }}
          animate={{ y: "-10vh", opacity: [0, 1, 1, 0] }}
          transition={{ duration: random(6, 12), delay: i * 0.5, repeat: Infinity }}
          style={{ position: "absolute", left: `${random(0, 100)}%`, fontSize: `${random(18, 32)}px` }}
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
          boxShadow: "0 20px 60px rgba(0,0,0,0.15)"
        }}
      >
        <img src={PHOTOS[0]} alt="thumbnail" style={{
          width: "140px",
          height: "180px",
          objectFit: "cover",
          borderRadius: "18px",
          marginBottom: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
        }} />

        <h2 style={{ color: "#ff4d88" }}>My dr Manje🐣😻,</h2>
        <h1 style={{ color: "#333", marginBottom: 20 }}>
          Will you be my Valentine? 💖
        </h1>

        <div style={{ display: "flex", gap: 20, justifyContent: "center" }}>
          <button onClick={onYes} style={{
            background: "#ff4d88",
            color: "white",
            border: "none",
            padding: "14px 30px",
            borderRadius: "14px",
            fontSize: "18px",
            cursor: "pointer"
          }}>
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
              cursor: "pointer"
            }}
          >
            NO
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

// ================= REEL PAGE =================
const ReelPage = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    setHearts(Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      delay: random(0, 8)
    })));
  }, []);

  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      overflow: "hidden",
      position: "relative",
      background: "#f6c1cc",
      fontFamily: "sans-serif"
    }}>
      <div style={{ position: "absolute", inset: 0, zIndex: 2 }}>
        {hearts.map(h => <Heart key={h.id} delay={h.delay} />)}
      </div>

      <div style={{ position: "absolute", inset: 0, zIndex: 3 }}>
        {PHOTOS.map((p, i) => (
          <FloatingPhoto key={i} src={p} laneIndex={i % LANES.length} delay={i * 1.5} />
        ))}
      </div>

      <div style={{ position: "absolute", inset: 0, zIndex: 4 }}>
        {QUOTES.map((q, i) => (
          <FloatingQuote key={i} text={q} laneIndex={(i + 2) % LANES.length} delay={i * 2} />
        ))}
      </div>

      {/* ===== STATIC LOVE TEXT ===== */}
      <div style={{
        position: "absolute",
        top: "40px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "90%",
        maxWidth: "500px",
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: "clamp(16px, 4vw, 22px)",
        lineHeight: 1.5,
        textShadow: "0 0 20px rgba(255,50,120,0.9)",
        zIndex: 1,
        padding: "16px 18px",
        borderRadius: "18px",
        background: "rgba(255, 105, 140, 0.25)",
        backdropFilter: "blur(6px)"
      }}>
        {YES_MESSAGE}
      </div>
    </div>
  );
};

// ================= MAIN =================
export default function ReelCinematicValentine() {
  const [accepted, setAccepted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (accepted && audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  }, [accepted]);

  return (
    <>
      <audio ref={audioRef} src={bgMusic} loop />
      {accepted ? <ReelPage /> : <FrontPage onYes={() => setAccepted(true)} />}
    </>
  );
}
