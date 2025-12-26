import { useEffect, useState } from "react";

function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const styles = {
    section: {
      width: "100%",
      minHeight: "100vh",
      background: "var(--bg-gradient)",
      padding: "80px 20px",
    },

    /* ⭐ SECTION HEADING (OUTSIDE CONTAINER) */
    heading: {
      fontSize: "clamp(2rem, 4vw, 2.8rem)",
      color: "#FFF7F1",
      fontFamily: "'Playfair Display', serif",
      fontWeight: 600,
      marginBottom: "50px",
      padding: "8px 20px",
      textAlign: "center",
    },

    container: {
      maxWidth: "1100px",
      width: "100%",
      margin: "0 auto",
      background: "var(--bg-card)",
      borderRadius: "22px",
      padding: "clamp(30px, 5vw, 60px)",
      boxShadow: "var(--shadow-soft)",
      border: "1px solid var(--border-color)",
      color: "var(--text-primary)",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(30px)",
      transition: "opacity 0.8s ease, transform 0.8s ease",
      textAlign: "center",
    },

    badge: {
      display: "inline-block",
      padding: "6px 16px",
      borderRadius: "20px",
      background: "rgba(225,6,0,0.15)",
      color: "var(--color-red)",
      fontWeight: 600,
      fontSize: "0.85rem",
      marginBottom: "18px",
      border: "1px solid rgba(225,6,0,0.4)",
    },

    paragraph: {
      fontSize: "clamp(1rem, 2vw, 1.1rem)",
      lineHeight: 1.75,
      color: "var(--text-secondary)",
      marginBottom: "22px",
      maxWidth: "900px",
      marginInline: "auto",
    },

    highlightBox: {
      marginTop: "30px",
      padding: "24px",
      borderRadius: "16px",
      background:
        "linear-gradient(135deg, rgba(225,6,0,0.12), rgba(122,0,0,0.08))",
      border: "1px solid rgba(225,6,0,0.35)",
      maxWidth: "950px",
      marginInline: "auto",
    },

    highlightText: {
      fontSize: "1.05rem",
      color: "var(--text-primary)",
      lineHeight: 1.7,
      fontWeight: 500,
    },
  };

  return (
    <section  id="about" style={styles.section}>
      {/* ⭐ MAIN SECTION HEADING */}
      <h2 style={styles.heading}>
        Education Tomorrow Conclave & Awards 2025
      </h2>

      {/* CONTENT CARD */}
      <div style={styles.container}>
        {/* <span style={styles.badge}>About the Conclave</span> */}

        <p style={styles.paragraph}>
          The <strong>Education Tomorrow Conclave & Awards 2026</strong>,
          scheduled for February in New Chandigarh, will bring together visionary
          leaders from academia, industry, and government to reimagine the
          future of learning in an AI-driven world.
        </p>

        <p style={styles.paragraph}>
          With the theme <strong>“Reimagining Learning in the Age of AI,”</strong>{" "}
          the conclave will explore how artificial intelligence is
          revolutionizing education — from intelligent classrooms and adaptive
          learning systems to AI-powered curriculum design and future-ready
          skills development.
        </p>

        <div style={styles.highlightBox}>
          <p style={styles.highlightText}>
            This landmark event will spotlight transformative innovations that
            empower educators, institutions, and learners to thrive in the
            digital era. Designed as a collaborative platform, the conclave
            will feature distinguished thought leaders, policymakers, HR & L&D
            professionals, and education pioneers — fostering dialogue,
            partnerships, and strategies that bridge the gap between academia
            and industry for a smarter, more inclusive tomorrow.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
