import { useEffect, useRef, useState } from "react";
import vandnaShahi from "../assets/OurSpeakers/Dr. Vandna Shahi.png";
import anshuKataria from "../assets/OurSpeakers/Dr. Anshu Kataria.webp";
import manojManuja from "../assets/OurSpeakers/Dr. Manoj Manuja.webp";
import honeySharma from "../assets/OurSpeakers/Dr. Honey Sharma.webp";
import vijayBanga from "../assets/OurSpeakers/Prof. Dr. Vijay Kumar Banga.webp";
import parvinderSingh from "../assets/OurSpeakers/Prof.(Dr.) Parvinder Singh.webp";
import ashishSharma from "../assets/OurSpeakers/Dr Ashish Sharma.png";
import artiBansal from "../assets/OurSpeakers/Prof.(Dr.) Arti Bansal.png";

import MainLogo from "../assets/MainLogo.png";
function Speakers() {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

const speakers = [
  // 1️⃣ Chairman / Chairman & Director
  {
    name: "Prof. (Dr.) Parvinder Singh",
    title: "Chairman & Director",
    org: "Confederation of Indian Private Universities & International Academic Affairs, Chandigarh",
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

  // 2️⃣ Vice Chancellor
  {
    name: "Dr. Manoj Manuja",
    title: "Vice Chancellor",
    org: "Geeta University",
    location: "",
    img: manojManuja,
    logo: MainLogo,
  },

  // 3️⃣ Directors
  {
    name: "Prof. Dr. Vijay Kumar Banga",
    title: "Director",
    org: "Govind Ballabh Pant Institute of Engineering & Technology, Pauri, Garhwal, Uttarakhand",
    location: "",
    img: vijayBanga,
    logo: MainLogo,
  },
  {
    name: "Dr. Ashish Sharma",
    title: "Director",
    org: "Shishu Niketan Public School",
    location: "",
    img: ashishSharma,
    logo: MainLogo,
  },

  // 4️⃣ Additional Director
  {
    name: "Prof. (Dr.) Arti Bansal",
    title: "Additional Director",
    org: "Chandigarh University Online",
    location: "",
    img: artiBansal,
    logo: MainLogo,
  },

  // 5️⃣ Senior Principal
  {
    name: "Dr. Vandna Shahi",
    title: "Senior Principal",
    org: "BCM School",
    location: "",
    img: vandnaShahi,
    logo: MainLogo,
  },

  // 6️⃣ Campus Director
  {
    name: "Dr. Honey Sharma",
    title: "Campus Director",
    org: "Gulzar Group Of Institutes",
    location: "",
    img: honeySharma,
    logo: MainLogo,
  },
];


  const styles = {
    wrapper: {
      padding: "60px 20px",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundImage:
        "url('/RedBlackBox.png')",
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
      maxWidth: "1200px",
      margin: "0 auto"
    },

    card: {
      width: "272px",
      borderRadius: "14px",
      overflow: "hidden",
      background: "#FBFBFB",
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      position: "relative" ,
      height: "450px",
    },

    topGradient: {
      height: "55%",
      background: "var(--bg-gradient)",
      position: "relative"
    },

    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
        transition: "none",       // ❌ stop zoom animation
        transform: "none",        // ❌ prevent any scale happening
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
      borderRadius: "6px"
    },

    bottom: {
      padding: "20px",
      textAlign: "center"
    },

    name: {
      fontSize: "1.2rem",
      fontWeight: "700",
      color: "var(--color-red)",
      marginBottom: "10px"
    },

    title: {
      fontSize: "0.95rem",
      color: "var(--color-black)",
      opacity: 0.8
    },

    org: {
      fontSize: "0.85rem",
      color: "#3B1C32",
      marginTop: "4px",
      opacity: 0.7
    },

    logoBox: {
      marginTop: "15px",
      display: "flex",
      justifyContent: "center"
    },

    logoImg: {
      width: "60px",
      height: "60px",
      objectFit: "contain",
      opacity: 0.9
    }
  };

  return (
    <section  style={styles.wrapper} id="speakers">
      {/* ⭐ SAME UNIVERSAL HEADING */}
      <h2 style={styles.heading}>Our Speakers</h2>

      <div style={styles.grid} ref={sectionRef}>
        {speakers.map((sp, i) => (
          <div key={i} style={styles.card}>
            <div style={styles.topGradient}>
              <img src={sp.img} alt={sp.name} loading="lazy" style={styles.img} />
              <div style={styles.locationTag}>{sp.location}</div>
            </div>

            <div style={styles.bottom}>
              <div style={styles.name}>{sp.name}</div>
              <div style={styles.title}>{sp.title}</div>
              <div style={styles.org}>{sp.org}</div>

              {/* <div style={styles.logoBox}> */}
                {/* <img src={sp.logo} alt="logo" loading="lazy" style={styles.logoImg} /> */}
              {/* </div> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Speakers;