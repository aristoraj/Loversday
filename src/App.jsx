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

// ================= STATIC YES MESSAGE =================

const YES_MESSAGE = `Aww 😻 You said yes 🫣😍
I love you so much dii en thangame 💋
Chellame 💋 Kunje 💋 Pattu ma love you 💋
Ammu kutty en bujjli 💋 alagi 😍 ladde umma dii 💋
Kunje 🫂 en alagu pondati 💋💋👀

No words to describe my love for you dii kunje 💯💋🫂
Love you more and more dii 🤍🫰💃❤️

My life became more beautiful since the day you entered my life 💯🫂🤍
Love you forever dii my dr alagu pondatiiiiii 💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋
Happy Valantine's day dii Thangame`;

// ================= MUSIC =================
import bgMusic from "./assets/music.mp3";

// ================= PHOTO ARRAY =================
const PHOTOS = [
  img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,
  img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,
  img21,img22,img23,img24,img25,img26,img27,img28,img29,img30,
  img31,img32,img33,img34,img35
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
    setNoPos({ x: random(-100, 100), y: random(-50, 50) });
  };

  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #f6c1cc 0%, #ffd4e0 50%, #f6c1cc 100%)",
      position: "relative",
      overflow: "hidden"
    }}>
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: "110vh", opacity: 0 }}
          animate={{ 
            y: "-10vh", 
            opacity: [0, 1, 1, 0],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: random(7, 13), 
            delay: i * 0.5, 
            repeat: Infinity 
          }}
          style={{ 
            position: "absolute", 
            left: `${random(5, 95)}%`, 
            fontSize: `${random(18, 30)}px`,
            zIndex: 1
          }}
        >
          ❤️
        </motion.div>
      ))}

      <motion.div
        initial={{ scale: 0.7, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ 
          duration: 1, 
          type: "spring", 
          stiffness: 100 
        }}
        style={{
          background: "linear-gradient(135deg, #fff0f4 0%, #ffe8f0 100%)",
          padding: "32px 26px",
          borderRadius: "28px",
          textAlign: "center",
          boxShadow: "0 25px 70px rgba(255, 0, 80, 0.25), 0 10px 30px rgba(0, 0, 0, 0.1)",
          maxWidth: "90vw",
          width: "fit-content",
          border: "3px solid rgba(255, 100, 150, 0.3)",
          position: "relative",
          zIndex: 10
        }}
      >
        <motion.img 
          src={PHOTOS[0]} 
          alt="thumb"
          initial={{ scale: 0.8, rotate: -5 }}
          animate={{ 
            scale: 1, 
            rotate: 0,
            boxShadow: [
              "0 10px 30px rgba(255, 0, 80, 0.3)",
              "0 15px 40px rgba(255, 0, 80, 0.5)",
              "0 10px 30px rgba(255, 0, 80, 0.3)"
            ]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            width: "130px",
            height: "170px",
            objectFit: "cover",
            borderRadius: "18px",
            marginBottom: "18px",
            border: "3px solid rgba(255, 100, 150, 0.4)"
          }} 
        />

        <h2 style={{ 
          color: "#ff4d88", 
          fontSize: "clamp(18px, 5vw, 24px)", 
          margin: "0 0 12px 0",
          textShadow: "0 2px 10px rgba(255, 77, 136, 0.3)"
        }}>
          My dr Manje🐣😻,
        </h2>
        <h1 style={{ 
          color: "#333", 
          marginBottom: 20,
          fontSize: "clamp(22px, 6vw, 32px)",
          fontWeight: 800
        }}>
          Will you be my Valentine? 💖
        </h1>

        <div style={{ 
          display: "flex", 
          gap: 16, 
          justifyContent: "center", 
          flexWrap: "wrap" 
        }}>
          <motion.button 
            onClick={onYes}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 5px 20px rgba(255, 77, 136, 0.4)",
                "0 8px 30px rgba(255, 77, 136, 0.7)",
                "0 5px 20px rgba(255, 77, 136, 0.4)"
              ]
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              background: "linear-gradient(135deg, #ff4d88, #ff1f6f)",
              color: "white",
              border: "none",
              padding: "14px 32px",
              borderRadius: "14px",
              fontSize: "clamp(16px, 4vw, 19px)",
              cursor: "pointer",
              minWidth: "90px",
              fontWeight: 700,
              textShadow: "0 2px 5px rgba(0, 0, 0, 0.3)"
            }}
          >
            YES 💕
          </motion.button>

          <motion.button
            onMouseEnter={moveNo}
            onTouchStart={moveNo}
            animate={{ x: noPos.x, y: noPos.y }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            style={{
              background: "#d0d0d0",
              border: "none",
              padding: "14px 32px",
              borderRadius: "14px",
              fontSize: "clamp(16px, 4vw, 19px)",
              cursor: "pointer",
              minWidth: "90px",
              fontWeight: 600
            }}
          >
            NO
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};


// ================= GRID REEL PAGE =================
const ReelPage = () => {
  const isMobile = useIsMobile();

  return (
    <div style={{
      minHeight: "100vh",
      width: "100vw",
      padding: "20px",
      boxSizing: "border-box",
      background: "#f6c1cc",
      overflowY: "auto",
      position: "relative"
    }}>
      {/* Floating Hearts */}
      {Array.from({ length: 20 }).map((_, i) => <Heart key={i} delay={random(0,8)} />)}

      {/* Top Centered Message */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          position: "sticky",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          maxWidth: "500px",
          background: "rgba(255,105,140,0.22)",
          backdropFilter: "blur(12px)",
          borderRadius: "20px",
          padding: "16px",
          textAlign: "center",
          color: "white",
          fontWeight: 600,
          fontSize: "clamp(13px,3.5vw,16px)",
          lineHeight: 1.5,
          textShadow: "0 0 15px rgba(255,50,120,0.9)",
          zIndex: 10,
          marginBottom: "20px"
        }}
      >
        {YES_MESSAGE}
      </motion.div>

      {/* Photos Grid with floating animation */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: isMobile ? "12px" : "20px",
        marginBottom: "20px"
      }}>
        {PHOTOS.map((src,i) => (
          <FloatingGridItem key={i} index={i}>
            <img
              src={src}
              alt={`img-${i}`}
              style={{
                width: "100%",
                aspectRatio: "0.75",
                objectFit: "cover",
                borderRadius: "16px",
                boxShadow: "0 8px 32px rgba(255,0,80,0.3)"
              }}
            />
          </FloatingGridItem>
        ))}
      </div>

      {/* Quotes Grid with floating animation */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: isMobile ? "8px" : "16px"
      }}>
        {QUOTES.map((q,i) => (
          <FloatingGridItem key={i} index={i}>
            <div style={{
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
              padding: isMobile ? "6px 8px" : "8px 12px",
              textAlign: "center",
              color: "white",
              fontWeight: 600,
              fontSize: isMobile ? "12px" : "16px",
              borderRadius: "12px",
              textShadow: "0 0 8px rgba(255,100,150,0.9)"
            }}>
              {q}
            </div>
          </FloatingGridItem>
        ))}
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
