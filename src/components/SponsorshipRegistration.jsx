import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
const SponsorshipRegistration = () => {
      const navigate = useNavigate();
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (<>
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

        @media (max-width: 768px) {
          .back-btn {
            padding: 8px 16px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    <div className="container mx-auto px-4 py-16" >
      <div className="max-w-4xl mx-auto">
        {/* <h1 style={{textAlign:"center"}} className="text-3xl md:text-4xl font-bold text-center mb-8">Sponsorship Registration</h1> */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <iframe 
            src="https://forms.zohopublic.in/fintrexmedia1/form/SponsorshipQueryEducationTomorrowConclaveAward20251/formperma/DJyAV1iT1zPtw-Ky5efYhjXckv73LQM5qFv0GMr0FNM"
            width="100%" 
            height="1700" 
            frameBorder="0"
            title="Delegate Registration Form"
            className="rounded-lg"
            >
            Loading...
          </iframe>
        </div>
      </div>
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
};

export default SponsorshipRegistration;