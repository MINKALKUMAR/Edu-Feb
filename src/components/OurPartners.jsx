// import FintrexLogo from "../assets/partners/Fintrex.png";
// import EducoreLogo from "../assets/partners/Educore.png";
// import WULogoWhite from "../assets/partners/WULogoWhite.png";
// import LINGAYA from "../assets/partners/LINGAYA.png";
// import lamrin from "../assets/partners/Lamrin.png";
// import SMT from "../assets/partners/SMT.png";
// import Education_Future_One from "../assets/partners/Education_Future_One.png";
// import Avanse from "../assets/partners/Avanse.jpg";
// import Gifting from "../assets/partners/Gifting.png";

// const OurPartners = () => {
//   const styles = `
//     /* PARALLAX VIDEO SECTION */
//     .partner-section {
//       position: relative;
//       min-height: 80vh;
//       padding: 40px;
//       overflow: hidden;
//     }

//     .partner-video {
//       position: fixed;
//       top: 0;
//       left: 0;
//       width: 100%;
//       height: 100%;
//       object-fit: cover;
//       z-index: -2;
//     }

//     .partner-overlay {
//       position: absolute;
//       inset: 0;
//       background: rgba(0, 0, 0, 0.28);
//       z-index: -1;
//     }

//     .partner-container {
//       max-width: 1400px;
//       margin: 0 auto;
//       width: 100%;
//       position: relative;
//       z-index: 2;
//     }

//     .partner-header {
//       text-align: center;
//       margin-bottom: 30px;
//     }

//     .partner-title {
//       font-size: 48px;
//       font-weight: 800;
//       color: var(--color-white);
//       margin-bottom: 14px;
//     }

//     .partner-divider {
//       width: 110px;
//       height: 0px;
//       background: var(--color-red);
//       margin: 5px auto;
//     }

//     /* FIRST ROW */
//     // .partner-grid.first-row {
//     //   display: grid;
//     //   grid-template-columns: repeat(3, 1fr);
//     //   gap: 35px;
//     //   margin-bottom: 70px;
//    // }


//     /* FIRST ROW */
//     .partner-grid.first-row {
//       display: flex;
//       align-items: center;
//       flex-wrap: wrap;
//       justify-content: center;
//       gap: 35px;
//       margin-bottom: 70px;
//     }

//     /* SECOND ROW */
//     .partner-grid.second-row {
//       display: grid;
//       grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//       gap: 35px;
//       justify-items: center;
//       margin-bottom: 70px;
//     }

//     /* THIRD ROW */
//     .partner-grid.third-row {
//       display: flex;
//       justify-content: center;
//       gap: 35px;
//       margin-bottom: 70px;
//     }

//     /* CARD */
//     .partner-card {
//       background: var(--color-white);
//       border-radius: 6px;
//       padding: 20px;
//       height: 160px;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       position: relative;
//       box-shadow: var(--shadow-soft);
//       border-bottom: 4px solid var(--border-color);
//       transition: transform 0.3s ease, border-color 0.3s ease;
//     }

//     .partner-card:hover {
//       border-bottom: 6px solid var(--color-red);
//     }

//     .partner-name {
//       position: absolute;
//       top: -34px;
//       width: 100%;
//       text-align: center;
//       color: var(--color-white);
//       font-size: 18px;
//       font-weight: 700;
//       text-transform: uppercase;
//     }

//     .partner-logo {
//       width: 260px;
//       height: 130px;
//       object-fit: contain;
//       transition: transform 0.3s ease;
//     }

//     .partner-card:hover .partner-logo {
//       transform: scale(1.1);
//     }

//     .first-row .partner-logo {
//       width: 210px;
//       height: 135px;
//     }

//     /* RESPONSIVE */
//     @media (max-width: 900px) {
//       .partner-grid.first-row,
//       .partner-grid.second-row {
//         grid-template-columns: repeat(2, 1fr);
//       }

//       .partner-grid.third-row {
//         flex-direction: column;
//         align-items: center;
//       }

