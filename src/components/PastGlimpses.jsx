// import React, { useEffect, useMemo, useRef, useState } from "react";

// /**
//  * PastGlimpses — optimized & smooth
//  * - 3 strips only
//  * - 6 images per strip
//  * - Large image size
//  * - No hanging / freezing
//  */

// export default function PastGlimpses() {
//   const [isMobile, setIsMobile] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);
//   const [reducedMotion, setReducedMotion] = useState(false);
//   const sectionRef = useRef(null);

//   /* ================= MEDIA QUERIES ================= */
//   useEffect(() => {
//     const mq = window.matchMedia("(max-width: 768px)");
//     const update = () => setIsMobile(mq.matches);
//     update();
//     mq.addEventListener("change", update);
//     return () => mq.removeEventListener("change", update);
//   }, []);

//   useEffect(() => {
//     const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
//     const update = () => setReducedMotion(mq.matches);
//     update();
//     mq.addEventListener("change", update);
//     return () => mq.removeEventListener("change", update);
//   }, []);

//   /* ================= VISIBILITY ================= */
//   useEffect(() => {
//     if (!sectionRef.current) return;
//     const obs = new IntersectionObserver(
//       ([e]) => setIsVisible(e.isIntersecting),
//       { threshold: 0.1 }
//     );
//     obs.observe(sectionRef.current);
//     return () => obs.disconnect();
//   }, []);

//   /* ================= IMAGES ================= */
//   const imagesAll = [
//     "https://res.cloudinary.com/djevhndbo/image/upload/v1766414786/B_4_p7nhua.jpg",
//     "https://res.cloudinary.com/djevhndbo/image/upload/v1766414787/B_11_h8k2b6.jpg",
//     "https://res.cloudinary.com/djevhndbo/image/upload/v1766414787/B_9_ukmdug.jpg",
//     "https://res.cloudinary.com/djevhndbo/image/upload/v1766414788/B_3_t5wanw.jpg",
//     "https://res.cloudinary.com/djevhndbo/image/upload/v1766414788/B_5_vqz3cj.jpg",
//     "https://res.cloudinary.com/djevhndbo/image/upload/v1766414788/B_8_m9drkt.jpg",

//     "https://res.cloudinary.com/djevhndbo/image/upload/v1766414788/B_2_iaxbod.jpg",
//     "https://res.cloudinary.com/djevhndbo/image/upload/v1766414789/B_10_ayhaam.jpg",
//     "https://res.cloudinary.com/djevhndbo/image/upload/v1766414790/B_1_rc3uk8.jpg",
//     "https://res.cloudinary.com/djevhndbo/image/upload/v1766414866/A_8_h1viuy.jpg",
//     "https://res.cloudinary.com/djevhndbo/image/upload/v1766414873/A_3_g8x4v2.jpg",
//     "https://res.cloudinary.com/djevhndbo/image/upload/v1766414873/A_5_dahvlb.jpg",

//     "https://res.cloudinary.com/djevhndbo/image/upload/v1766414879/A_4_hz2tni.jpg",
//     "https://res.cloudinary.com/djevhndbo/image/upload/v1766414883/A_1_quybjd.jpg",
//     "https://res.cloudinary.com/djevhndbo/image/upload/v1766414887/A_2_tad9je.jpg",
//   ];

//   /* ================= SPLIT INTO STRIPS ================= */
//   const strips = useMemo(() => {
//     return [
//       imagesAll.slice(0, 6),
//       imagesAll.slice(6, 11),
//       imagesAll.slice(11, 18),
//     ];
//   }, []);

//   const speeds = [32, 36, 40];

//   /* ================= STYLES ================= */
//   const styles = {
//     section: {
//       minHeight: "100vh",
//       background: "var(--bg-gradient)",
//       padding: isMobile ? "40px 0 60px" : "70px 0",
//       textAlign: "center",
//     },
//     heading: {
//       fontSize: isMobile ? "2rem" : "2.8rem",
//       fontWeight: 700,
//       marginBottom: "30px",
//       color: "#000",
//     },
//     stripOuter: {
//       width: "100%",
//       overflow: "hidden",
//       marginBottom: "18px",
//     },
//     stripInner: (dir, speed) => ({
//       display: "flex",
//       gap: isMobile ? "14px" : "20px",
//       willChange: "transform",
//       animation:
//         reducedMotion || !isVisible
//           ? "none"
//           : `${dir === "left" ? "scrollLeft" : "scrollRight"} ${speed}s linear infinite`,
//     }),
//     img: {
//       width: isMobile ? "220px" : "340px",
//       height: isMobile ? "150px" : "220px",
//       objectFit: "cover",
//       borderRadius: "12px",
//       flex: "0 0 auto",
//     },
//   };

//   return (
//     <>
//       <style>{`
//         @keyframes scrollLeft {
//           from { transform: translate3d(0,0,0); }
//           to { transform: translate3d(-50%,0,0); }
//         }
//         @keyframes scrollRight {
//           from { transform: translate3d(-50%,0,0); }
//           to { transform: translate3d(0,0,0); }
//         }
//       `}</style>

//       <section
//         id="pastglimpses"
//         ref={sectionRef}
//         style={styles.section}
//         aria-label="Past Glimpses"
//       >
//         <h2 style={styles.heading}>Past Glimpses</h2>

//         {strips.map((imgs, idx) => {
//           const direction = idx % 2 === 0 ? "left" : "right";
//           const looped = [...imgs, ...imgs]; // minimal duplication

