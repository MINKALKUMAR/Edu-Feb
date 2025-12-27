
// import React, { useEffect, useMemo, useRef, useState } from "react";

// /* ===== LOCAL IMAGES ===== */
// import A1 from "../assets/PastPhotos/A1.JPG";
// import A2 from "../assets/PastPhotos/A2.JPG";
// import A3 from "../assets/PastPhotos/A3.JPG";
// import A4 from "../assets/PastPhotos/A4.JPG";
// import A5 from "../assets/PastPhotos/A5.JPG";
// import A6 from "../assets/PastPhotos/A6.JPG";
// import A7 from "../assets/PastPhotos/A7.JPG";
// import A8 from "../assets/PastPhotos/A8.JPG";
// import A9 from "../assets/PastPhotos/A9.JPG";
// import A10 from "../assets/PastPhotos/A10.JPG";
// import A11 from "../assets/PastPhotos/A11.JPG";
// import A12 from "../assets/PastPhotos/A12.JPG";
// import A13 from "../assets/PastPhotos/A13.JPG";
// import A14 from "../assets/PastPhotos/A14.JPG";
// import A15 from "../assets/PastPhotos/A15.JPG";
// import A16 from "../assets/PastPhotos/A16.JPG";
// import A17 from "../assets/PastPhotos/A17.JPG";
// import A18 from "../assets/PastPhotos/A18.JPG";
// import C from "../assets/PastPhotos/C.png";

// /**
//  * PastGlimpses — LOCAL IMAGES (ZERO HANG)
//  * ✔ 18 local images
//  * ✔ 3 strips (6 each)
//  * ✔ Shimmer loader
//  * ✔ Fade-in
//  * ✔ Idle + Intersection start
//  */

// export default function PastGlimpses() {
//   const sectionRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(false);
//   const [visible, setVisible] = useState(false);
//   const [ready, setReady] = useState(false);

//   /* ========= MEDIA ========= */
//   useEffect(() => {
//     const mq = window.matchMedia("(max-width: 768px)");
//     const update = () => setIsMobile(mq.matches);
//     update();
//     mq.addEventListener("change", update);
//     return () => mq.removeEventListener("change", update);
//   }, []);

//   /* ========= OBSERVER ========= */
//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([e]) => e.isIntersecting && setVisible(true),
//       { threshold: 0.2 }
//     );
//     sectionRef.current && obs.observe(sectionRef.current);
//     return () => obs.disconnect();
//   }, []);

//   /* ========= IDLE START ========= */
//   useEffect(() => {
//     if (!visible) return;
//     const id = requestIdleCallback(() => setReady(true));
//     return () => cancelIdleCallback(id);
//   }, [visible]);

//   /* ========= IMAGES ========= */
//   const images = [
//     A1, A2, A3, A4, A5, A6,
//     A7, A8, A9, A10, A11, A12,
//     A13, A14, A15, A16, A17, A18,C
//   ];

//   const strips = useMemo(
//     () => [
//       images.slice(0, 6),
//       images.slice(6, 12),
//       images.slice(12, 19),
//     ],
//     []
//   );

//   const imgW = isMobile ? 220 : 320;
//   const imgH = isMobile ? 150 : 210;
//   const gap = isMobile ? 14 : 20;

//   return (
//     <>
//       <style>{`
//         .pg-section {
//           min-height: 100vh;
//           padding: ${isMobile ? "40px 0 60px" : "70px 0"};
//           background: var(--bg-gradient);
//           text-align: center;
//           content-visibility: auto;
//         }

//         .pg-strip {
//           overflow: hidden;
//           margin-bottom: 18px;
//         }

//         .pg-track {
//           display: flex;
//           gap: ${gap}px;
//           will-change: transform;
//         }

//         .pg-left { animation: pgLeft 40s linear infinite; }
//         .pg-right { animation: pgRight 44s linear infinite; }
//         .paused { animation-play-state: paused; }

//         @keyframes pgLeft {
//           to { transform: translate3d(-${(imgW + gap) * 6}px,0,0); }
//         }
//         @keyframes pgRight {
//           from { transform: translate3d(-${(imgW + gap) * 6}px,0,0); }
//           to { transform: translate3d(0,0,0); }
//         }

//         .pg-box {
//           position: relative;
//           width: ${imgW}px;
//           height: ${imgH}px;
//           border-radius: 12px;
//           background: #e4e6eb;
//           overflow: hidden;
//           flex-shrink: 0;
//         }

//         .pg-box::before {
//           content: "";
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             90deg,
//             #ebe4e4ff 0%,
//             #f0f2f5 40%,
//             #e4e6eb 80%
//           );
//           transform: translateX(-100%);
//           animation: shimmer 1.4s infinite;
//         }

//         .loaded::before {
//           animation: none;
//           display: none;
//         }

//         @keyframes shimmer {
//           100% { transform: translateX(100%); }
//         }

//         .pg-img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           opacity: 0;
//           transition: opacity 0.5s ease;
//         }

//         .loaded .pg-img {
//           opacity: 1;
//         }
//       `}</style>

//       <section ref={sectionRef} className="pg-section">
//         <h2 style={{ fontSize: isMobile ? "2rem" : "2.8rem", marginBottom: 30 }}>
//           Past Glimpses
//         </h2>

