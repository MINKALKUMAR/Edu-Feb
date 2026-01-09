import { useEffect, useState, lazy, Suspense } from "react";
import logo from "../assets/MainLogo.png";

/* ================== LAZY IMPORTS ================== */
const About = lazy(() => import("./About"));
const OurPartners = lazy(() => import("./OurPartners"));
const PastGlimpses = lazy(() => import("./PastGlimpses"));
const Stats = lazy(() => import("./Stats"));
const Speakers = lazy(() => import("./Speakers"));
const IndustryTestimonials = lazy(() => import("./IndustryTestimonials"));
const Contact = lazy(() => import("./Contact"));
const Venue = lazy(() => import("./Venue"));
const DiscussionPoints = lazy(() => import("./DiscussionPoints"));

function Home() {
  /* ================== HERO STATES ================== */
  const [showContent, setShowContent] = useState(false);
  const [hoverBtn1, setHoverBtn1] = useState(false);
  const [hoverBtn2, setHoverBtn2] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  /* ================== HERO TIMER ================== */
  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 800);
    return () => clearTimeout(timer);
  }, []);

  /* ================== RESPONSIVE CHECK ================== */
  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  /* ================== GLOW BUTTON ================== */
  const glowButton = (hover) => ({
    padding: "14px 30px",
    background: "var(--bg-gradient)",
    color: "var(--color-white)",
    borderRadius: "30px",
    border: "2px solid var(--color-red)",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: "1rem",
    animation: "borderFlow 3s infinite",
    transition: "0.3s ease",
    boxShadow: hover
      ? "0 0 18px var(--color-red), 0 0 28px rgba(225,6,0,0.6)"
      : "0 0 8px rgba(225,6,0,0.5)",
    transform: hover ? "translateY(-3px)" : "translateY(0)",
    textDecoration: "none",
    minWidth: isMobile ? "220px" : "auto",
    textAlign: "center",
  });

  /* ================== STYLES ================== */
  const styles = {
    hero: {
      height: "100vh",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      background: `
        linear-gradient(90deg, rgba(225,6,0,0.35) 1px, transparent 1px),
        linear-gradient(0deg, rgba(225,6,0,0.35) 1px, transparent 1px),
        radial-gradient(circle at center, rgba(225,6,0,0.25), transparent 60%),
        #000000
      `,
      backgroundSize: "40px 40px",
      overflow: "hidden",
      padding: isMobile ? "40px 16px" : "0",
    },

    content: {
      textAlign: "center",
      color: "var(--text-primary)",
      opacity: showContent ? 1 : 0,
      transform: showContent ? "translateY(0)" : "translateY(30px)",
      transition: "opacity 1.8s ease, transform 1.8s ease",
      padding: "20px",
      maxWidth: "900px",
      zIndex: 2,
    },

    logo: {
      width: isMobile ? "260px" : "500px",
      maxWidth: "90%",
      marginBottom: isMobile ? "14px" : "20px",
    },

    title: {
      // fontSize: "clamp(2rem, 5vw, 3.4rem)",
      fontSize: "clamp(1.6rem, 4vw, 2.6rem)",
      fontWeight: 800,
      marginBottom: "12px",
      lineHeight: 1.2,
    },

    subtitle: {
      fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
      marginBottom: isMobile ? "26px" : "36px",
      maxWidth: "720px",
      marginInline: "auto",
      lineHeight: 1.5,
    },

    buttonWrap: {
      display: "flex",
      gap: "24px",
      flexWrap: "wrap",
      justifyContent: "center",
    },
  };

  return (
    <>
      <style>{`
        @keyframes borderFlow {
          0% { box-shadow: 0 0 6px rgba(225,6,0,0.4); }
          50% { box-shadow: 0 0 14px rgba(225,6,0,0.9); }
          100% { box-shadow: 0 0 6px rgba(225,6,0,0.4); }
        }
      `}</style>

      {/* ================= HERO ================= */}
      <section id="home" style={styles.hero}>
        <div style={styles.content}>
          <img
            src={logo}
            alt="Education Tomorrow Logo"
            style={styles.logo}
            loading="lazy"
          />

          <h1 style={styles.title}>Education 4.0: Learning for a New Era of AI & Innovation</h1>

          <h2 style={styles.subtitle}>
            07th February 2026 • Hotel Park Plaza •Zirakpur Chandigarh
          </h2>

          <div style={styles.buttonWrap}>
            <a
              href="/delegate-registration"
              style={glowButton(hoverBtn1)}
              onMouseEnter={() => setHoverBtn1(true)}
              onMouseLeave={() => setHoverBtn1(false)}
            >
              Delegate Registration
            </a>

            <a
              href="/sponsorship-registration"
              style={glowButton(hoverBtn2)}
              onMouseEnter={() => setHoverBtn2(true)}
              onMouseLeave={() => setHoverBtn2(false)}
            >
              Sponsorship Query
            </a>

          </div>
        </div>
      </section>

      {/* ================= SECTIONS ================= */}
      <Suspense fallback={<div style={{ height: "100vh" }} />}>
        <About />
        <Stats />
        <OurPartners />
        <Speakers />
        <DiscussionPoints />
        <PastGlimpses />
        <IndustryTestimonials />
        <Venue />
        <Contact />
      </Suspense>
    </>
  );
}

export default Home;

