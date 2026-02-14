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
      fontSize: `${random(16,28)}px`,
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
  const mobileOffset = isMobile ? random(-2,2) : random(-4,4); 
  return (
    <motion.img
      src={src}
      initial={{ y: "110vh", opacity: 0 }}
      animate={{ y: "-15vh", opacity: [0,1,1,0] }}
      transition={{ duration: random(14,20), delay, repeat: Infinity, ease: "easeInOut" }}
      style={{
        position: "absolute",
        left: `${safeLeft + mobileOffset}%`,
        transform: "translateX(-50%)",
        width: isMobile ? "85px" : "140px",
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
  const mobileOffset = isMobile ? random(-1,1) : random(-3,3);
  return (
    <motion.div
      initial={{ y: "110vh", opacity: 0 }}
      animate={{ y: "-15vh", opacity: [0,1,1,0] }}
      transition={{ duration: random(12,18), delay, repeat: Infinity, ease: "easeInOut" }}
      style={{
        position: "absolute",
        left: `${safeLeft + mobileOffset}%`,
        transform: "translateX(-50%)",
        maxWidth: isMobile ? "100px" : "160px",
        padding: isMobile ? "4px 8px" : "6px 12px",
        textAlign: "center",
        color: "white",
        fontSize: isMobile ? "12px" : "16px",
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
  const moveNo = () => setNoPos({ x: random(-120,120), y: random(-60,60) });

  return (
    <div style={{ height:"100vh", width:"100vw", display:"flex", alignItems:"center", justifyContent:"center", background:"#f6c1cc", position:"relative", overflow:"hidden"}}>
      {Array.from({length:12}).map((_,i)=><Heart key={i} delay={i*0.6} />)}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale:1, opacity:1 }}
        transition={{ duration: 0.8 }}
        style={{ background:"#fff0f4", padding:"30px 24px", borderRadius:"24px", textAlign:"center", boxShadow:"0 20px 60px rgba(0,0,0,0.15)", maxWidth:"90vw", width:"fit-content" }}
      >
        <img src={PHOTOS[0]} alt="thumb" style={{width:"120px", height:"160px", objectFit:"cover", borderRadius:"16px", marginBottom:"16px"}} />
        <h2 style={{ color:"#ff4d88", fontSize:"clamp(18px,5vw,24px)", margin:"0 0 12px 0"}}>My dr Manje🐣😻,</h2>
        <h1 style={{ color:"#333", marginBottom:16, fontSize:"clamp(22px,6vw,32px)" }}>Will you be my Valentine? 💖</h1>
        <div style={{ display:"flex", gap:16, justifyContent:"center", flexWrap:"wrap" }}>
          <button onClick={onYes} style={{ background:"#ff4d88", color:"white", border:"none", padding:"12px 28px", borderRadius:"12px", fontSize:"clamp(16px,4vw,18px)", cursor:"pointer", minWidth:"80px"}}>YES</button>
          <motion.button onMouseEnter={moveNo} animate={{x:noPos.x, y:noPos.y}} transition={{type:"spring", stiffness:200}} style={{background:"#d0d0d0", border:"none", padding:"12px 28px", borderRadius:"12px", fontSize:"clamp(16px,4vw,18px)", cursor:"pointer", minWidth:"80px"}}>NO</motion.button>
        </div>
      </motion.div>
    </div>
  );
};

// ================= REEL PAGE =================
const ReelPage = () => {
  const isMobile = useIsMobile();
  const photoLanes = [15,50,85];
  const quoteLanes = [15,50,85];

  const [hearts, setHearts] = useState([]);
  useEffect(()=>{
    setHearts(Array.from({length:20}).map((_,i)=>({id:i,delay:random(0,8)})))
  },[]);

  return (
    <div style={{ height:"100vh", width:"100vw", overflow:"hidden", position:"relative", background:"#f6c1cc" }}>
      
      {/* Hearts */}
      <div style={{position:"absolute", inset:0, zIndex:1}}>{hearts.map(h=><Heart key={h.id} delay={h.delay}/>)}</div>

      {/* Floating Photos */}
      <div style={{position:"absolute", inset:0, zIndex:2}}>
        {PHOTOS.map((p,i)=><FloatingPhoto key={i} src={p} laneIndex={i%photoLanes.length} delay={i*1.5} lanes={photoLanes} isMobile={isMobile} />)}
      </div>

      {/* Floating Quotes */}
      <div style={{position:"absolute", inset:0, zIndex:3}}>
        {QUOTES.map((q,i)=><FloatingQuote key={i} text={q} laneIndex={i%quoteLanes.length} delay={i*2} lanes={quoteLanes} isMobile={isMobile} />)}
      </div>

      {/* Top-center message */}
      <motion.div
        initial={{opacity:0, y:-30}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.8, delay:0.5}}
        style={{position:"absolute", top:"20px", left:"50%", transform:"translateX(-50%)", maxWidth:"500px", background:"rgba(255,105,140,0.22)", backdropFilter:"blur(12px)", borderRadius:"20px", padding:"20px", textAlign:"center", color:"white", fontWeight:600, fontSize:isMobile?"12px":"14px", lineHeight:1.5, textShadow:"0 0 15px rgba(255,50,120,0.9)", zIndex:10}}
      >
        {YES_MESSAGE}
      </motion.div>

    </div>
  );
};

// ================= MAIN =================
export default function ReelCinematicValentine() {
  const [accepted, setAccepted] = useState(false);
  const audioRef = useRef(null);
  useEffect(()=>{
    if(accepted && audioRef.current) audioRef.current.play().catch(()=>{});
  },[accepted]);
  return (
    <>
      <audio ref={audioRef} src={bgMusic} loop />
      {accepted ? <ReelPage /> : <FrontPage onYes={()=>setAccepted(true)} />}
    </>
  );
}
