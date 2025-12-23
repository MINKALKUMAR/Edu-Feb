
import React, { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Prof. Jayanand",
    role: "Pro Vice Chancellor, Shobhit Deemed University",
    text:
      "NEP 2020 is transforming Indian education, with Artificial Intelligence playing a key role in achieving global standards and future readiness.",
    videoUrl: "https://video.edutomorrow.in/Jayanand.mp4",
  },
  {
    name: "Prof. (Dr.) Manpreet Singh Manna",
    role: "Vice-Chancellor, Chandigarh University",
    text:
      "The future of education lies in technology-driven learning, quality enhancement, and global collaboration.",
    videoUrl: "https://video.edutomorrow.in/Manpreet.mp4",
  },
  {
    name: "Ms. Anu Kaushal",
    role: "Director – Training & Communication, Lamboran Tech Skills University",
    text:
      "AI is embraced not just as a subject but as a tool and a lifestyle, combined with pedagogy, andragogy, and heutagogy.",
    videoUrl: "https://video.edutomorrow.in/Anu.mp4",
  },
];

export default function IndustryTestimonials() {
  const [current, setCurrent] = useState(0);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);

  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const pauseTimer = useRef(null);

  /* Reset state on slide change */
  useEffect(() => {
    setMuted(true);
    setPlaying(false);
  }, [current]);

  /* ▶️ Autoplay ONLY when visible (smooth & debounced) */
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          clearTimeout(pauseTimer.current);

          if (video.paused) {
            video.play().then(() => setPlaying(true)).catch(() => {});
          }
        } else {
          // debounce pause to avoid flicker
          pauseTimer.current = setTimeout(() => {
            video.pause();
            setPlaying(false);
          }, 400);
        }
      },
      { threshold: 0.75 } // less sensitive = smoother
    );

    observer.observe(sectionRef.current);

    return () => {
      clearTimeout(pauseTimer.current);
      observer.disconnect();
    };
  }, [current]);

  const next = () =>
    setCurrent((p) => (p + 1) % testimonials.length);

  const prev = () =>
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

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
            key={t.videoUrl}
            ref={videoRef}
            playsInline
            muted
            preload="auto"   // 🔥 IMPORTANT CHANGE
          >
            <source src={t.videoUrl} type="video/mp4" />
          </video>

          <button className="video-btn center" onClick={togglePlay}>
            {playing ? "❚❚" : "▶"}
          </button>

          <button className="video-btn sound" onClick={toggleMute}>
            {muted ? "🔇" : "🔊"}
          </button>
        </div>

        <div className="text-box">
          <p style={{color:"#cccc"}}>"{t.text}"</p>
          <h4>{t.name}</h4>
          <span>{t.role}</span>
        </div>
      </div>

      {/* CSS UNCHANGED */}
      <style>{`
        .it-section {
          position: relative;
          min-height: 100vh;
          padding: 70px 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: var(--bg-main);
          overflow: hidden;
        }

        .circles-bg { position: absolute; inset: -20%; z-index: 0; }
        .circle { position: absolute; border-radius: 50%; border: 14px solid rgba(225,6,0,0.25); }
        .c1 { width: 140%; height: 140%; animation: spinCW 60s linear infinite; }
        .c2 { width: 110%; height: 110%; animation: spinCCW 90s linear infinite; }
        .c3 { width: 80%; height: 80%; animation: spinCW 45s linear infinite; }
        .c4 { width: 50%; height: 50%; animation: spinCCW 30s linear infinite; }

        @keyframes spinCW { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spinCCW { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }

        .it-heading { font-size: clamp(1.8rem, 4vw, 2.6rem); margin-bottom: 36px; z-index: 2; color: var(--color-white); }

        .it-card { position: relative; z-index: 2; max-width: 900px; background: var(--bg-gradient); border-radius: 18px; padding: 18px; }

        .video-wrap { position: relative; aspect-ratio: 16/9; border-radius: 14px; overflow: hidden; margin-bottom: 16px; }
        video { width: 100%; height: 100%; object-fit: cover; }

        .video-btn { position: absolute; background: rgba(0,0,0,0.6); color: #fff; border: none; border-radius: 50%; width: 44px; height: 44px; cursor: pointer; z-index: 5; }
        .video-btn.center { top: 50%; left: 50%; transform: translate(-50%, -50%); }
        .video-btn.sound { bottom: 12px; right: 12px; }

        .text-box { text-align: center; }
        .text-box span { color: var(--color-red); }

        .arrow { position: absolute; top: 50%; transform: translateY(-50%); z-index: 6; width: 42px; height: 42px; border-radius: 50%; background: var(--color-red); color: #fff; border: none; cursor: pointer; }
        .arrow.left { left: -10px; }
        .arrow.right { right: -10px; }
      `}</style>
    </section>
  );
}

