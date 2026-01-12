import { useState } from "react";

function UpdateBanner({ title, message }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 999999
      }}
    >
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); box-shadow: 0 10px 25px rgba(0,0,0,0.25); border: 2px solid rgba(255, 75, 43, 0.3); }
          50% { transform: scale(1.03); box-shadow: 0 10px 35px rgba(255, 75, 43, 0.5); border: 3px solid rgba(255, 75, 43, 0.8); }
          100% { transform: scale(1); box-shadow: 0 10px 25px rgba(0,0,0,0.25); border: 2px solid rgba(255, 75, 43, 0.3); }
        }
        @media (max-width: 768px) {
          .update-banner-container {
            bottom: 10px !important;
            right: auto !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
          }
          .update-banner {
            maxWidth: 300px !important;
            padding: 10px 14px !important;
            flexDirection: column !important;
            gap: 10px !important;
          }
          .update-banner div div:first-child {
            fontSize: 12px !important;
          }
          .update-banner div div:last-child {
            fontSize: 11px !important;
          }
          .update-banner button {
            padding: 4px 10px !important;
            fontSize: 11px !important;
            alignSelf: flex-end !important;
          }
        }
      `}</style>
      <div
        className="update-banner"
        style={{
          background: "linear-gradient(135deg, #ff4b2b, #ff416c)",
          color: "#ffffffff",
          padding: "16px 20px",
          borderRadius: "16px",
          display: "flex",
          alignItems: "center",
          gap: "16px",
          boxShadow: "0 12px 30px rgba(0,0,0,0.3)",
          fontFamily: "Inter, Arial, sans-serif",
          maxWidth: "400px",
          animation: "pulse 6s infinite",
          border: "2px solid rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(10px)"
        }}
      >
        <div style={{ flex: 1, wordWrap: "break-word", overflowWrap: "break-word" }}>
          <div style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff", marginBottom: "4px" }}>
            {title}
          </div>
          <div style={{ fontSize: "14px", opacity: 0.95, color: "#ffffff", lineHeight: "1.4" }}>
            {message}
          </div>
        </div>

        <button
          onClick={() => window.location.reload()}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            background: hover ? "#ffe6eb" : "#ffffff",
            color: "#ff416c",
            border: "none",
            borderRadius: "24px",
            padding: "8px 16px",
            fontSize: "14px",
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 1s ease",
            transform: hover ? "scale(1.03)" : "scale(1.03)",
            boxShadow: hover ? "0 4px 12px rgba(255, 65, 108, 0.3)" : "none",
            whiteSpace: "nowrap",
            flexShrink: 0
          }}
        >
          Refresh
        </button>
      </div>
    </div>
  );
}

export default UpdateBanner;
