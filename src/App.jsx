import React, { useEffect, useState, useRef, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

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
Love you forever dii my dr alagu pondatiiiiii 💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋
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
const MOBILE_LANES_PHOTO = [15, 45, 75];
const MOBILE_LANES_TEXT = [5, 50, 95];

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : true
  );

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return isMobile;
};

// ================= HEART =================
const Heart = ({ delay, reduceMotion, isMobile }) => (
  <motion.div
    initial={{ y: "110vh", opacity: 0 }}
    animate={
      reduceMotion
        ? { opacity: [0, 0.8, 0] }
        : { y: "-10vh", opacity: [0, 1, 1, 0] }
    }
    transition={{
      duration: reduceMotion ? random(4, 7) : random(7, 12),
      delay,
      repeat: Infinity,
      ease: "linear"
    }}
    style={{
      position: "absolute",
      left: `${random(0, 100)}%`,
      fontSize: `${isMobile ? random(14, 22) : random(16, 30)}px`,
      pointerEvents: "none",
      zIndex: 1,
      filter: "drop-shadow(0 8px 14px rgba(255,0,80,0.25))"
    }}
  >
    ❤️
  </motion.div>
);

// ================= FLOATING PHOTO (DESKTOP) =================
const FloatingPhoto = ({ src, laneIndex, delay, lanes, isMobile, reduceMotion }) => {
  const safeLeft = lanes[laneIndex];
  const mobileOffset = isMobile ? random(-2, 2) : random(-4, 4);

  return (
    <motion.img
      src={src}
      initial={{ y: "110vh", opacity: 0 }}
      animate={
        reduceMotion
          ? { opacity: [0, 1, 0] }
          : { y: "-15vh", opacity: [0, 1, 1, 0] }
      }
      transition={{
        duration: reduceMotion ? random(8, 11) : random(14, 20),
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{
        position: "absolute",
        left: `${safeLeft + mobileOffset}%`,
        transform: "translateX(-50%)",
        width: isMobile ? "85px" : "140px",
        height: isMobile ? "120px" : "175px",
        objectFit: "cover",
        borderRadius: "16px",
        boxShadow: "0 10px 34px rgba(255,0,80,0.28)",
        pointerEvents: "none",
        zIndex: 3
      }}
    />
  );
};

// ================= FLOATING QUOTE (DESKTOP) =================
const FloatingQuote = ({ text, laneIndex, delay, lanes, isMobile, reduceMotion }) => {
  const safeLeft = lanes[laneIndex];
  const mobileOffset = isMobile ? random(-1, 1) : random(-3, 3);

  return (
    <motion.div
      initial={{ y: "110vh", opacity: 0 }}
      animate={
        reduceMotion
          ? { opacity: [0, 1, 0] }
          : { y: "-15vh", opacity: [0, 1, 1, 0] }
      }
      transition={{
        duration: reduceMotion ? random(7, 10) : random(12, 18),
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{
        position: "absolute",
        left: `${safeLeft + mobileOffset}%`,
        transform: "translateX(-50%)",
        maxWidth: isMobile ? "110px" : "170px",
        padding: isMobile ? "6px 10px" : "8px 14px",
        textAlign: "center",
        color: "white",
        fontSize: isMobile ? "12px" : "16px",
        fontWeight: 700,
        lineHeight: 1.25,
        textShadow: "0 0 14px rgba(255,100,150,0.9)",
        pointerEvents: "none",
        zIndex: 4,
        background: "rgba(255,255,255,0.14)",
        borderRadius: "10px",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.18)"
      }}
    >
      {text}
    </motion.div>
  );
};

// ================= GRID (MOBILE) PHOTO CARD =================
const GridPhotoCard = ({ src, i, reduceMotion }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: reduceMotion ? 0.15 : 0.45,
        delay: reduceMotion ? 0 : Math.min(i * 0.03, 0.6),
        ease: "easeOut"
      }}
      style={{
        width: "100%",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(255,0,80,0.20)",
        border: "1px solid rgba(255,255,255,0.18)",
        background: "rgba(255,255,255,0.08)"
      }}
    >
      <motion.img
        src={src}
        alt={`photo-${i + 1}`}
        initial={false}
        animate={reduceMotion ? {} : { y: [0, -2, 0] }}
        transition={reduceMotion ? {} : { duration: random(3.2, 4.8), repeat: Infinity, ease: "easeInOut" }}
        style={{
          display: "block",
          width: "100%",
          aspectRatio: "3 / 4",
          objectFit: "cover"
        }}
      />
    </motion.div>
  );
};

