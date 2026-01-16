// import { useEffect, useRef } from "react";

// const Contact = () => {
//   const sectionRef = useRef(null);
//   const createdRef = useRef(false);

//   useEffect(() => {
//     const createHologramElements = () => {
//       const lines = document.getElementById("holo-lines");
//       const nodes = document.getElementById("holo-nodes");
//       const streams = document.getElementById("data-streams");

//       if (!lines || !nodes || !streams) return;

//       lines.innerHTML = "";
//       nodes.innerHTML = "";
//       streams.innerHTML = "";

//       const isMobile = window.innerWidth < 768;
//       const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

//       const lineCount = isMobile ? 8 : isTablet ? 10 : 12;
//       const nodeCount = isMobile ? 15 : isTablet ? 20 : 25;
//       const streamCount = isMobile ? 12 : isTablet ? 16 : 20;

//       // scan lines
//       for (let i = 0; i < lineCount; i++) {
//         const line = document.createElement("div");
//         line.className = "holo-line";
//         line.style.left = Math.random() * 100 + "%";
//         line.style.top = Math.random() * 100 + "%";
//         line.style.transform = `rotate(${Math.random() * 360}deg)`;
//         line.style.animationDelay = Math.random() * 6 + "s";
//         lines.appendChild(line);
//       }

//       // nodes
//       for (let i = 0; i < nodeCount; i++) {
//         const node = document.createElement("div");
//         node.className = "holo-node";
//         node.style.left = Math.random() * 100 + "%";
//         node.style.top = Math.random() * 100 + "%";
//         node.style.animationDelay = Math.random() * 4 + "s";
//         nodes.appendChild(node);
//       }

