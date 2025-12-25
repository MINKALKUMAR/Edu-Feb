import React, { useEffect, useRef, useState } from "react";

/* ================= DATA ================= */

const discussionPoints = [
  { title: "EdTech Innovation", description: "Integrating IoT in Smart Campuses and Incorporating Digital Twins in Higher Education" },
  { title: "Digital Transformation", description: "Role of AI, VR & AR in Harnessing Transformative Learning in Higher Education" },
  { title: "Inclusive Education", description: "Role of evolving Online Learning Platforms in embracing Inclusivity & Personalized Learning Paths" },
  { title: "Cybersecurity in Higher Education", description: "Securing Sensitive Data, Ensuring Safety, and Examining Ethical Considerations of New Technologies" },
  { title: "Immersive Technologies", description: "Enhancing Learning with AI, AR, and VR in Classrooms" },
  { title: "Entrepreneurial Mindsets", description: "Role of Technology and Blockchain in Fostering Innovation and Creativity" },
  { title: "Digital Literacy", description: "Navigating the Digital Age in Education" },
  { title: "Future of Work", description: "Career Evolution, Digital Credentials and Skill Enhancement for a Future-Ready Workforce" },
];

const whyAttend = [
  "Gain insights into future-ready skills",
  "Bridge the gap between education and industry",
  "Network with national & global leaders",
  "Explore AI, AR, VR & digital credentials",
  "Understand employability & workforce trends",
];

const whoShouldAttend = [
  "Education Leaders & Policymakers",
  "Corporate Leaders & CXOs",
  "HR & L&D Professionals",
  "Training Partners & EdTech Companies",
  "Universities & Institutions",
];

/* ===== IMPORT PARTNERS ===== */
import Fintrex from "../assets/partners/Fintrex.png";
import Educore from "../assets/partners/Educore.png";
import WULogoWhite from "../assets/partners/WULogoWhite.png";
import LINGAYA from "../assets/partners/LINGAYA.png";
import EducationFutureOne from "../assets/partners/Education_Future_One.png";
import ICTAcademy from "../assets/partners/ictacademy.png";
import KHASRAPAT from "../assets/partners/KHASRAPAT.png";

/* ===== IMPORT SPEAKERS ===== */
import Anshu from "../assets/speakers/Anshu.jpeg";
import Parvinder from "../assets/speakers/Parvinder.jpeg";
import Picheswar from "../assets/speakers/Picheswar.jpeg";
import Manoj from "../assets/speakers/Manoj.jpeg";
import Manpreet from "../assets/speakers/Manpreet.jpeg";
import Sanjay from "../assets/speakers/Sanjay.jpeg";

/* ================= COMPONENT ================= */