//       /* Disable parallax video on mobile */
//       .partner-video {
//         position: absolute;
//       }
//     }

//     @media (max-width: 600px) {
//       .partner-grid.first-row,
//       .partner-grid.second-row {
//         grid-template-columns: repeat(1, 1fr);
//       }
//     }
//   `;

//   const partnerCategories = [
//     {
//       className: "first-row",
//       partners: [
//         { name: "Organiser", logo: FintrexLogo, link: "https://fintrexmedia.com/" },
//         { name: "Knowledge Partner", logo: EducoreLogo, link: "#" },
//         // { name: "Presenting Partner", logo: WULogoWhite, link: "#" },
//       ],
//     },
//     // {
//     //   className: "second-row",
//     //   partners: [
//     //     { name: "Networking Partner", logo: Education_Future_One, link: "#" },
//     //     { name: "University Partner", logo: LINGAYA, link: "#" },
//     //     { name: "University Partner", logo: lamrin, link: "#" },
//     //     { name: "Institute Partner", logo: SMT, link: "#" },
//     //   ],
//     // },
//     {
//       className: "third-row",
//       partners: [
//         // { name: "Student Success Partner", logo: Avanse, link: "#" },
//         { name: "Gifting Partner", logo: Gifting, link: "#" },
//       ],
//     },
//   ];

//   return (
//     <>
//       <style>{styles}</style>

//       <section id="partners" className="partner-section">
//         {/* PARALLAX VIDEO */}
//         <video
//           className="partner-video"
//           src="https://res.cloudinary.com/djevhndbo/video/upload/v1765957758/Partners_kkl5ze.mp4"
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="none"
//         />

//         <div className="partner-overlay"></div>

//         <div className="partner-container">
//           <div className="partner-header">
//             <h2 className="partner-title">Our Partners</h2>
//             <div className="partner-divider"></div>
//           </div>

//           {partnerCategories.map((row, rowIndex) => (
//             <div key={rowIndex} className={`partner-grid ${row.className}`}>
//               {row.partners.map((partner, index) => (
//                 <a
//                   key={index}
//                   href={partner.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <div className="partner-card">
//                     <p className="partner-name">{partner.name}</p>
//                     <img
//                       src={partner.logo}
//                       alt={partner.name}
//                       className="partner-logo"
//                       loading="lazy"
//                     />
//                   </div>
//                 </a>
//               ))}
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default OurPartners;











import { useEffect, useRef, useState } from "react";

import FintrexLogo from "../assets/partners/Fintrex.png";
import EducoreLogo from "../assets/partners/Educore.png";
import WULogoWhite from "../assets/partners/WULogoWhite.png";
import LINGAYA from "../assets/partners/LINGAYA.png";
import lamrin from "../assets/partners/Lamrin.png";
import SMT from "../assets/partners/SMT.png";
import Education_Future_One from "../assets/partners/Education_Future_One.png";
import Avanse from "../assets/partners/Avanse.jpg";
import Gifting from "../assets/partners/Gifting.png";
import FretBox from "../assets/partners/FretBox.png";
import copowered from "../assets/partners/Co-Poweredby.png";