//       // data streams
//       for (let i = 0; i < streamCount; i++) {
//         const stream = document.createElement("div");
//         stream.className = "data-stream";
//         stream.textContent = Math.random()
//           .toString(36)
//           .substring(2, 8)
//           .toUpperCase();
//         stream.style.left = Math.random() * 100 + "%";
//         stream.style.animationDelay = Math.random() * 10 + "s";
//         stream.style.animationDuration = Math.random() * 8 + 6 + "s";
//         streams.appendChild(stream);
//       }
//     };

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !createdRef.current) {
//           createdRef.current = true;
//           createHologramElements();
//         }
//       },
//       { threshold: 0.25 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const contacts = [
//     {
//       title: "Sponsorship & Exhibition",
//       name: "Priyansh Saharawat",
//       email: "priyansh@fintrexmedia.com",
//       phone: "7011499056",
//     },
//     {
//       title: "Speaking & Award Nomination",
//       name: "Priyanshi Choudhary",
//       email: "priyanshi@fintrexmedia.com",
//       phone: "8755676010",
//     },
//     {
//       title: "Delegate Opportunity",
//       name: "Basant Sharma",
//       email: "basant@fintrexmedia.com",
//       phone: "7505024107",
//     },
//   ];

//   return (
//     <section id="contact" ref={sectionRef} style={styles.section}>
//       {/* BACKGROUND */}
//       <div className="hologram-container">
//         <div className="holo-grid"></div>
//         <div className="holo-panel panel-1"></div>
//         <div className="holo-panel panel-2"></div>
//         <div className="holo-panel panel-3"></div>

//         <div id="holo-lines"></div>
//         <div id="holo-nodes"></div>
//         <div id="data-streams"></div>

//         <div className="holo-ring ring-1"></div>
//         <div className="holo-ring ring-2"></div>
//         <div className="holo-ring ring-3"></div>
//       </div>

//       {/* CONTENT */}
//       <div style={styles.content}>
//         <h2 style={styles.heading}>Contact Us</h2>

//         <div style={styles.cards}>
//           {contacts.map((c, i) => (
//             <div key={i} style={styles.card}>
//               <h3 style={styles.cardTitle}>{c.title}</h3>
//               <p style={styles.name}>{c.name}</p>
//               <p style={styles.email}>{c.email}</p>
//               <p style={styles.phone}>{c.phone}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style>{css}</style>
//     </section>
//   );
// };

// export default Contact;

// /* ================= STYLES (REQUIRED – DO NOT DELETE) ================= */

// const styles = {
//   section: {
//     position: "relative",
//     minHeight: "100vh",
//     overflow: "hidden",
//     background: "var(--color-black)",
//     display: "flex",
//     alignItems: "center",
//     padding: "40px 0",
//   },
//   content: {
//     position: "relative",
//     zIndex: 10,
//     width: "100%",
//     padding: "40px 20px",
//     textAlign: "center",
//     color: "var(--text-primary)",
//   },
//   heading: {
//     fontSize: "clamp(32px, 5vw, 48px)",
//     fontWeight: 700,
//     marginBottom: "30px",
//   },
//   cards: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//     gap: "24px",
//     maxWidth: "1200px",
//     margin: "0 auto",
//   },
//   card: {
//     background: "rgba(255,255,255,0.04)",
//     border: "1px solid rgba(225,6,0,0.45)",
//     backdropFilter: "blur(14px)",
//     borderRadius: "16px",
//     padding: "26px",
//   },
//   cardTitle: {
//     color: "var(--color-red)",
//     fontSize: "20px",
//     marginBottom: "14px",
//     fontWeight: 600,
//   },
//   name: {
//     fontWeight: 600,
//     marginBottom: "8px",
//   },
//   email: {
//     opacity: 0.85,
//     marginBottom: "6px",
//     wordBreak: "break-word",
//   },
//   phone: {
//     opacity: 0.85,
//   },
// };

// /* ================= CSS ================= */

// const css = `
// .hologram-container {
//   position:absolute;
//   inset:0;
//   background:
//     radial-gradient(circle at 20% 30%, rgba(225,6,0,0.1), transparent 50%),
//     radial-gradient(circle at 80% 70%, rgba(122,0,0,0.1), transparent 50%);
//   perspective:1000px;
//   z-index:1;
//   overflow:hidden;
// }

// .holo-grid {
//   position:absolute;
//   width:200%;
//   height:200%;
//   background-image:
//     linear-gradient(rgba(225,6,0,0.1) 1px, transparent 1px),
//     linear-gradient(90deg, rgba(225,6,0,0.1) 1px, transparent 1px),
//     linear-gradient(rgba(225,6,0,0.05) 1px, transparent 1px),
//     linear-gradient(90deg, rgba(225,6,0,0.05) 1px, transparent 1px);
//   background-size:50px 50px, 50px 50px, 10px 10px, 10px 10px;
//   animation:holo-shift 30s linear infinite;
// }

// .holo-panel {
//   position:absolute;
//   background:linear-gradient(135deg, rgba(225,6,0,0.1), rgba(122,0,0,0.05));
//   border:1px solid rgba(225,6,0,0.3);
//   border-radius:8px;
//   backdrop-filter:blur(10px);
//   animation:panel-float 25s infinite ease-in-out;
// }

// .panel-1{width:200px;height:150px;top:20%;left:5%}
// .panel-2{width:180px;height:120px;top:40%;left:60%}
// .panel-3{width:150px;height:100px;top:70%;left:15%}

// .holo-line{
//   position:absolute;
//   height:2px;
//   background:linear-gradient(90deg,transparent,var(--color-red),transparent);
//   animation:scan-line 6s infinite linear;
// }

// .holo-node{
//   position:absolute;
//   width:10px;
//   height:10px;
//   background:var(--color-red);
//   border-radius:50%;
//   box-shadow:0 0 15px var(--color-red);
//   animation:node-glow 4s infinite alternate;
// }

// .data-stream{
//   position:absolute;
//   font-family:monospace;
//   color:var(--color-red);
//   animation:data-fall 10s infinite linear;
//   font-size:12px;
//   white-space:nowrap;
// }

// .holo-ring{
//   position:absolute;
//   border:2px solid rgba(225,6,0,0.4);
//   border-radius:50%;
//   animation:ring-expand 15s infinite linear;
// }

// .ring-1{width:80px;height:80px;top:30%;left:30%}
// .ring-2{width:150px;height:150px;top:50%;left:50%}
// .ring-3{width:220px;height:220px;top:40%;left:40%}

// @keyframes holo-shift{
//   50%{transform:translate(-40px,30px)}
// }
// @keyframes panel-float{
//   50%{transform:translateZ(40px)}
// }
// @keyframes scan-line{
//   from{width:0;opacity:0}
//   to{width:300px;opacity:0}
// }
// @keyframes node-glow{
//   50%{transform:scale(1.3)}
// }
// @keyframes data-fall{
//   from{transform:translateY(-100px)}
//   to{transform:translateY(100vh)}
// }
// @keyframes ring-expand{
//   from{transform:scale(0.5);opacity:.8}
//   to{transform:scale(2);opacity:0}
// }
// `;





import React from "react";

const Contact = () => {
  const contacts = [
    {
      title: "Sponsorship & Exhibition",
      name: "Priyansh Saharawat",
      email: "priyansh@fintrexmedia.com",
      phone: "7011499056",
    },
    {
      title: "Speaking & Award Nomination",
      name: "Priyanshi Chaudhary",
      email: "priyanshi@fintrexmedia.com",
      phone: "8755676010",
    },
    {
      title: "Delegate & Award Nomination Opportunity",
      name: "Basant Sharma",
      email: "basant@fintrexmedia.com",
      phone: "7505024107",
    },
    {
      title: "Delegate Opportunity",
      name: "Jyoti Dhiman",
      email: "jyoti@fintrexmedia.com",
      phone: "9536307418",
    },
  ];

  return (
    <section
      id="contact"
      style={{
        position: "relative",
        minHeight: "auto",
        overflow: "hidden",
        background: "var(--color-black, #000000)",
        display: "flex",
        alignItems: "center",
        padding: "40px 0",
      }}
    >
      {/* Static Background */}
      <div
        style={{
          position: "absolute",
          inset: "0",
          background: `
            radial-gradient(circle at 20% 30%, rgba(225,6,0,0.1), transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(122,0,0,0.1), transparent 50%),
            linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(20,0,0,0.9) 100%)
          `,
          perspective: "1000px",
          zIndex: "1",
          overflow: "hidden",
        }}
      >
        {/* Static Grid */}
        <div
          style={{
            position: "absolute",
            width: "200%",
            height: "200%",
            backgroundImage: `
              linear-gradient(rgba(225,6,0,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(225,6,0,0.08) 1px, transparent 1px),
              linear-gradient(rgba(225,6,0,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(225,6,0,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px, 50px 50px, 10px 10px, 10px 10px",
          }}
        ></div>

        {/* Static Panels */}
        <div
          style={{
            position: "absolute",
            width: "200px",
            height: "150px",
            top: "20%",
            left: "5%",
            background: "linear-gradient(135deg, rgba(225,6,0,0.12), rgba(122,0,0,0.08))",
            border: "1px solid rgba(225,6,0,0.25)",
            borderRadius: "8px",
            backdropFilter: "blur(10px)",
            transform: "rotateX(10deg) rotateY(-15deg)",
          }}
        ></div>

        <div
          style={{
            position: "absolute",
            width: "180px",
            height: "120px",
            top: "40%",
            left: "60%",
            background: "linear-gradient(135deg, rgba(225,6,0,0.12), rgba(122,0,0,0.08))",
            border: "1px solid rgba(225,6,0,0.25)",
            borderRadius: "8px",
            backdropFilter: "blur(10px)",
            transform: "rotateX(-15deg) rotateY(10deg)",
          }}
        ></div>

        <div
          style={{
            position: "absolute",
            width: "150px",
            height: "100px",
            top: "70%",
            left: "15%",
            background: "linear-gradient(135deg, rgba(225,6,0,0.12), rgba(122,0,0,0.08))",
            border: "1px solid rgba(225,6,0,0.25)",
            borderRadius: "8px",
            backdropFilter: "blur(10px)",
            transform: "rotateX(5deg) rotateY(15deg)",
          }}
        ></div>

        {/* Static Lines */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`line-${i}`}
            style={{
              position: "absolute",
              height: "2px",
              width: `${200 + Math.random() * 100}px`,
              background: "linear-gradient(90deg, transparent, rgba(225,6,0,0.7), transparent)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              opacity: "0.3",
            }}
          ></div>
        ))}

        {/* Static Nodes */}
        {[...Array(25)].map((_, i) => (
          <div
            key={`node-${i}`}
            style={{
              position: "absolute",
              width: "8px",
              height: "8px",
              background: "rgba(225,6,0,0.8)",
              borderRadius: "50%",
              boxShadow: "0 0 15px rgba(225,6,0,0.6)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}

        {/* Static Data Streams */}
        {[...Array(20)].map((_, i) => {
          const streamText = Math.random()
            .toString(36)
            .substring(2, 8)
            .toUpperCase();

          return (
            <div
              key={`stream-${i}`}
              style={{
                position: "absolute",
                fontFamily: "monospace",
                color: "rgba(225,6,0,0.7)",
                fontSize: "12px",
                whiteSpace: "nowrap",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: "0.6",
              }}
            >
              {streamText}
            </div>
          );
        })}

        {/* Static Rings */}
        <div
          style={{
            position: "absolute",
            width: "80px",
            height: "80px",
            top: "30%",
            left: "30%",
            border: "2px solid rgba(225,6,0,0.3)",
            borderRadius: "50%",
            transform: "scale(1.2)",
            opacity: "0.4",
          }}
        ></div>

        <div
          style={{
            position: "absolute",
            width: "150px",
            height: "150px",
            top: "50%",
            left: "50%",
            border: "2px solid rgba(225,6,0,0.3)",
            borderRadius: "50%",
            transform: "translate(-50%, -50%) scale(1.5)",
            opacity: "0.3",
          }}
        ></div>

        <div
          style={{
            position: "absolute",
            width: "220px",
            height: "220px",
            top: "40%",
            left: "40%",
            border: "2px solid rgba(225,6,0,0.3)",
            borderRadius: "50%",
            transform: "scale(1.8)",
            opacity: "0.2",
          }}
        ></div>
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: "10",
          width: "100%",
          padding: "40px 20px",
          textAlign: "center",
          color: "var(--text-primary, #ffffff)",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: "700",
            marginBottom: "30px",
            textShadow: "0 2px 10px rgba(0,0,0,0.5)",
          }}
        >
          Contact Us
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "24px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {contacts.map((c, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(225,6,0,0.45)",
                backdropFilter: "blur(14px)",
                borderRadius: "16px",
                padding: "26px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
                flex: "0 0 300px",
                width: "300px",
              }}
              className="contact-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(225,6,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <h3
                style={{
                  color: "var(--color-red, #e10600)",
                  fontSize: "20px",
                  marginBottom: "14px",
                  fontWeight: "600",
                  textShadow: "0 0 10px rgba(225,6,0,0.3)",
                }}
              >
                {c.title}
              </h3>
              <p
                style={{
                  fontWeight: "600",
                  marginBottom: "8px",
                  fontSize: "18px",
                }}
              >
                {c.name}
              </p>
              <p
                style={{
                  opacity: "0.85",
                  marginBottom: "6px",
                  wordBreak: "break-word",
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                {c.email}
              </p>
              <p
                style={{
                  opacity: "0.85",
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                {c.phone}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (min-width: 769px) {
          .contact-card {
            width: 350px;
            flex: 0 0 320px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;