//           return (
//             <div key={idx} style={styles.stripOuter}>
//               <div style={styles.stripInner(direction, speeds[idx])}>
//                 {looped.map((src, i) => (
//                   <img
//                     key={i}
//                     src={src}
//                     alt={`Past glimpse ${i + 1}`}
//                     loading="lazy"
//                     decoding="async"
//                     draggable={false}
//                     style={styles.img}
//                     width={isMobile ? 220 : 340}
//                     height={isMobile ? 150 : 220}
//                   />
//                 ))}
//               </div>
//             </div>
//           );
//         })}
//       </section>
//     </>
//   );
// }







import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * PastGlimpses — HEAVILY optimized
 * - No hanging
 * - Large images
 * - GPU friendly
 * - Production-safe
 */

export default function PastGlimpses() {
  const [isMobile, setIsMobile] = useState(false);
  const [active, setActive] = useState(true);
  const sectionRef = useRef(null);

  /* ========== MEDIA QUERY ========== */
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  /* ========== PAUSE WHEN TAB HIDDEN ========== */
  useEffect(() => {
    const onVis = () => setActive(!document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  /* ========== PAUSE WHEN OFFSCREEN ========== */
  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver(
      ([e]) => setActive(e.isIntersecting),
      { threshold: 0.15 }
    );
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  /* ========== IMAGES ========== */
  const images = [
    "https://res.cloudinary.com/djevhndbo/image/upload/v1766414786/B_4_p7nhua.jpg",
    "https://res.cloudinary.com/djevhndbo/image/upload/v1766414787/B_11_h8k2b6.jpg",
    "https://res.cloudinary.com/djevhndbo/image/upload/v1766414787/B_9_ukmdug.jpg",
    "https://res.cloudinary.com/djevhndbo/image/upload/v1766414788/B_3_t5wanw.jpg",
    "https://res.cloudinary.com/djevhndbo/image/upload/v1766414788/B_5_vqz3cj.jpg",
    "https://res.cloudinary.com/djevhndbo/image/upload/v1766414788/B_8_m9drkt.jpg",

    "https://res.cloudinary.com/djevhndbo/image/upload/v1766414788/B_2_iaxbod.jpg",
    "https://res.cloudinary.com/djevhndbo/image/upload/v1766414789/B_10_ayhaam.jpg",
    "https://res.cloudinary.com/djevhndbo/image/upload/v1766414790/B_1_rc3uk8.jpg",
    "https://res.cloudinary.com/djevhndbo/image/upload/v1766414866/A_8_h1viuy.jpg",
    "https://res.cloudinary.com/djevhndbo/image/upload/v1766414873/A_3_g8x4v2.jpg",
    "https://res.cloudinary.com/djevhndbo/image/upload/v1766414873/A_5_dahvlb.jpg",

    "https://res.cloudinary.com/djevhndbo/image/upload/v1766414879/A_4_hz2tni.jpg",
    "https://res.cloudinary.com/djevhndbo/image/upload/v1766414883/A_1_quybjd.jpg",
    "https://res.cloudinary.com/djevhndbo/image/upload/v1766414887/A_2_tad9je.jpg",
  ];

  const strips = useMemo(
    () => [
      images.slice(0, 5),
      images.slice(5, 10),
      images.slice(10, 15),
    ],
    []
  );

  /* ========== SIZES ========== */
  const imgW = isMobile ? 220 : 340;
  const imgH = isMobile ? 150 : 220;
  const gap = isMobile ? 14 : 20;

  return (
    <>
      <style>{`
        .pg-section {
          min-height: 100vh;
          padding: ${isMobile ? "40px 0 60px" : "70px 0"};
          text-align: center;
          background: var(--bg-gradient);
          contain: layout paint;
          content-visibility: auto;
        }

        .pg-strip {
          overflow: hidden;
          margin-bottom: 18px;
        }

        .pg-track {
          display: flex;
          gap: ${gap}px;
          will-change: transform;
        }

        .pg-run-left {
          animation: pgLeft 35s linear infinite;
        }

        .pg-run-right {
          animation: pgRight 38s linear infinite;
        }

        .pg-paused {
          animation-play-state: paused;
        }

        @keyframes pgLeft {
          from { transform: translate3d(0px,0,0); }
          to { transform: translate3d(-${(imgW + gap) * 6}px,0,0); }
        }

        @keyframes pgRight {
          from { transform: translate3d(-${(imgW + gap) * 6}px,0,0); }
          to { transform: translate3d(0px,0,0); }
        }

        .pg-img {
          width: ${imgW}px;
          height: ${imgH}px;
          object-fit: cover;
          border-radius: 12px;
          flex: 0 0 auto;
        }
      `}</style>

      <section
        id="pastglimpses"
        ref={sectionRef}
        className="pg-section"
        aria-label="Past Glimpses"
      >
        <h2
          style={{
            fontSize: isMobile ? "2rem" : "2.8rem",
            fontWeight: 700,
            marginBottom: 30,
            color: "#000",
          }}
        >
          Past Glimpses
        </h2>

        {strips.map((imgs, idx) => {
          const dir = idx % 2 === 0 ? "pg-run-left" : "pg-run-right";
          const loop = [...imgs, ...imgs]; // minimal duplication

          return (
            <div key={idx} className="pg-strip">
              <div className={`pg-track ${dir} ${!active ? "pg-paused" : ""}`}>
                {loop.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    className="pg-img"
                    alt={`Past glimpse ${i + 1}`}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
