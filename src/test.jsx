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
  "You are my heart's favorite person",
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
// Increased gaps for mobile to prevent overlap
const DESKTOP_LANES = [10, 30, 50, 70, 90];
const MOBILE_LANES_PHOTO = [15, 45, 75]; // Better spacing with more gap
const MOBILE_LANES_TEXT = [5, 50, 95];   // Text lanes with safe margins

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
      fontSize: `${random(16,28)}px`, // Slightly smaller hearts for mobile safety
      pointerEvents: "none",
      zIndex: 1
    }}
  >
    ❤️
  </motion.div>
);

// ================= FLOATING PHOTO =================
const FloatingPhoto = ({ src, laneIndex, delay, lanes, isMobile }) => {
  const safeLeft = lanes[laneIndex];
  const mobileOffset = isMobile ? random(-2,2) : random(-4,4); // Reduced random offset for mobile
  
  return (
    <motion.img
      src={src}
      initial={{ y: "110vh", opacity: 0 }}
      animate={{ 
        y: "-15vh", // Slightly less travel to stay in viewport
        opacity: [0,1,1,0] 
      }}
      transition={{ 
        duration: random(14,20), // Slightly slower for smoother mobile
        delay, 
        repeat: Infinity, 
        ease: "easeInOut" // Smoother easing
      }}
      style={{
        position: "absolute",
        left: `${safeLeft + mobileOffset}%`,
        transform: "translateX(-50%)",
        width: isMobile ? "85px" : "140px", // Smaller images for mobile
        height: isMobile ? "120px" : "175px",
        maxWidth: isMobile ? "90vw" : "none",
        objectFit: "cover",
        borderRadius: "16px",
        boxShadow: "0 8px 32px rgba(255,0,80,0.3)",
        pointerEvents: "none",
        zIndex: 3
      }}
    />
  );
};

// ================= FLOATING QUOTE =================
const FloatingQuote = ({ text, laneIndex, delay, lanes, isMobile }) => {
  const safeLeft = lanes[laneIndex];
  const mobileOffset = isMobile ? random(-1,1) : random(-3,3); // Minimal offset for mobile
  
  return (
    <motion.div
      initial={{ y: "110vh", opacity: 0 }}
      animate={{ 
        y: "-15vh", // Same travel distance as photos
        opacity: [0,1,1,0] 
      }}
      transition={{ 
        duration: random(12,18), // Synchronized timing range
        delay, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      style={{
        position: "absolute",
        left: `${safeLeft + mobileOffset}%`,
        transform: "translateX(-50%)",
        maxWidth: isMobile ? "100px" : "160px", // Much smaller for mobile
        padding: isMobile ? "4px 8px" : "6px 12px",
        textAlign: "center",
        color: "white",
        fontSize: isMobile ? "12px" : "16px", // Smaller font for mobile
        fontWeight: 600,
        lineHeight: 1.3,
        textShadow: "0 0 12px rgba(255,100,150,0.9)",
        pointerEvents: "none",
        zIndex: 4,
        background: isMobile ? "rgba(255,255,255,0.15)" : "transparent",
        borderRadius: "8px",
        backdropFilter: "blur(8px)"
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

// ================= REEL PAGE =================
const ReelPage = () => {
  const [hearts, setHearts] = useState([]);
  const isMobile = useIsMobile();

  const photoLanes = isMobile ? MOBILE_LANES_PHOTO : DESKTOP_LANES;
  const textLanes = isMobile ? MOBILE_LANES_TEXT : DESKTOP_LANES;

  useEffect(() => {
    setHearts(Array.from({ length: 20 }).map((_, i) => ({ // Reduced for mobile
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
      {/* Hearts layer */}
      <div style={{ position: "absolute", inset: 0, zIndex: 2 }}>
        {hearts.map(h => <Heart key={h.id} delay={h.delay} />)}
      </div>

      {/* Photos layer */}
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

      {/* Quotes layer */}
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

      {/* Message overlay - mobile friendly */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        style={{
          position: "absolute",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "92%",
          maxWidth: "500px",
          maxHeight: "60vh",
          overflow: "auto",
          textAlign: "center",
          color: "white",
          fontWeight: "600",
          fontSize: "clamp(13px, 3.5vw, 18px)",
          lineHeight: 1.5,
          textShadow: "0 0 15px rgba(255,50,120,0.9)",
          zIndex: 10,
          padding: "20px 20px",
          borderRadius: "20px",
          background: "rgba(255, 105, 140, 0.22)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.2)"
        }}
      >
        <div>{YES_MESSAGE}</div>
      </motion.div>
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