export default function DiscussionPoints() {
  const sectionRef = useRef(null);
  const focusRef = useRef(null);

  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);
  const [visible, setVisible] = useState(false);
  const [focusVisible, setFocusVisible] = useState(false);

  /* ===== RESIZE (STABLE) ===== */
  useEffect(() => {
    let t;
    const resize = () => {
      clearTimeout(t);
      t = setTimeout(() => setIsMobile(window.innerWidth <= 768), 120);
    };
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  /* ===== MAIN SECTION VISIBILITY ===== */
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  /* ===== FOCUS SECTOR VISIBILITY (NEW, SAFE) ===== */
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => setFocusVisible(e.isIntersecting),
      { threshold: 0.2 }
    );
    if (focusRef.current) io.observe(focusRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={styles.wrapper}>
      <div style={styles.parallaxBg} />

      <style>
        {`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          /* ===== FOCUS SECTOR ===== */
          .focus-section {
            padding: 80px 20px;
          }

          .focus-header {
            text-align: center;
            margin-bottom: 50px;
          }

          .focus-header h2 {
            font-size: 48px;
            font-weight: 800;
            color: #fff;
          }

          .sector-scroll {
            overflow: hidden;
            padding: 30px 10px;
          }

          .sector-list {
            display: flex;
            gap: 20px;
            width: max-content;
            animation: scroll 25s linear infinite;
          }

          .sector-card {
            position: relative;
            border-radius: 15px;
            overflow: hidden;
            flex-shrink: 0;
            transition: transform .3s ease;
          }

          .sector-card.large { width: 280px; height: 380px; }
          .sector-card.small { width: 240px; height: 280px; }

          .sector-card:hover { transform: scale(1.05); }

          .sector-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .sector-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(174, 43, 43, 0.84), rgba(138, 30, 30, 0.47), transparent);
          }

          .sector-content {
            position: absolute;
            bottom: 20px;
            left: 20px;
            color: #fff;
            font-weight: 700;
          }

          @media (max-width: 768px) {
            .focus-header h2 { font-size: 32px; }
            .sector-card.large { width: 220px; height: 300px; }
            .sector-card.small { width: 180px; height: 240px; }
          }
        `}
      </style>

      <div style={styles.content}>
        {/* ===== SAME CONTENT AS BEFORE ===== */}

        <Section id="discussionpoints" title="Key Discussion Points">
          <div style={{ ...styles.grid, gridTemplateColumns: isMobile ? "1fr" : "repeat(2,1fr)" }}>
            {discussionPoints.map((p, i) => (
              <Strip key={i} {...p} index={i} />
            ))}
          </div>
        </Section>

        <div style={{ ...styles.twoCol, gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr" }}>
          <Section id="whyattend" title="Why Attend?">
            {whyAttend.map((t, i) => (
              <Strip key={i} title={t} index={i} />
            ))}
          </Section>

          <Section id="whoshouldattend" title="Who Should Attend?">
            {whoShouldAttend.map((t, i) => (
              <Strip key={i} title={t} index={i} />
            ))}
          </Section>
        </div>

        <Section id="pastpartners" title="Past Partners">
          <Marquee
            items={[Fintrex, Educore, WULogoWhite, LINGAYA, EducationFutureOne, ICTAcademy, KHASRAPAT]}
            type="logo"
            play={!isMobile ? visible : true}
          />

        </Section>

        <Section id="past-speakers" title="Past Speakers">
          <Marquee
            items={[Anshu, Parvinder, Picheswar, Manoj, Manpreet, Sanjay]}
            type="image"
            play={!isMobile ? visible : true}
          />

        </Section>

        {/* ===== FOCUS SECTOR (UI UNCHANGED, ONLY PAUSE LOGIC) ===== */}
        <section ref={focusRef} className="focus-section">
          <div className="focus-header">
            <h2>Focus Sector</h2>
          </div>

          <div className="sector-scroll">
            <div
              className="sector-list"
              style={{ animationPlayState: focusVisible ? "running" : "paused" }}
            >
              {[...focusSectors, ...focusSectors].map((s, i) => (
                <div key={i} className={`sector-card ${s.size}`}>
                  <img src={s.image} alt={s.title} className="sector-image" loading="lazy" />
                  <div className="sector-overlay" />
                  <div className="sector-content">{s.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

/* ================= HELPERS (UNCHANGED) ================= */

function Section({ id, title, children }) {
  return (
    <section id={id} style={styles.block}>
      <h2 style={styles.heading}>{title}</h2>
      <div style={styles.underline} />
      {children}
    </section>
  );
}

function Strip({ title, description, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.4 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const from =
    window.innerWidth <= 768
      ? styles.fromBottom
      : index % 2 === 0
        ? styles.fromLeft
        : styles.fromRight;

  return (
    <div ref={ref} style={{ ...styles.strip, ...(visible ? styles.visible : from) }}>
      <span style={styles.dot} />
      <div>
        <div style={styles.stripTitle}>{title}</div>
        {description && <div style={styles.stripDesc}>{description}</div>}
      </div>
    </div>
  );
}

function Marquee({ items, type, play }) {
  const list = [...items, ...items];
  return (
    <div style={styles.marquee}>
      <div style={{ ...styles.track, animationPlayState: play ? "running" : "paused" }}>
        {list.map((src, i) => (
          <div key={i} style={type === "logo" ? styles.logoBox : styles.imgBox}>
            <img src={src} alt="" loading="lazy" style={type === "logo" ? styles.logo : styles.image} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================= FOCUS SECTOR DATA ================= */

const focusSectors = [
  { title: "Universities", image: "/university-students-in-graduation-ceremony.png", size: "large" },
  { title: "Established Edtech", image: "/professionals-in-modern-office-discussing-educatio.png", size: "small" },
  { title: "Corporate Catering", image: "/business-professionals-in-corporate-training-sessi.png", size: "large" },
  { title: "Edutech", image: "/tech-professionals-working-on-educational-software.png", size: "small" },
  { title: "Edtech Startup", image: "/young-entrepreneurs-in-startup-office-with-laptops.png", size: "large" },
  { title: "Fashion & Design", image: "/fashion-design-students-working-on-creative-projec.png", size: "small" },
  { title: "B-School", image: "/mba-students-in-business-school-classroom.png", size: "large" },
  { title: "Established Edtech", image: "/professionals-in-modern-office-discussing-educatio.png", size: "small" },
];

/* ================= STYLES (UNCHANGED) ================= */

const styles = {
  wrapper: { position: "relative", overflow: "hidden" },
  parallaxBg: { position: "absolute", inset: 0, background: "var(--bg-gradient)", zIndex: 0, pointerEvents: "none" },
  content: { position: "relative", zIndex: 1, padding: "80px 16px", maxWidth: "1350px", margin: "0 auto" },

  block: { marginBottom: "80px" },
  heading: { textAlign: "center", fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: 800, color: "#fff" },
  underline: { width: "70px", height: "4px", margin: "14px auto 36px", background: "var(--color-red)", borderRadius: "20px" },

  grid: { display: "grid", gap: "18px" },
  twoCol: { display: "grid", gap: "36px" },

  strip: { display: "flex", gap: "14px", padding: "18px", borderRadius: "14px", background: "rgba(20,20,20,0.65)", border: "1px solid rgba(255,255,255,0.08)", transition: "all .6s ease", marginBottom: "12px" },
  dot: { width: "9px", height: "9px", background: "var(--color-red)", borderRadius: "50%", marginTop: "7px" },
  stripTitle: { fontWeight: 700, color: "#fff" },
  stripDesc: { color: "#cfcfcf", fontSize: ".92rem" },

  fromLeft: { opacity: 0, transform: "translateX(-40px)" },
  fromRight: { opacity: 0, transform: "translateX(40px)" },
  fromBottom: { opacity: 0, transform: "translateY(30px)" },
  visible: { opacity: 1, transform: "translate(0)" },

  marquee: { overflow: "hidden" },
  track: { display: "flex", gap: "22px", width: "max-content", animation: "scroll 35s linear infinite" },

  logoBox: { minWidth: "160px", height: "90px", background: "#fff", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center" },
  logo: { maxWidth: "120px", maxHeight: "60px" },

  imgBox: { minWidth: "220px", height: "280px", borderRadius: "20px", overflow: "hidden" },
  image: { width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 },
};