const OurPartners = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [visible, setVisible] = useState(false);

  /* ================= VISIBILITY CONTROL ================= */
  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.25 }
    );
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  /* ================= VIDEO CONTROL ================= */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (visible) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [visible]);

  const styles = `
    /* PARALLAX VIDEO SECTION */
    .partner-section {
      position: relative;
      min-height: auto;
      padding: 40px;
      overflow: hidden;
    }

    .partner-video {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -2;
    }

    .partner-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.28);
      z-index: -1;
    }

    .partner-container {
      max-width: 1400px;
      margin: 0 auto;
      width: 100%;
      position: relative;
      z-index: 2;
    }

    .partner-header {
      text-align: center;
      margin-bottom: 30px;
    }

    .partner-title {
      font-size: 48px;
      font-weight: 800;
      color: var(--color-white);
      margin-bottom: 14px;
    }

    .partner-divider {
      width: 110px;
      height: 0px;
      background: var(--color-red);
      margin: 5px auto;
    }

    /* FIRST ROW */
    // .partner-grid.first-row {
    //   display: grid;
    //   grid-template-columns: repeat(3, 1fr);
    //   gap: 35px;
    //   margin-bottom: 70px;
    // }

    /* FIRST ROW */
    .partner-grid.first-row {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: center;
      gap: 35px;
      margin-bottom: 70px;
    }

    /* SECOND ROW */
    .partner-grid.second-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 35px;
      justify-items: center;
      margin-bottom: 70px;
    }

    /* THIRD ROW */
    .partner-grid.third-row {
      display: flex;
      justify-content: center;
      gap: 35px;
      margin-bottom: 70px;
    }

    /* CARD */
    .partner-card {
      background: var(--color-white);
      border-radius: 6px;
      padding: 20px;
      height: 160px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      box-shadow: var(--shadow-soft);
      border-bottom: 4px solid var(--border-color);
      transition: transform 0.3s ease, border-color 0.3s ease;
    }

    .partner-card:hover {
      border-bottom: 6px solid var(--color-red);
    }

    .partner-name {
      position: absolute;
      top: -34px;
      width: 100%;
      text-align: center;
      color: var(--color-white);
      font-size: 18px;
      font-weight: 700;
      text-transform: uppercase;
    }

    .partner-logo {
      width: 260px;
      height: 130px;
      object-fit: contain;
      transition: transform 0.3s ease;
    }

    .partner-card:hover .partner-logo {
      transform: scale(1.1);
    }

    .first-row .partner-logo {
      width: 210px;
      height: 135px;
    }

    /* RESPONSIVE */
    @media (max-width: 900px) {
      .partner-grid.first-row,
      .partner-grid.second-row {
        grid-template-columns: repeat(2, 1fr);
      }

      .partner-grid.third-row {
        flex-direction: column;
        align-items: center;
      }

      /* Disable parallax video on mobile */
      .partner-video {
        position: absolute;
      }
    }

    @media (max-width: 600px) {
      .partner-grid.first-row,
      .partner-grid.second-row {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  `;

  const partnerCategories = [
    {
      className: "first-row",
      // className: "third-row",
      partners: [
        { name: "Organiser", logo: FintrexLogo, link: "https://fintrexmedia.com/" },
        { name: "Knowledge Partner", logo: EducoreLogo, link: "#" },
        { name: "Co- Powered By", logo: copowered, link: "#" },
      ],
    },
    // {
    //   className: "second-row",
    //   partners: [
    //     { name: "Networking Partner", logo: Education_Future_One, link: "#" },
    //     { name: "University Partner", logo: LINGAYA, link: "#" },
    //     { name: "University Partner", logo: lamrin, link: "#" },
    //     { name: "Institute Partner", logo: SMT, link: "#" },
    //   ],
    // },
    {
      className: "third-row",
      // className: "first-row",
      partners: [
        { name: "Associate Partner", logo: FretBox, link: "#" },
        { name: "Gifting Partner", logo: Gifting, link: "#" },
      ],
    },
  ];

  return (
    <>
      <style>{styles}</style>

      <section id="partners" ref={sectionRef} className="partner-section">
        {/* PARALLAX VIDEO */}
        <video
          ref={videoRef}
          className="partner-video"
          src="https://res.cloudinary.com/djevhndbo/video/upload/v1765957758/Partners_kkl5ze.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
        />

        <div className="partner-overlay"></div>

        <div className="partner-container">
          <div className="partner-header">
            <h2 className="partner-title">Our Partners</h2>
            <div className="partner-divider"></div>
          </div>

          {partnerCategories.map((row, rowIndex) => (
            <div key={rowIndex} className={`partner-grid ${row.className}`}>
              {row.partners.map((partner, index) => (
                <a
                  key={index}
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="partner-card">
                    <p className="partner-name">{partner.name}</p>
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="partner-logo"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </a>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default OurPartners;
