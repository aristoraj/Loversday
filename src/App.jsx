import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

// ================= IMAGE IMPORTS =================
import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
import img4 from "./assets/4.jpg";
import img5 from "./assets/5.jpg";
import img6 from "./assets/6.jpg";
import img7 from "./assets/7.jpg";
import img8 from "./assets/8.jpg";
import img9 from "./assets/9.jpg";
import img10 from "./assets/10.jpg";
import img11 from "./assets/11.jpg";
import img12 from "./assets/12.jpg";
import img13 from "./assets/13.jpg";
import img14 from "./assets/14.jpg";
import img15 from "./assets/15.jpg";
import img16 from "./assets/16.jpg";
import img17 from "./assets/17.jpg";
import img18 from "./assets/18.jpg";
import img19 from "./assets/19.jpg";
import img20 from "./assets/20.jpg";
import img21 from "./assets/21.jpg";
import img22 from "./assets/22.jpg";
import img23 from "./assets/23.jpg";
import img24 from "./assets/24.jpg";
import img25 from "./assets/25.jpg";
import img26 from "./assets/26.jpg";
import img27 from "./assets/27.jpg";
import img28 from "./assets/28.jpg";
import img29 from "./assets/29.jpg";
import img30 from "./assets/30.jpg";
import img31 from "./assets/31.jpg";
import img32 from "./assets/32.jpg";
import img33 from "./assets/33.jpg";
import img34 from "./assets/34.jpg";
import img35 from "./assets/35.jpg";

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

// ================= YES MESSAGE =================
const YES_MESSAGE = `Aww 😻 You said yes 🫣😍
I love you so much dii en thangame 💋
Chellame 💋 Kunje 💋 Pattu ma love you 💋
Ammu kutty en bujjli 💋 alagi 😍 ladde umma dii 💋
Kunje 🫂 en alagu pondati 💋💋👀

No words to describe my love for you dii kunje 💯💋🫂
Love you more and more dii 🤍🫰💃❤️

My life became more beautiful since the day you entered my life 💯🫂🤍
Love you forever dii my dr alagu pondatiiiiii 💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋
Happy Valantine's day dii Thangame🤍🫰💃❤️`;

import bgMusic from "./assets/music.mp3";

// ================= PHOTOS =================
const PHOTOS = [
  img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,
  img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,
  img21,img22,img23,img24,img25,img26,img27,img28,img29,img30,
  img31,img32,img33,img34,img35
];

// ================= HELPERS =================
const random = (min, max) => Math.random() * (max - min) + min;

// ================= RESPONSIVE LANES =================
const DESKTOP_LANES = [10, 30, 50, 70, 90];
const MOBILE_LANES_PHOTO = [20, 50, 80];
const MOBILE_LANES_TEXT = [10, 50, 90];

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return isMobile;
};

// ================= HEART =================
const Heart = ({ delay }) => (
  <motion.div
    initial={{ y: "110vh", opacity: 0 }}
    animate={{ y: "-10vh", opacity: [0,1,1,0] }}
    transition={{ duration: random(6,10), delay, repeat: Infinity, ease: "linear" }}
    style={{
      position: "absolute",
      left: `${random(0,100)}%`,
      fontSize: `${random(16,32)}px`,
      pointerEvents: "none"
    }}
  >
    ❤️
  </motion.div>
);

