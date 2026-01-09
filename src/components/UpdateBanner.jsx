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
      <div
        style={{
          background: "linear-gradient(135deg, #ff4b2b, #ff416c)",
          color: "#ffffffff",
          padding: "14px 18px",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          gap: "14px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
          fontFamily: "Inter, Arial, sans-serif",
          maxWidth: "360px"
        }}
      >
        <div>
          <div style={{ fontSize: "14px", fontWeight: 700 ,color: "#000000ff"}}>
            {title}
          </div>
          <div style={{ fontSize: "13px", opacity: 0.9 ,color: "#ffffffff"}}>
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
            borderRadius: "20px",
            padding: "6px 14px",
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.2s ease",
            transform: hover ? "scale(1.05)" : "scale(1)",
          }}
        >
          Refresh
        </button>
      </div>
    </div>
  );
}

export default UpdateBanner;
