import { useEffect, useRef, useState } from "react";
import parvinderSingh from "../assets/OurSpeakers/Prof.(Dr.) Parvinder Singh.webp";
import anshuKataria from "../assets/OurSpeakers/Dr. Anshu Kataria.webp";
import MainLogo from "../assets/MainLogo.png";

function GuestofHonour() {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const guests = [
    {
      name: "Prof. (Dr.) Parvinder Singh",
      title: "Director International Academic Affairs\nNational Adviser CIPU\nEx Vice Chancellor RBU",
      org: "",
      location: "",
      img: parvinderSingh,
      logo: MainLogo,
    },
    {
      name: "Dr. Anshu Kataria",
      title: "Chairman",
      org: "Aryans Group of Colleges",
      location: "",
      img: anshuKataria,
      logo: MainLogo,
    },
  ];

  const styles = {
    wrapper: {
      padding: "60px 20px",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundImage: "url('/RedBlackBox.png')",
    },
    heading: {
      fontSize: isMobile ? "2rem" : "2.8rem",
      color: "#FFF7F1",
      fontFamily: "'Playfair Display', serif",
      fontWeight: 600,
      marginBottom: "40px",
      padding: "8px 20px",
      textAlign: "center",
    },
    grid: {
      display: "flex",
      gap: "30px",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 auto",
    },
    card: {
      width: "320px", // Larger than Speakers.jsx (272px)
      borderRadius: "18px", // Different from Speakers.jsx (14px)
      overflow: "hidden",
      background: "linear-gradient(145deg, #FFFFFF, #F0F0F0)", // Different background
      boxShadow: "0 15px 35px rgba(0,0,0,0.25)", // Enhanced shadow
      position: "relative",
      height: "500px", // Larger height
      border: "2px solid rgba(225,6,0,0.1)", // Subtle border
    },
    topGradient: {
      height: "60%",
      background: "var(--bg-gradient)",
      position: "relative",
    },
    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "none",
      transform: "none",
    },
    locationTag: {
      position: "absolute",
      right: "-35px",
      top: "40px",
      transform: "rotate(90deg)",
      background: "var(--color-red)",
      color: "#FFF7F1",
      padding: "6px 18px",
      fontSize: "0.85rem",
      fontWeight: "600",
      borderRadius: "6px",
    },
    bottom: {
      padding: "20px",
      textAlign: "center",
    },
    name: {
      fontSize: "1.5rem",
      fontWeight: "700",
      color: "var(--color-red)",
      marginBottom: "10px",
    },
    title: {
      fontSize: "1rem",
      color: "var(--color-black)",
      opacity: 0.7,
      fontWeight: "600",
    },
    org: {
      fontSize: "0.95rem",
      color: "#512447ff",
      marginTop: "4px",
      opacity: 1,
    },
  };

  return (
    <section style={styles.wrapper} id="guests">
      <h2 style={styles.heading}>Guest of Honour</h2>
      <div style={styles.grid} ref={sectionRef}>
        {guests.map((guest, i) => (
          <div key={i} className="guest-card" style={styles.card}>
            <div style={styles.topGradient}>
              <img src={guest.img} alt={guest.name} loading="lazy" style={styles.img} />
              <div style={styles.locationTag}>{guest.location}</div>
            </div>
            <div style={styles.bottom}>
              <div style={styles.name}>{guest.name}</div>
              <div style={styles.title}>{guest.title}</div>
              <div style={styles.org}>{guest.org}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GuestofHonour;
