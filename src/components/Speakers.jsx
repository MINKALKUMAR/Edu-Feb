import { useEffect, useRef, useState } from "react";
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
    {
      name: "Andy Perryer",
      title: "Head of Digital Learning",
      org: "Cognita Schools",
      location: "Middle East",
      img: "https://edutomorrow.in/assets/Prof.%20(Dr.)%20Pramod%20Kumar%20Sharma-9vQIXg-A.png",
      logo: MainLogo,
    },
    {
      name: "Dr Gregor Cameron",
      title: "Director of Schools",
      org: "Victoria International Schools",
      location: "Sharjah, UAE",
      img: "https://edutomorrow.in/assets/Prof.%20(Dr.)%20Pramod%20Kumar%20Sharma-9vQIXg-A.png",
      logo: MainLogo,
    },
    {
      name: "Jamila Mahamoor",
      title: "Nursery Director",
      org: "The Blossom Nursery",
      location: "Dubai, UAE",
      img: "https://edutomorrow.in/assets/Prof.%20(Dr.)%20Pramod%20Kumar%20Sharma-9vQIXg-A.png",
      logo: MainLogo,
    },
    {
      name: "Dr. Pramod Mahajan",
      title: "Director - Principal",
      org: "Sharjah Indian School",
      location: "Sharjah, UAE",
      img: "https://edutomorrow.in/assets/Prof.%20(Dr.)%20Pramod%20Kumar%20Sharma-9vQIXg-A.png",
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
      position: "relative"
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

              <div style={styles.logoBox}>
                <img src={sp.logo} alt="logo" loading="lazy" style={styles.logoImg} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Speakers;



// import { useEffect, useRef, useState } from "react";

// function Speakers() {
//   const sectionRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkScreen = () => setIsMobile(window.innerWidth <= 768);
//     checkScreen();
//     window.addEventListener("resize", checkScreen);
//     return () => window.removeEventListener("resize", checkScreen);
//   }, []);

//   const speakers = [
//     {
//       name: "Andy Perryer",
//       title: "Head of Digital Learning",
//       org: "Cognita Schools",
//       location: "Middle East",
//       img: "https://edutomorrow.in/assets/Prof.%20(Dr.)%20Pramod%20Kumar%20Sharma-9vQIXg-A.png",
//     },
//     {
//       name: "Dr Gregor Cameron",
//       title: "Director of Schools",
//       org: "Victoria International Schools",
//       location: "Sharjah, UAE",
//       img: "https://edutomorrow.in/assets/Prof.%20(Dr.)%20Pramod%20Kumar%20Sharma-9vQIXg-A.png",
//     },
//     {
//       name: "Jamila Mahamoor",
//       title: "Nursery Director",
//       org: "The Blossom Nursery",
//       location: "Dubai, UAE",
//       img: "https://edutomorrow.in/assets/Prof.%20(Dr.)%20Pramod%20Kumar%20Sharma-9vQIXg-A.png",
//     },
//     {
//       name: "Dr. Pramod Mahajan",
//       title: "Director - Principal",
//       org: "Sharjah Indian School",
//       location: "Sharjah, UAE",
//       img: "https://edutomorrow.in/assets/Prof.%20(Dr.)%20Pramod%20Kumar%20Sharma-9vQIXg-A.png",
//     },
//   ];

//   const styles = {
//     wrapper: {
//       padding: "60px 20px",
//       backgroundAttachment: "fixed",
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//       backgroundImage: "url('/RedBlackBox.png')",
//     },

//     heading: {
//       fontSize: isMobile ? "2rem" : "2.8rem",
//       color: "#FFF7F1",
//       fontFamily: "'Playfair Display', serif",
//       fontWeight: 600,
//       marginBottom: "40px",
//       padding: "8px 20px",
//       textAlign: "center",
//     },

//     grid: {
//       display: "flex",
//       gap: "30px",
//       flexWrap: "wrap",
//       justifyContent: "center",
//       alignItems: "center",
//       maxWidth: "1200px",
//       margin: "0 auto",
//     },

//     card: {
//       width: "272px",
//       borderRadius: "14px",
//       overflow: "hidden",
//       background: "#FBFBFB",
//       boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
//       position: "relative",
//     },

//     topGradient: {
//       height: "55%",
//       background: "var(--bg-gradient)",
//       position: "relative",
//     },

//     img: {
//       width: "100%",
//       height: "100%",
//       objectFit: "cover",
//       transition: "none",   // prevent zoom
//       transform: "none",
//     },

//     locationTag: {
//       position: "absolute",
//       right: "-35px",
//       top: "40px",
//       transform: "rotate(90deg)",
//       background: "var(--color-red)",
//       color: "#FFF7F1",
//       padding: "6px 18px",
//       fontSize: "0.85rem",
//       fontWeight: "600",
//       borderRadius: "6px",
//     },

//     bottom: {
//       padding: "20px",
//       textAlign: "center",
//     },

//     name: {
//       fontSize: "1.2rem",
//       fontWeight: "700",
//       color: "var(--color-red)",
//       marginBottom: "10px",
//     },

//     title: {
//       fontSize: "0.95rem",
//       color: "var(--color-black)",
//       opacity: 0.8,
//     },

//     org: {
//       fontSize: "0.85rem",
//       color: "#3B1C32",
//       marginTop: "4px",
//       opacity: 0.7,
//     },
//   };

//   return (
//     <section style={styles.wrapper} id="speakers">
//       {/* ⭐ UNIVERSAL HEADING */}
//       <h2 style={styles.heading}>Our Speakers</h2>

//       <div style={styles.grid} ref={sectionRef}>
//         {speakers.map((sp, i) => (
//           <div key={i} style={styles.card}>
//             <div style={styles.topGradient}>
//               <img
//                 src={sp.img}
//                 alt={sp.name}
//                 loading="lazy"
//                 style={styles.img}
//               />
//               <div style={styles.locationTag}>{sp.location}</div>
//             </div>

//             <div style={styles.bottom}>
//               <div style={styles.name}>{sp.name}</div>
//               <div style={styles.title}>{sp.title}</div>
//               <div style={styles.org}>{sp.org}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Speakers;
