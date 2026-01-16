import React, { useState } from "react";
import VenueImage from "../assets/VenueImage.webp";

function Venue() {
  const [hoverBtn, setHoverBtn] = useState(false);

  /* 🔁 LOCATION DATA */
  const venue = {
    name: "Park Plaza Zirakpur, Chandigarh, India",
    address: "",
    image: VenueImage,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.8609370970867!2d76.82252919999999!3d30.637876499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feb66c595c28b%3A0x45e2bcd3cdc71c1c!2sPark%20Plaza%20Chandigarh%20Zirakpur!5e0!3m2!1sen!2sin!4v1756630490296!5m2!1sen!2sin",

    /* ✅ FIXED & RELIABLE LINK */
    directions:
      "https://www.google.com/maps/search/?api=1&query=Park+Plaza+Chandigarh+Zirakpur",
  };

  const glowButton = (hover) => ({
    padding: "10px 22px",
    background: "var(--bg-gradient)",
    color: "var(--color-white)",
    borderRadius: "28px",
    border: "2px solid var(--color-red)",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: "1rem",
    animation: "borderFlow 3s infinite",
    transition: "var(--transition-fast)",
    boxShadow: hover
      ? "0 0 18px var(--color-red), 0 0 28px rgba(225,6,0,0.6)"
      : "0 0 8px rgba(225,6,0,0.5)",
    transform: hover ? "translateY(-3px)" : "translateY(0)",
    textDecoration: "none",
    display: "inline-block",
  });

  const styles = {
    section: {
      width: "100%",
      // background: "var(--bg-gradient)",
      padding: "90px 20px",
      minheight: "auto",
    },
    heading: {
      textAlign: "center",
      fontSize: "clamp(2rem, 4vw, 2.8rem)",
      color: "var(--text-primary)",
      fontWeight: 800,
      marginBottom: "12px",
    },
    underline: {
      width: "90px",
      height: "4px",
      margin: "0 auto 50px",
      borderRadius: "20px",
      background: "var(--color-red)",
    },
    grid: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "28px",
    },
    card: {
      background: "#85000069",
      borderRadius: "18px",
      padding: "14px",
      border: "1px solid var(--border-color)",
      boxShadow: "var(--shadow-soft)",
    },
    media: {
      overflow: "hidden",
      borderRadius: "14px",
    },
    image: {
      width: "100%",
      height: "360px",
      objectFit: "cover",
      borderRadius: "12px",
    },
    map: {
      width: "100%",
      height: "360px",
      border: 0,
      borderRadius: "12px",
    },
    meta: {
      maxWidth: "1200px",
      margin: "30px auto 0",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "16px",
      color: "var(--text-secondary)",
    },
    metaText: {
      fontSize: "1rem",
    },
    venueName: {
      color: "var(--text-primary)",
      fontWeight: 700,
      marginRight: "6px",
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

  :root {
    --bg-main: #000000;
    --grid-color: 225, 6, 0;
    --grid-line-opacity: 0.35;
    --grid-glow-opacity: 0.25;
    --grid-size: 40px;
  }

  .grid-bg {
    background:
      linear-gradient(
        90deg,
        rgba(var(--grid-color), var(--grid-line-opacity)) 1px,
        transparent 1px
      ),
      linear-gradient(
        0deg,
        rgba(var(--grid-color), var(--grid-line-opacity)) 1px,
        transparent 1px
      ),
      radial-gradient(
        circle at center,
        rgba(var(--grid-color), var(--grid-glow-opacity)),
        transparent 60%
      ),
      var(--bg-main);

    background-size: var(--grid-size) var(--grid-size);
    background-position: center;
  }

  .grid-bg.soft {
    --grid-line-opacity: 0.18;
    --grid-glow-opacity: 0.12;
    --grid-size: 60px;
  }
`}</style>

      <section style={styles.section} id="venue" className="grid-bg">
        <h2 style={styles.heading}>Venue</h2>
        <div style={styles.underline} />

        <div style={styles.grid}>
          <div style={styles.card}>
            <div style={styles.media}>
              <img
                src={venue.image}
                alt={venue.name}
                style={styles.image}
                loading="lazy"
              />
            </div>
          </div>

          <div style={styles.card}>
            <div style={styles.media}>
              <iframe
                title="Venue Map"
                src={venue.map}
                style={styles.map}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div style={styles.meta}>
          <div style={styles.metaText}>
            <span style={styles.venueName}>{venue.name}</span>
            {venue.address}
          </div>

          <a
            href={venue.directions}
            target="_blank"
            rel="noreferrer"
            style={glowButton(hoverBtn)}
            onMouseEnter={() => setHoverBtn(true)}
            onMouseLeave={() => setHoverBtn(false)}
          >
            Get Directions
          </a>
        </div>
      </section>
    </>
  );
}

export default Venue;
