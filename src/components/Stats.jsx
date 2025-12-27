import { useEffect, useRef, useState } from "react";

/* ====== STATS DATA ====== */
const STATS = [
  { label: "Speakers", value: 40, suffix: "+" },
  { label: "Delegates", value: 200, suffix: "+" },
  { label: "Exhibitor", value: 20, suffix: "+" },
  { label: "Hours of Exclusive Networking", value: 9, suffix: "+" },
];

/* ====== COUNT UP HOOK ====== */
function useCountUp(trigger) {
  const [counts, setCounts] = useState(STATS.map(() => 0));

  useEffect(() => {
    if (!trigger) return;

    let raf = 0;
    const start = performance.now();
    const duration = 1200;

    const animate = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCounts(STATS.map((s) => Math.floor(eased * s.value)));

      if (progress < 1) raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [trigger]);

  return counts;
}

function Stats({ id }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  /* ====== VISIBILITY OBSERVER ====== */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* ====== RESPONSIVE WIDTH TRACKER ====== */
  useEffect(() => {
    let resizeTimer;

    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setWidth(window.innerWidth);
      }, 150);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const counts = useCountUp(visible);

  /* ====== RESPONSIVE GRID LOGIC ====== */
  const gridColumns =
    width <= 520
      ? "1fr"
      : width <= 900
      ? "repeat(2, 1fr)"
      : "repeat(4, 1fr)";

  /* ====== STYLES ====== */
  const styles = {
    section: {
      width: "100%",
      background: "var(--bg-gradient)",
      padding: "80px 20px",
    },

    heading: {
      fontSize: "clamp(2rem, 4vw, 2.8rem)",
      textAlign: "center",
      color: "var(--text-primary)",
      fontWeight: 700,
      marginBottom: "50px",
    },

    grid: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: gridColumns,
      gap: "20px",
    },

    card: {
      background: "#00000053",
      borderRadius: "18px",
      padding: "32px 16px",
      textAlign: "center",
      border: "1px solid var(--color-red)",
      boxShadow: "var(--shadow-soft)",
      transition: "transform 0.3s ease",
      
    },

    number: {
      fontSize: "clamp(2rem, 5vw, 3rem)",
      fontWeight: 800,
      color: "var(--color-red)",
      marginBottom: "8px",
    },

    label: {
      fontSize: "0.9rem",
      fontWeight: 700,
      color: "var(--text-secondary)",
      textTransform: "uppercase",
      letterSpacing: "1px",
    },
  };

  return (
    <section id={id} style={styles.section} ref={ref}>
      {/* SECTION HEADING */}
      <h2 style={styles.heading}>Event Highlights</h2>

      {/* STATS GRID */}
      <div style={styles.grid}>
        {STATS.map((stat, i) => (
          <div key={stat.label} style={styles.card}>
            <div style={styles.number}>
              {counts[i].toLocaleString()}
              {stat.suffix}
            </div>
            <div style={styles.label}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