// ================= GRID (MOBILE) QUOTE CARD =================
const GridQuoteCard = ({ text, i, reduceMotion }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: reduceMotion ? 0.15 : 0.4,
        delay: reduceMotion ? 0 : Math.min(i * 0.02, 0.6),
        ease: "easeOut"
      }}
      style={{
        padding: "12px 12px",
        borderRadius: 14,
        background: "rgba(255, 105, 140, 0.22)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.18)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
        color: "white",
        fontWeight: 800,
        fontSize: "13px",
        lineHeight: 1.25,
        textAlign: "center",
        textShadow: "0 0 12px rgba(255,50,120,0.8)"
      }}
    >
      <motion.div
        initial={false}
        animate={reduceMotion ? {} : { scale: [1, 1.02, 1] }}
        transition={reduceMotion ? {} : { duration: random(2.8, 4.2), repeat: Infinity, ease: "easeInOut" }}
      >
        {text}
      </motion.div>
    </motion.div>
  );
};

// ================= FRONT PAGE =================
const FrontPage = ({ onYes }) => {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotion();

  const moveNo = () => {
    // smaller movement on mobile to avoid going off screen / accidental taps
    const x = isMobile ? random(-50, 50) : random(-100, 100);
    const y = isMobile ? random(-25, 25) : random(-50, 50);
    setNoPos({ x, y });
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
      {Array.from({ length: isMobile ? 10 : 15 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: "110vh", opacity: 0 }}
          animate={
            reduceMotion
              ? { opacity: [0, 0.9, 0] }
              : { y: "-10vh", opacity: [0, 1, 1, 0], rotate: [0, 360] }
          }
          transition={{
            duration: reduceMotion ? random(4.5, 7) : random(7, 13),
            delay: i * 0.45,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            position: "absolute",
            left: `${random(5, 95)}%`,
            fontSize: `${random(18, 30)}px`,
            zIndex: 1,
            filter: "drop-shadow(0 10px 16px rgba(255,0,80,0.2))"
          }}
        >
          ❤️
        </motion.div>
      ))}

      <motion.div
        initial={{ scale: 0.7, opacity: 0, y: 18 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.9, type: "spring", stiffness: 120, damping: 16 }}
        style={{
          background: "linear-gradient(135deg, #fff0f4 0%, #ffe8f0 100%)",
          padding: isMobile ? "26px 18px" : "32px 26px",
          borderRadius: "28px",
          textAlign: "center",
          boxShadow: "0 25px 70px rgba(255, 0, 80, 0.25), 0 10px 30px rgba(0, 0, 0, 0.1)",
          maxWidth: "92vw",
          width: "fit-content",
          border: "3px solid rgba(255, 100, 150, 0.3)",
          position: "relative",
          zIndex: 10
        }}
      >
        <motion.img
          src={PHOTOS[0]}
          alt="thumb"
          initial={{ scale: 0.86, rotate: -4 }}
          animate={{
            scale: 1,
            rotate: 0,
            boxShadow: [
              "0 10px 30px rgba(255, 0, 80, 0.28)",
              "0 15px 40px rgba(255, 0, 80, 0.48)",
              "0 10px 30px rgba(255, 0, 80, 0.28)"
            ]
          }}
          transition={{
            duration: reduceMotion ? 0.2 : 2,
            repeat: reduceMotion ? 0 : Infinity,
            repeatType: "reverse"
          }}
          style={{
            width: isMobile ? "115px" : "130px",
            height: isMobile ? "150px" : "170px",
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
          gap: 14,
          justifyContent: "center",
          flexWrap: "wrap"
        }}>
          <motion.button
            onClick={onYes}
            whileHover={reduceMotion ? {} : { scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 5px 20px rgba(255, 77, 136, 0.4)",
                "0 8px 30px rgba(255, 77, 136, 0.7)",
                "0 5px 20px rgba(255, 77, 136, 0.4)"
              ]
            }}
            transition={{
              duration: reduceMotion ? 0.2 : 1.5,
              repeat: reduceMotion ? 0 : Infinity,
              repeatType: "reverse"
            }}
            style={{
              background: "linear-gradient(135deg, #ff4d88, #ff1f6f)",
              color: "white",
              border: "none",
              padding: isMobile ? "13px 28px" : "14px 32px",
              borderRadius: "14px",
              fontSize: "clamp(16px, 4vw, 19px)",
              cursor: "pointer",
              minWidth: "90px",
              fontWeight: 800,
              textShadow: "0 2px 5px rgba(0, 0, 0, 0.3)"
            }}
          >
            YES 💕
          </motion.button>

          <motion.button
            onMouseEnter={moveNo}
            onTouchStart={moveNo}
            animate={{ x: noPos.x, y: noPos.y }}
            transition={{ type: "spring", stiffness: 320, damping: 18 }}
            style={{
              background: "#d0d0d0",
              border: "none",
              padding: isMobile ? "13px 28px" : "14px 32px",
              borderRadius: "14px",
              fontSize: "clamp(16px, 4vw, 19px)",
              cursor: "pointer",
              minWidth: "90px",
              fontWeight: 700
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
  const reduceMotion = useReducedMotion();

  const photoLanes = isMobile ? MOBILE_LANES_PHOTO : DESKTOP_LANES;
  const textLanes = isMobile ? MOBILE_LANES_TEXT : DESKTOP_LANES;

  useEffect(() => {
    const count = isMobile ? 14 : 22;
    setHearts(Array.from({ length: count }).map((_, i) => ({
      id: i,
      delay: random(0, 7)
    })));
  }, [isMobile]);

  const pairedQuotes = useMemo(() => {
    // keep ALL quotes; we’ll show them in grid (2 columns) as-is
    return QUOTES;
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
        {hearts.map(h => (
          <Heart
            key={h.id}
            delay={h.delay}
            reduceMotion={reduceMotion}
            isMobile={isMobile}
          />
        ))}
      </div>

      {/* ================= DESKTOP: floating cinematic lanes ================= */}
      {!isMobile && (
        <>
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
                reduceMotion={reduceMotion}
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
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </>
      )}

      {/* ================= MOBILE: grid layout (no overlap) ================= */}
      {isMobile && (
        <div style={{
          position: "absolute",
          inset: 0,
          zIndex: 5,
          padding: "14px 12px 18px",
          overflowY: "auto",
          WebkitOverflowScrolling: "touch"
        }}>
          {/* Spacer so overlay message doesn’t block grid */}
          <div style={{ height: "210px" }} />

          {/* Photos Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: 10,
            alignItems: "stretch",
            marginBottom: 14
          }}>
            {PHOTOS.map((src, i) => (
              <GridPhotoCard key={`gp-${i}`} src={src} i={i} reduceMotion={reduceMotion} />
            ))}
          </div>

          {/* Quotes Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: 10,
            alignItems: "stretch",
            paddingBottom: 20
          }}>
            {pairedQuotes.map((q, i) => (
              <GridQuoteCard key={`gq-${i}`} text={q} i={i} reduceMotion={reduceMotion} />
            ))}
          </div>
        </div>
      )}

      {/* Message overlay (kept, but safer on mobile) */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.6, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: 14,
          left: "50%",
          transform: "translateX(-50%)",
          width: "94%",
          maxWidth: "560px",
          maxHeight: isMobile ? "190px" : "60vh",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          textAlign: "center",
          color: "white",
          fontWeight: 700,
          fontSize: "clamp(13px, 3.6vw, 18px)",
          lineHeight: 1.5,
          textShadow: "0 0 15px rgba(255,50,120,0.9)",
          zIndex: 10,
          padding: isMobile ? "14px 14px" : "20px 20px",
          borderRadius: 20,
          background: "rgba(255, 105, 140, 0.24)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.18)",
          border: "1px solid rgba(255,255,255,0.18)"
        }}
      >
        <div style={{ whiteSpace: "pre-wrap" }}>{YES_MESSAGE}</div>
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