// ================= FLOATING PHOTO =================
const FloatingPhoto = ({ src, laneIndex, delay, lanes, isMobile }) => {
  // Randomly choose a side to enter from: top, bottom, left, right
  const side = ["top","bottom","left","right"][Math.floor(Math.random()*4)];
  const initial = {
    opacity: 0,
    x: side === "left" ? "-20vw" : side === "right" ? "120vw" : 0,
    y: side === "top" ? "-20vh" : side === "bottom" ? "120vh" : 0,
    rotate: random(-20,20)
  };
  const animate = {
    x: side === "left" || side === "right" ? random(10,90)+"vw" : undefined,
    y: side === "top" || side === "bottom" ? random(10,90)+"vh" : undefined,
    opacity: [0,1,1,0],
    rotate: random(-15,15)
  };

  return (
    <motion.img
      src={src}
      initial={initial}
      animate={animate}
      transition={{ duration: random(12,20), delay, repeat: Infinity, ease: "easeInOut" }}
      style={{
        position: "absolute",
        width: isMobile ? "80px" : "120px",
        height: isMobile ? "100px" : "160px",
        objectFit: "cover",
        borderRadius: "20px",
        boxShadow: "0 0 30px rgba(255,0,80,0.4)",
        pointerEvents: "none"
      }}
    />
  );
};

// ================= FLOATING QUOTE =================
const FloatingQuote = ({ text, laneIndex, delay, lanes, isMobile }) => {
  const side = ["top","bottom","left","right"][Math.floor(Math.random()*4)];
  const initial = {
    opacity: 0,
    x: side === "left" ? "-25vw" : side === "right" ? "125vw" : 0,
    y: side === "top" ? "-20vh" : side === "bottom" ? "120vh" : 0,
    rotate: random(-10,10)
  };
  const animate = {
    x: side === "left" || side === "right" ? random(5,90)+"vw" : undefined,
    y: side === "top" || side === "bottom" ? random(5,90)+"vh" : undefined,
    opacity: [0,1,1,0],
    rotate: random(-5,5)
  };

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={{ duration: random(10,18), delay, repeat: Infinity, ease: "easeInOut" }}
      style={{
        position: "absolute",
        maxWidth: isMobile ? "120px" : "180px",
        textAlign: "center",
        color: "white",
        fontSize: isMobile ? "14px" : "18px",
        fontWeight: 600,
        textShadow: "0 0 15px rgba(255,100,150,0.9)",
        pointerEvents: "none"
      }}
    >
      {text}
    </motion.div>
  );
};

// ================= FRONT PAGE =================
const FrontPage = ({ onYes }) => {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  const moveNo = () => {
    setNoPos({ x: random(-150,150), y: random(-80,80) });
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
      overflow: "hidden"
    }}>
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: "110vh", opacity: 0 }}
          animate={{ y: "-10vh", opacity: [0,1,1,0] }}
          transition={{ duration: random(6,12), delay: i * 0.5, repeat: Infinity }}
          style={{ position: "absolute", left: `${random(0,100)}%`, fontSize: `${random(18,32)}px` }}
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
        <img src={PHOTOS[0]} alt="thumb" style={{
          width: "140px",
          height: "180px",
          objectFit: "cover",
          borderRadius: "18px",
          marginBottom: "20px"
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
  const isMobile = useIsMobile();

  const photoLanes = isMobile ? MOBILE_LANES_PHOTO : DESKTOP_LANES;
  const textLanes = isMobile ? MOBILE_LANES_TEXT : DESKTOP_LANES;

  useEffect(() => {
    setHearts(Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      delay: random(0,8)
    })));
  }, []);

  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      overflow: "hidden",
      position: "relative",
      background: "#f6c1cc"
    }}>
      <div style={{ position: "absolute", inset: 0, zIndex: 2 }}>
        {hearts.map(h => <Heart key={h.id} delay={h.delay} />)}
      </div>

      <div style={{ position: "absolute", inset: 0, zIndex: 3 }}>
        {PHOTOS.map((p, i) => (
          <FloatingPhoto
            key={i}
            src={p}
            laneIndex={i % photoLanes.length}
            delay={i * 1.8}
            lanes={photoLanes}
            isMobile={isMobile}
          />
        ))}
      </div>

      <div style={{ position: "absolute", inset: 0, zIndex: 4 }}>
        {QUOTES.map((q, i) => (
          <FloatingQuote
            key={i}
            text={q}
            laneIndex={(i + 1) % textLanes.length}
            delay={i * 2.4}
            lanes={textLanes}
            isMobile={isMobile}
          />
        ))}
      </div>

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
