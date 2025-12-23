import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    const createHologramElements = () => {
      const lines = document.getElementById("holo-lines");
      const nodes = document.getElementById("holo-nodes");
      const streams = document.getElementById("data-streams");

      // Clear existing elements
      lines.innerHTML = '';
      nodes.innerHTML = '';
      streams.innerHTML = '';

      // Determine number of elements based on screen size
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
      
      const lineCount = isMobile ? 8 : (isTablet ? 10 : 12);
      const nodeCount = isMobile ? 15 : (isTablet ? 20 : 25);
      const streamCount = isMobile ? 12 : (isTablet ? 16 : 20);

      // scan lines
      for (let i = 0; i < lineCount; i++) {
        const line = document.createElement("div");
        line.className = "holo-line";
        line.style.left = Math.random() * 100 + "%";
        line.style.top = Math.random() * 100 + "%";
        line.style.transform = `rotate(${Math.random() * 360}deg)`;
        line.style.animationDelay = Math.random() * 6 + "s";
        lines.appendChild(line);
      }

      // nodes
      for (let i = 0; i < nodeCount; i++) {
        const node = document.createElement("div");
        node.className = "holo-node";
        node.style.left = Math.random() * 100 + "%";
        node.style.top = Math.random() * 100 + "%";
        node.style.animationDelay = Math.random() * 4 + "s";
        nodes.appendChild(node);
      }

      // data streams
      for (let i = 0; i < streamCount; i++) {
        const stream = document.createElement("div");
        stream.className = "data-stream";
        stream.textContent = Math.random()
          .toString(36)
          .substring(2, 8)
          .toUpperCase();
        stream.style.left = Math.random() * 100 + "%";
        stream.style.animationDelay = Math.random() * 10 + "s";
        stream.style.animationDuration = Math.random() * 8 + 6 + "s";
        streams.appendChild(stream);
      }
    };

    // Initial creation
    createHologramElements();

    // Recreate on resize
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(createHologramElements, 250);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const contacts = [
    {
      title: "Sponsorship & Exhibition",
      name: "Priyansh Saharawat",
      email: "priyansh@fintrexmedia.com",
      phone: "7011499056",
    },
    {
      title: "Speaking & Award Nomination",
      name: "Priyanshi Choudhary",
      email: "priyanshi@fintrexmedia.com",
      phone: "8755676010",
    },
    {
      title: "Delegate Opportunity",
      name: "Basant Sharma",
      email: "basant@fintrexmedia.com",
      phone: "7505024107",
    },
  ];

  return (
    <section id="contact" style={styles.section}>
      {/* BACKGROUND */}
      <div className="hologram-container">
        <div className="holo-grid"></div>
        <div className="holo-panel panel-1"></div>
        <div className="holo-panel panel-2"></div>
        <div className="holo-panel panel-3"></div>
        <div id="holo-lines"></div>
        <div id="holo-nodes"></div>
        <div id="data-streams"></div>
        <div className="holo-ring ring-1"></div>
        <div className="holo-ring ring-2"></div>
        <div className="holo-ring ring-3"></div>
      </div>

      {/* CONTENT */}
      <div style={styles.content}>
        <h2 style={styles.heading}>Contact Us</h2>
        {/* <p style={styles.subText}>
          Get in touch with the right team
        </p> */}

        <div style={styles.cards}>
          {contacts.map((c, i) => (
            <div key={i} style={styles.card}>
              <h3 style={styles.cardTitle}>{c.title}</h3>
              <p style={styles.name}>{c.name}</p>
              <p style={styles.email}>{c.email}</p>
              <p style={styles.phone}>{c.phone}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{css}</style>
    </section>
  );
};

export default Contact;

/* ================= JS STYLES ================= */

const styles = {
  section: {
    position: "relative",
    minHeight: "100vh",
    height: "auto",
    overflow: "hidden",
    background: "var(--color-black)",
    padding: "40px 0",
    display: "flex",
    alignItems: "center",
  },
  content: {
    position: "relative",
    zIndex: 10,
    width: "100%",
    padding: "40px 20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    color: "var(--text-primary)",
  },
  heading: {
    fontSize: "clamp(32px, 5vw, 48px)",
    marginBottom: "8px",
    fontWeight: "700",
  },
  subText: {
    color: "var(--text-secondary)",
    marginBottom: "40px",
    fontSize: "clamp(16px, 2vw, 18px)",
  },
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
    maxWidth: "1200px",
    margin: "40px auto 0",
    width: "100%",
  },
  card: {
    background: "rgba(255, 255, 255, 0.04)",
    border: "1px solid rgba(225,6,0,0.45)",
    backdropFilter: "blur(14px)",
    borderRadius: "16px",
    padding: "clamp(20px, 4vw, 28px)",
    transition: "transform 0.4s ease, box-shadow 0.4s ease",
    width: "100%",
  },
  cardTitle: {
    color: "var(--color-red)",
    fontSize: "clamp(18px, 2.5vw, 22px)",
    marginBottom: "16px",
    fontWeight: "600",
    lineHeight: "1.3",
  },
  name: {
    fontWeight: "600",
    fontSize: "clamp(17px, 2vw, 20px)",
    marginBottom: "10px",
    color: "var(--text-primary)",
  },
  email: {
    color: "var(--text-secondary)",
    marginBottom: "8px",
    fontSize: "clamp(14px, 1.8vw, 16px)",
    wordBreak: "break-all",
  },
  phone: {
    color: "var(--text-secondary)",
    fontSize: "clamp(14px, 1.8vw, 16px)",
  },
};

/* ================= CSS ================= */

const css = `
.hologram-container {
  position:absolute;
  inset:0;
  background:
    radial-gradient(circle at 20% 30%, rgba(225,6,0,0.1), transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(122,0,0,0.1), transparent 50%);
  perspective:1000px;
  z-index:1;
  overflow:hidden;
}

.holo-grid {
  position:absolute;
  width:200%;
  height:200%;
  background-image:
    linear-gradient(rgba(225,6,0,0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(225,6,0,0.1) 1px, transparent 1px),
    linear-gradient(rgba(225,6,0,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(225,6,0,0.05) 1px, transparent 1px);
  background-size:50px 50px, 50px 50px, 10px 10px, 10px 10px;
  animation:holo-shift 30s linear infinite;
}

.holo-panel {
  position:absolute;
  background:linear-gradient(135deg, rgba(225,6,0,0.1), rgba(122,0,0,0.05));
  border:1px solid rgba(225,6,0,0.3);
  border-radius:8px;
  backdrop-filter:blur(10px);
  animation:panel-float 25s infinite ease-in-out;
}

.panel-1{width:200px;height:150px;top:20%;left:5%}
.panel-2{width:180px;height:120px;top:40%;left:60%}
.panel-3{width:150px;height:100px;top:70%;left:15%}

.holo-line{
  position:absolute;
  height:2px;
  background:linear-gradient(90deg,transparent,var(--color-red),transparent);
  animation:scan-line 6s infinite linear;
  width:0;
  opacity:0;
}

.holo-node{
  position:absolute;
  width:10px;
  height:10px;
  background:var(--color-red);
  border-radius:50%;
  box-shadow:0 0 15px var(--color-red);
  animation:node-glow 4s infinite alternate;
}

.data-stream{
  position:absolute;
  font-family:monospace;
  color:var(--color-red);
  animation:data-fall 10s infinite linear;
  font-size:12px;
  white-space:nowrap;
}

.holo-ring{
  position:absolute;
  border:2px solid rgba(225,6,0,0.4);
  border-radius:50%;
  animation:ring-expand 15s infinite linear;
}

.ring-1{width:80px;height:80px;top:30%;left:30%}
.ring-2{width:150px;height:150px;top:50%;left:50%}
.ring-3{width:220px;height:220px;top:40%;left:40%}

@keyframes holo-shift{
  0%{transform:translate(0,0)}
  50%{transform:translate(-40px,30px)}
  100%{transform:translate(0,0)}
}
@keyframes panel-float{
  50%{transform:translateZ(40px)}
}
@keyframes scan-line{
  from{width:0;opacity:0}
  to{width:300px;opacity:0}
}
@keyframes node-glow{
  50%{transform:scale(1.3)}
}
@keyframes data-fall{
  from{transform:translateY(-100px)}
  to{transform:translateY(100vh)}
}
@keyframes ring-expand{
  from{transform:scale(0.5);opacity:.8}
  to{transform:scale(2);opacity:0}
}

/* Responsive Media Queries */
@media (max-width: 1023px) {
  .panel-1{width:150px;height:100px;top:15%;left:5%}
  .panel-2{width:120px;height:80px;top:35%;left:70%}
  .panel-3{width:100px;height:70px;top:75%;left:10%}
  
  .ring-1{width:60px;height:60px;top:25%;left:25%}
  .ring-2{width:120px;height:120px;top:45%;left:55%}
  .ring-3{width:180px;height:180px;top:65%;left:35%}
  
  @keyframes scan-line{
    from{width:0;opacity:0}
    to{width:200px;opacity:0}
  }
}

@media (max-width: 767px) {
  .hologram-container {
    background:
      radial-gradient(circle at 10% 20%, rgba(225,6,0,0.08), transparent 40%),
      radial-gradient(circle at 90% 80%, rgba(122,0,0,0.08), transparent 40%);
  }
  
  .holo-grid {
    background-size:30px 30px, 30px 30px, 8px 8px, 8px 8px;
  }
  
  .panel-1, .panel-2, .panel-3 {
    display:none;
  }
  
  .ring-1, .ring-2, .ring-3 {
    display:none;
  }
  
  .holo-node {
    width:8px;
    height:8px;
    box-shadow:0 0 10px var(--color-red);
  }
  
  .data-stream {
    font-size:10px;
  }
  
  @keyframes scan-line{
    from{width:0;opacity:0}
    to{width:150px;opacity:0}
  }
}

@media (max-width: 480px) {
  .cards {
    grid-template-columns:1fr !important;
    max-width:350px !important;
    gap:20px !important;
  }
  
  .card {
    padding:20px !important;
  }
  
  .holo-node {
    width:6px;
    height:6px;
  }
  
  @keyframes scan-line{
    from{width:0;opacity:0}
    to{width:100px;opacity:0}
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .cards {
    grid-template-columns:repeat(2, 1fr);
    max-width:700px;
  }
  
  .card:nth-child(3) {
    grid-column:span 2;
    max-width:400px;
    justify-self:center;
  }
}

@media (min-width: 1024px) {
  .section {
    padding:80px 0;
  }
  
  .content {
    padding:60px 40px;
  }
}
`;