//         {strips.map((imgs, idx) => (
//           <div key={idx} className="pg-strip">
//             <div
//               className={`pg-track ${
//                 idx % 2 ? "pg-right" : "pg-left"
//               } ${!ready ? "paused" : ""}`}
//             >
//               {(isMobile ? imgs : [...imgs, ...imgs]).map((src, i) => (
//                 <ImageBox key={i} src={src} />
//               ))}
//             </div>
//           </div>
//         ))}
//       </section>
//     </>
//   );
// }

// /* ===== IMAGE BOX ===== */
// function ImageBox({ src }) {
//   const [loaded, setLoaded] = useState(false);

//   return (
//     <div className={`pg-box ${loaded ? "loaded" : ""}`}>
//       <img
//         src={src}
//         className="pg-img"
//         loading="lazy"
//         decoding="async"
//         onLoad={() => setLoaded(true)}
//         alt=""
//       />
//     </div>
//   );
// }













import React, { useEffect, useMemo, useRef, useState } from "react";

/* ===== LOCAL IMAGES ===== */
import A1 from "../assets/PastPhotos/A1.JPG";
import A2 from "../assets/PastPhotos/A2.JPG";
import A3 from "../assets/PastPhotos/A3.JPG";
import A4 from "../assets/PastPhotos/A4.JPG";
import A5 from "../assets/PastPhotos/A5.JPG";
import A6 from "../assets/PastPhotos/A6.JPG";
import A7 from "../assets/PastPhotos/A7.JPG";
import A8 from "../assets/PastPhotos/A8.JPG";
import A9 from "../assets/PastPhotos/A9.JPG";
import A10 from "../assets/PastPhotos/A10.JPG";
import A11 from "../assets/PastPhotos/A11.JPG";
import A12 from "../assets/PastPhotos/A12.JPG";
import A13 from "../assets/PastPhotos/A13.JPG";
import A14 from "../assets/PastPhotos/A14.JPG";
import A15 from "../assets/PastPhotos/A15.JPG";
import A16 from "../assets/PastPhotos/A16.JPG";
import A17 from "../assets/PastPhotos/A17.JPG";
import A18 from "../assets/PastPhotos/A18.JPG";
import C from "../assets/PastPhotos/C.png";

/**
 * PastGlimpses — PERFORMANCE SAFE (ORIGINAL LOOK)
 * ✔ Same animation
 * ✔ Same shimmer
 * ✔ Same layout
 * ✔ No hang
 */

export default function PastGlimpses() {
  const sectionRef = useRef(null);
  const startedRef = useRef(false);

  const [isMobile, setIsMobile] = useState(false);
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);

  /* ========= MEDIA ========= */
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  /* ========= VISIBILITY ========= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          setVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ========= IDLE START ========= */
  useEffect(() => {
    if (!visible) return;

    const idleId =
      "requestIdleCallback" in window
        ? requestIdleCallback(() => setReady(true))
        : setTimeout(() => setReady(true), 200);

    return () => {
      if ("cancelIdleCallback" in window) cancelIdleCallback(idleId);
      else clearTimeout(idleId);
    };
  }, [visible]);

  /* ========= IMAGES ========= */
  const images = [
    A1, A2, A3, A4, A5, A6,
    A7, A8, A9, A10, A11, A12,
    A13, A14, A15, A16, A17, A18, C,
  ];

  const strips = useMemo(
    () => [
      images.slice(0, 6),
      images.slice(6, 12),
      images.slice(12, 19),
    ],
    []
  );

  const imgW = isMobile ? 220 : 320;
  const imgH = isMobile ? 150 : 210;
  const gap = isMobile ? 14 : 20;

  return (
    <>
      <style>{`
        .pg-section {
          min-height: 100vh;
          padding: ${isMobile ? "40px 0 60px" : "70px 0"};
          background: var(--bg-gradient);
          text-align: center;
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

        .pg-left { animation: pgLeft 40s linear infinite; }
        .pg-right { animation: pgRight 44s linear infinite; }
        .paused { animation-play-state: paused; }

        @keyframes pgLeft {
          to { transform: translate3d(-${(imgW + gap) * 6}px,0,0); }
        }

        @keyframes pgRight {
          from { transform: translate3d(-${(imgW + gap) * 6}px,0,0); }
          to { transform: translate3d(0,0,0); }
        }

        .pg-box {
          position: relative;
          width: ${imgW}px;
          height: ${imgH}px;
          border-radius: 12px;
          background: #e4e6eb;
          overflow: hidden;
          flex-shrink: 0;
        }

        .pg-box::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            #ebe4e4ff 0%,
            #f0f2f5 40%,
            #e4e6eb 80%
          );
          transform: translateX(-100%);
          animation: shimmer 1.4s infinite;
        }

        .loaded::before {
          animation: none;
          display: none;
        }

        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }

        .pg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .loaded .pg-img {
          opacity: 1;
        }
      `}</style>

      <section ref={sectionRef} className="pg-section">
        <h2 style={{ fontSize: isMobile ? "2rem" : "2.8rem", marginBottom: 30 , color: "#FFF7F1"}}>
          Past Glimpses
        </h2>

        {strips.map((imgs, idx) => (
          <div key={idx} className="pg-strip">
            <div
              className={`pg-track ${
                idx % 2 ? "pg-right" : "pg-left"
              } ${!ready ? "paused" : ""}`}
            >
              {(isMobile ? imgs : [...imgs, ...imgs]).map((src, i) => (
                <ImageBox key={i} src={src} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

/* ===== IMAGE BOX ===== */
function ImageBox({ src }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`pg-box ${loaded ? "loaded" : ""}`}>
      <img
        src={src}
        className="pg-img"
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        alt=""
      />
    </div>
  );
}
