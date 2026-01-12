import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Mailer() {
  const navigate = useNavigate();
  const [hoverBtn, setHoverBtn] = useState(false);
  const imageSrc = "/Mailer.jpg";
  const targetLink = "https://www.edutomorrow.in";

  async function imageUrlToDataUrl(url) {
    const resp = await fetch(url, { cache: "no-cache" });
    if (!resp.ok) throw new Error("Failed to fetch image");
    const blob = await resp.blob();
    return await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

  function buildHtml(imgSrc) {
    return `
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" 
      style="background:#f5f7fb;padding:20px 0;">
        <tr><td align="center">
          <a href="${targetLink}" target="_blank">
            <img src="${imgSrc}" width="100%" 
            style="display:block;margin:0 auto;max-width:1100px;border-radius:12px;" />
          </a>
        </td></tr>
      </table>
    `;
  }

  const handleCopy = async () => {
    try {
      let imgSrc;
      try {
        imgSrc = await imageUrlToDataUrl(window.location.origin + imageSrc);
      } catch {
        imgSrc = window.location.origin + imageSrc;
      }
      const htmlContent = buildHtml(imgSrc);
      await navigator.clipboard.write([
        new ClipboardItem({
          "text/html": new Blob([htmlContent], { type: "text/html" }),
          "text/plain": new Blob(["Edutomorrow Email Template"], { type: "text/plain" }),
        }),
      ]);
      alert("✅ Copied! Paste in Gmail.");
    } catch {
      alert("❌ Copy failed. Try Chrome or Edge.");
    }
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
    transition: "var(--transition-fast)",
    boxShadow: hover
      ? "0 0 18px var(--color-red)"
      : "0 0 8px rgba(225,6,0,0.5)",
    whiteSpace: "nowrap",
  });

  return (
    <>
      <style>{`
        .back-btn {
          position: fixed;
          top: 22px;
          left: 22px;
          z-index: 999;

          display: flex;
          align-items: center;
          gap: 6px;

          padding: 10px 20px;
          border-radius: 30px;

          background: var(--bg-gradient);
          color: var(--color-white);

          border: 1px solid white);
          font-size: 0.95rem;
          font-weight: 600;

          cursor: pointer;
          backdrop-filter: blur(10px);

          transition: 
            background 0.25s ease,
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .back-btn:hover {
          background: var(--bg-gradient);
          box-shadow: 0 0 12px rgba(225, 6, 0, 0.6);
          transform: translateY(-2px);
        }
      `}</style>
      <div style={{ textAlign: "center", marginTop: 50, backgroundColor: "white", paddingBottom: 40, paddingTop: 20 }}>
        <img src={imageSrc} style={{ width: "100%", maxWidth: 1100, display: "block", margin: "0 auto", borderRadius: 12, boxShadow: "0 8px 24px rgba(0,0,0,0.15)", marginBottom: 30 }} alt="Edutomorrow" />
        <button 
          style={glowButton(hoverBtn)} 
          onMouseEnter={() => setHoverBtn(true)} 
          onMouseLeave={() => setHoverBtn(false)} 
          onClick={handleCopy}
        >
          Copy Design for Email
        </button>
      </div>
      {/* 🔙 BACK BUTTON */}
      <button
        onClick={() => navigate("/")}
        className="back-btn"
        aria-label="Go back to home"
      >
        ← Back
      </button>
    </>
  );
}
