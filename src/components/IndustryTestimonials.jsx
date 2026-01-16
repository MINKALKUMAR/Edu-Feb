import React, { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Prof. Jayanand",
    role: "Pro Vice Chancellor, Shobhit Deemed University",
    text:
      "NEP 2020 is transforming Indian education, with Artificial Intelligence playing a key role in achieving global standards and future readiness.",
    video: {
      low: "https://video.edutomorrow.in/Jayanand_360.mp4",
      high: "https://video.edutomorrow.in/Jayanand.mp4",
    },
  },
  {
    name: "Prof. (Dr.) Manpreet Singh Manna",
    role: "Vice-Chancellor, Chandigarh University",
    text:
      "The future of education lies in technology-driven learning, quality enhancement, and global collaboration.",
    video: {
      low: "https://video.edutomorrow.in/Manpreet_360.mp4",
      high: "https://video.edutomorrow.in/Manpreet.mp4",
    },
  },
  {
    name: "Ms. Anu Kaushal",
    role: "Director – Training & Communication, Lamboran Tech Skills University",
    text:
      "AI is embraced not just as a subject but as a tool and a lifestyle, combined with pedagogy, andragogy, and heutagogy.",
    video: {
      low: "https://video.edutomorrow.in/Anu_360.mp4",
      high: "https://video.edutomorrow.in/Anu.mp4",
    },
  },
];

export default function IndustryTestimonials() {
  const [current, setCurrent] = useState(0);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [src, setSrc] = useState("");

  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  /* ================= NETWORK AWARE VIDEO ================= */
  useEffect(() => {
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const slow =
      conn?.effectiveType?.includes("2g") ||
      conn?.effectiveType?.includes("3g") ||
      conn?.downlink < 2;

    setSrc(slow ? testimonials[current].video.low : testimonials[current].video.high);
  }, [current]);

  /* ================= VISIBILITY AUTOPLAY ================= */
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !sectionRef.current) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          video.play().then(() => setPlaying(true)).catch(() => {});
        } else {
          video.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.6 }
    );

    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, [src]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.paused ? v.play() : v.pause();
    setPlaying(!v.paused);
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="industrytestimonials" className="it-section" ref={sectionRef}>
      <div className="circles-bg">
        <span className="circle c1" />
        <span className="circle c2" />
        <span className="circle c3" />
        <span className="circle c4" />
      </div>

      <h2 className="it-heading">Industry Testimonials</h2>

      <div className="it-card">
        <button className="arrow left" onClick={prev}>❮</button>
        <button className="arrow right" onClick={next}>❯</button>

        <div className="video-wrap">
          <video
            ref={videoRef}
            key={src}
            src={src}
            muted
            playsInline
            preload="metadata"
            style={{ willChange: "transform" }}
          />

          <button className="video-btn center" onClick={togglePlay}>
            {playing ? "❚❚" : "▶"}
          </button>

          <button className="video-btn sound" onClick={toggleMute}>
            {muted ? "🔇" : "🔊"}
          </button>
        </div>

        <div className="text-box">
          <p style={{ color: "#ccc" }}>"{t.text}"</p>
          <h4>{t.name}</h4>
          <span>{t.role}</span>
        </div>
      </div>

      <style>{`
        .it-section {
          min-height: auto;
          padding: 70px 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: var(--bg-main);
          overflow: hidden;
          position: relative;
        }

        .circles-bg { position:absolute; inset:-20%; }
        .circle { border:14px solid rgba(225,6,0,.25); border-radius:50%; position:absolute; }
        .c1{width:140%;height:140%;animation:spinCW 60s linear infinite;}
        .c2{width:110%;height:110%;animation:spinCCW 90s linear infinite;}
        .c3{width:80%;height:80%;animation:spinCW 45s linear infinite;}
        .c4{width:50%;height:50%;animation:spinCCW 30s linear infinite;}

        @keyframes spinCW{to{transform:rotate(360deg)}}
        @keyframes spinCCW{to{transform:rotate(-360deg)}}

        .it-heading{color:#fff;margin-bottom:36px;z-index:2}

        .it-card{max-width:900px;background:var(--bg-gradient);border-radius:18px;padding:18px;position:relative;z-index:2}

        .video-wrap{aspect-ratio:16/9;border-radius:14px;overflow:hidden;position:relative;margin-bottom:16px}
        video{width:100%;height:100%;object-fit:cover}

        .video-btn{position:absolute;width:44px;height:44px;border-radius:50%;background:rgba(0,0,0,.6);color:#fff;border:none;cursor:pointer}
        .video-btn.center{top:50%;left:50%;transform:translate(-50%,-50%)}
        .video-btn.sound{bottom:12px;right:12px}

        .arrow{position:absolute;top:50%;transform:translateY(-50%);background:var(--color-red);color:#fff;border:none;border-radius:50%;width:42px;height:42px;cursor:pointer;z-index:6}
        .arrow.left{left:-10px}
        .arrow.right{right:-10px}

        .text-box{text-align:center}
        .text-box span{color:var(--color-red)}
      `}</style>
    </section>
  );
}
