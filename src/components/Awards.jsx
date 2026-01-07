import React, { useState } from "react";
import heroImg from "../assets/images/Award.jpg";
import eLogo from "/ShortLogo.png";
import Venue from "./Venue";
import { useNavigate } from "react-router-dom";


const Awards = () => {
    const navigate = useNavigate();

    const [copied, setCopied] = useState(false);

// const HeroSection = () => {
//   return (
//     <section
//       className="hero-section"
//       style={{
//         backgroundImage: `url(${heroImg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center center",
//         backgroundRepeat: "no-repeat",
//         minHeight: "120vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         position: "relative",
//         textAlign: "center",
//         padding: "2rem",
//       }}
//       aria-label="Awards hero section"
//     >
//       {/* ===== LOCAL CSS ===== */}
//       <style>{`
//         .back-btn {
//           position: fixed;
//           top: 22px;
//           left: 22px;
//           z-index: 999;

//           display: flex;
//           align-items: center;
//           gap: 6px;

//           padding: 10px 20px;
//           border-radius: 30px;

//           background: var(--bg-gradient);
//           color: var(--color-white);

//           border: 1px solid white);
//           font-size: 0.95rem;
//           font-weight: 600;

//           cursor: pointer;
//           backdrop-filter: blur(10px);

//           transition: 
//             background 0.25s ease,
//             transform 0.25s ease,
//             box-shadow 0.25s ease;
//         }

//         .back-btn:hover {
//           background: var(--bg-gradient);
//           box-shadow: 0 0 12px rgba(225, 6, 0, 0.6);
//           transform: translateY(-2px);
//         }

//         @media (max-width: 768px) {
//           .back-btn {
//             padding: 8px 16px;
//             font-size: 0.9rem;
//           }
//         }
//       `}</style>

//       {/* 🔙 BACK BUTTON */}
//       <button
//         onClick={() => navigate("/")}
//         className="back-btn"
//         aria-label="Go back to home"
//       >
//         ← Back
//       </button>

//       <div
//         className="hero-content"
//         style={{
//           position: "relative",
//           zIndex: 2,
//           maxWidth: "800px",
//           width: "100%",
//         }}
//       >
//         {/* hero content if needed */}
//       </div>
//     </section>
//   );
// };
const HeroSection = () => {
  return (
    <section className="hero-section" aria-label="Awards hero section">
      <style>{`
        body {
          margin: 0;
          padding: 0;
        }

        .hero-section {
          width: 100%;
          margin: 0;
          padding: 0;
          overflow: hidden;
          position: relative;
        }

        /* 🔥 IMAGE CONTAINER */
        .hero-image-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        /* 🔥 RESPONSIVE IMAGE */
        .hero-image {
          width: 100%;
          height: auto; /* ✅ height reduces with width */
          display: block; /* ✅ removes top gap */
          object-fit: cover;

        //   animation: zoomImg 3s ease-in-out infinite alternate;
          transform-origin: center top; /* ✅ zoom from top */
        }


        /* 🔙 Back Button */
        .back-btn {
          position: fixed;
          top: 22px;
          left: 22px;
          z-index: 10;

          padding: 10px 20px;
          border-radius: 30px;
          background: var(--bg-gradient);
          color: #fff;
          border: 1px solid white;
          font-weight: 600;
          cursor: pointer;
          backdrop-filter: blur(10px);
        }

        /* 📱 Mobile */
        @media (max-width: 768px) {
          .back-btn {
            padding: 8px 16px;
            font-size: 0.9rem;
          }
        }
      `}</style>

      {/* 🔙 BACK BUTTON */}
      <button onClick={() => navigate("/")} className="back-btn">
        ← Back
      </button>

      {/* 🔥 IMAGE CONTAINER */}
      <div className="hero-image-wrapper">
        <img
          src={heroImg}
          alt="Education Tomorrow Awards 2026"
          className="hero-image"
          loading="lazy"
        />
      </div>
    </section>
  );
};


    const AboutAwards = () => (
        <section
            className="section grid-bg"
            style={{
                padding: "80px 20px",
                width: "100%",
                // background: "var(--bg-gradient)",
            }}
        >
            <div
                className="container"
                style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 8px" }}
            >
                <h2
                    className="section-title"
                    style={{
                        textAlign: "center",
                        fontSize: "2.2rem",
                        fontWeight: 800,
                        marginBottom: "1rem",
                        color: "var(--color-white)",
                    }}
                >
                    About The Awards
                </h2>
                <div
                    className="divider"
                    style={{
                        width: "80px",
                        height: "4px",
                        background: "var(--color-red)",
                        margin: "0 auto 2rem",
                        borderRadius: "2px",
                    }}
                />
                <div
                    className="about-grid"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "1.5rem",
                        alignItems: "center",
                    }}
                >
                    <div className="about-text" style={{ padding: "1.5rem" }}>
                        <p
                            style={{
                                fontSize: "1.05rem",
                                lineHeight: "1.8",
                                marginBottom: "1.25rem",
                                color: "var(--color-white)",
                            }}
                        >
                            The Education Tomorrow Conclave & Awards 2026 is a prestigious
                            platform dedicated to recognizing and celebrating the trailblazers
                            who are shaping the future of education.
                        </p>
                        <p
                            style={{
                                fontSize: "1.05rem",
                                lineHeight: "1.8",
                                marginBottom: "1.25rem",
                                color: "var(--color-white)",
                            }}
                        >
                            This exclusive gathering will honor visionary educators, pioneering
                            institutions, and changemakers whose innovation, leadership, and
                            commitment have transformed the learning ecosystem.
                        </p>
                        <p
                            style={{
                                fontSize: "1.05rem",
                                lineHeight: "1.8",
                                color: "var(--color-white)",
                            }}
                        >
                            Join us in celebrating excellence and innovation in education at
                            the most anticipated education awards ceremony of the year.
                        </p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <div
                            className="award-trophy"
                            style={{
                                maxWidth: "100%",
                                maxHeight: "80vh",
                                borderRadius: "15px",
                                padding: "1.5rem",
                                overflow: "hidden",
                                background: "#0800004c",
                                border: "1px solid var(--border-color)",
                                boxShadow: "var(--shadow-soft)",
                            }}
                        >
                            <img
                                src={eLogo}
                                style={{ marginTop: "-2.5rem" }}
                                height={"100%"}
                                width={"100%"}
                                alt="Award Trophy"
                                loading="lazy"
                            />
                            {/* <p style={{ color: "var(--color-red)", fontSize: "1.1rem", fontWeight: 700 }}>Award Trophy</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

    const ImportantDates = () => {
        const dates = [
            { title: "Last Date for Nomination", date: "28th January 2026", highlight: true },
            { title: "Extended Deadline", date: "02nd February 2026" },
            { title: "Shortlist Announcement", date: "5th February 2026" },
            { title: "Winner Announcement & Felicitation", date: "7th February 2026" },
        ];

        return (
            <section
                className="section section-alt grid-bg"
                style={{
                    padding: "80px 20px",
                    width: "100%",
                    //   background: "var(--gradient)",
                    //   backgroundImage: "var(--bg-gradient)",
                    //   backgroundBlendMode: "overlay",
                }}
            >
                <div
                    className="container"
                    style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 8px" }}
                >
                    <h2
                        className="section-title"
                        style={{
                            textAlign: "center",
                            fontSize: "2.2rem",
                            fontWeight: 800,
                            marginBottom: "0.5rem",
                            color: "var(--color-white)",
                        }}
                    >
                        Important Dates
                    </h2>
                    {/* <p
            className="section-subtitle"
            style={{
              textAlign: "center",
              fontSize: "1.05rem",
              color: "#b0c4de",
              margin: "0 auto 2rem",
              maxWidth: "600px",
            }}
          >
            Mark your calendar for these key milestones
          </p> */}
                    <div
                        className="divider"
                        style={{
                            width: "80px",
                            height: "4px",
                            background: "var(--color-red)",
                            margin: "0 auto 2rem",
                            borderRadius: "2px",
                        }}
                    />
                    <div
                        className="date-grid"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                            gap: "1.25rem",
                        }}
                    >
                        {dates.map((item, idx) => (
                            <div
                                key={idx}
                                className={`date-card ${item.highlight ? "highlight" : ""}`}
                                style={{
                                    background: item.highlight
                                        ? "linear-gradient(135deg, var(--bg-card), var(--border-color))"
                                        : "var(--bg-card)",
                                    padding: "1.75rem",
                                    borderRadius: "15px",
                                    textAlign: "center",
                                    boxShadow: "0 5px 25px rgba(0,0,0,0.2)",
                                    border: `2px solid ${item.highlight ? "var(--color-red)" : "var(--border-color)"
                                        }`,
                                    transition: "transform .3s ease, box-shadow .3s ease",
                                    position: "relative",
                                    overflow: "hidden",
                                }}
                            >
                                <h3
                                    className="date-title"
                                    style={{
                                        fontSize: "1.2rem",
                                        fontWeight: 700,
                                        marginBottom: ".75rem",
                                        color: "var(--text-primary)",
                                    }}
                                >
                                    {item.title}
                                </h3>
                                <p
                                    className="date-value"
                                    style={{
                                        fontSize: "1.4rem",
                                        fontWeight: 800,
                                        color: "var(--color-red)",
                                    }}
                                >
                                    {item.date}
                                </p>
                                {item.highlight && (
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: "10px",
                                            right: "10px",
                                            background: "var(--color-red)",
                                            color: "var(--color-white)",
                                            padding: "5px 10px",
                                            borderRadius: "20px",
                                            fontSize: "0.8rem",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Important
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    };


  const AwardCategories = () => {
    const [copiedIndex, setCopiedIndex] = useState(null);

    const categories = [
        {
            title: "Higher Education Awards",
            items: [
                "Excellence in Student Outreach, Engagement and Digital Innovation 2026",
                "Excellence in Digital Education and Innovation 2026",
                "Most Promising University/Institute in R&D (Research & Development) 2026",
                "Remarkable Contribution in Online Learning and Digital Practices 2026",
                "Innovation in Higher Education and Skills Enhancement 2026",
                "Outstanding University/Institute in Learning Initiative and Skill Development 2026",
                "Outstanding University/Institute in Innovative Teaching and Learning Practices 2026",
                "Most Impactful University/Institute in Digital Infrastructure 2026",
                "Most Emerging University/Engineering Institute 2026",
                "Outstanding University/Institute with excellent infrastructure and Green Campus Initiative 2026",
                "Outstanding University/Institute in Digital Innovation, Technology and Best Practices 2026",
                "CSR Excellence in Higher Education 2026",
                "Most Impactful Contribution for Global Outreach and Exchange Program 2026",
                "Most Innovative University/Institute in Global Collaboration through Digital Learning 2026",
                "Most Emerging Startup University 2026",
                "Remarkable Contribution in Curriculum Development and Online Teaching 2026",
                "Most Promising University/Institute in Digital Transformation 2026",
                "Most Promising B-School of the Year 2026",
                "Most Promising Corporate-Governed University 2026",
                "Innovative Practices for Academic Excellence in Higher Education",
                "Outstanding Institute/University in Smart Class Initiative 2026",
                "Outstanding University in Training & Placements 2026",
                "Most Emerging University/Institute in India",
                "Most Promising University in Curriculum Design and Development 2026",
                "E-campus Award for the year 2026",
                "Remarkable Contribution in Distance Learning Education",
                "Most Promising Medical Institute/University for the year 2026",
                "Most Promising Institute/University in India",
                "Outstanding Engineering Institute for Student Outreach and Global Exposure",
                "Most Promising Engineering Institute in India",
                "Outstanding Institute with Best Infrastructure for the year 2026",
            ],
        },
        {
            title: "Individual Leadership Awards",
            items: [
                "Iconic Leadership in Higher Education 2026",
                "Outstanding Leadership in Higher Education 2026",
                "Outstanding Contribution in Online Education and Pedagogy 2026",
                "Outstanding Teaching Excellence Award 2026",
                "Excellent Digital Educator Award of the year 2026",
                "Excellence in Innovative Teaching & Learning Practices 2026",
                "Outstanding Research Scholar of the year 2026",
                "Emerging Leader in Higher Education 2026",
                "Entrepreneurship Award in Higher Education 2026",
                "Women Entrepreneurship Award in Higher Education 2026",
                "Outstanding Vice Chancellor of the year 2026",
                "Early Childhood Educator of the Year",
                "Pre-School Director of the Year",
                "Innovative Pre-School Leader",
                "Principal of the Year",
                "Excellence in Inclusive Education Leadership",
                "STEM Educator of the Year",
                "Dean of the Year",
                "University Chancellor/Vice Chancellor of the Year",
                "Innovative School Leader",
                "Outstanding Higher Education Administrator",
                "Best Higher Education Innovator",
                "EdTech Innovator of the Year",
                "EdTech Founder of the Year",
                "EdTech Thought Leader Award",
                "Best Educator in Online Learning",
                "Outstanding Women in Business Leadership",
                "Innovative Entrepreneur of the Year",
                "Business Leader of the Year",
                "Best Digital Transformation Leader",
                "Business Growth Leader of the Year",
            ],
        },
        {
            title: "EdTech Awards",
            items: [
                "Leading E-learning Platform 2026",
                "Outstanding Tech Solution Provider for Higher Education 2026",
                "Outstanding Tech Solution Provider for Schools 2026",
                "Most Promising Assessment Solution Provider of the Year 2026",
                "Outstanding Smart Class Solution Provider of the Year 2026",
                "Leading ERP Solution Provider of the Year 2026",
                "Leading Education Finance Company of the Year 2026",
                "Outstanding Contribution to Education Financing in India 2026",
                "Most Trusted Education Loan Provider of the Year 2026",
                "Most Preferred Financial Partner for Students 2026",
                "Excellence in Customer - Centric Education Loan Services 2026",
                "Outstanding Digital Education Platform Provider of the Year 2026",
                "Leading School Security Solution Provider of the Year 2026",
                "Most Promising Video Conferencing Solution Provider of the Year 2026",
                "Excellence in Multi-Language Content Provider of the Year 2026",
                "Outstanding Admission Solution Provider of the Year 2026",
                "Most Promising AR-VR Solution Provider of the Year 2026",
                "Outstanding Innovation in AI-ML 2026",
                "Outstanding Payment Solution Provider of the Year 2026",
                "Leading Display Solution Provider of the Year 2026",
                "Most Promising Hybrid Solution Provider of the Year 2026",
                "Innovative Training Provider to Working Professionals 2026",
                "Innovative Digital Payment Solution Provider of the Year 2026",
                "Most Promising LMS Provider of the Year 2026",
                "Most Immersive Learning Product of the Year",
                "Best EdTech Company of the Year",
                "EdTech Startup of the Year",
                "Best EdTech Solution of the Year",
                "Best Cyber Privacy/Security Solution in Education",
                "Best Robotics Solution of the Year",
                "Best Classroom Tech Solution of the Year",
                "Best Test Prep Solution of the Year",
                "Emerging Technology Solution",
                "Best Learning Mobile App",
                "Most Effective Use of EdTech Tools",
            ],
        },
        {
            title: "School Education Awards",
            items: [
                "Best Tech Savvy School of the Year",
                "Best Technically Advanced School Chain of the Year",
                "Best Standalone School of the Year",
                "School with Best IT Infrastructure",
                "Innovation for Curriculum Award",
                "Educational Excellence Award",
                "Best School in Management System of the Year",
                "Most Innovative School of the Year",
                "Best E-learning Methodology School of the Year",
                "Most Progressive School of the Year",
                "Best School for Futuristic Education",
                "Most Inspirational School Award",
            ],
        },
        {
            title: "Preschool Education Awards",
            items: [
                "Best Preschool Chain of the Year",
                "Best Standalone Preschool of the Year",
                "Innovation for Curriculum Award",
                "Innovation in Preschool Infrastructure",
                "Best Use of Technology in Preschool",
                "Effective Implementation & Integration of ICT",
            ],
        },
    ];

    const copyCategory = (category, index) => {
        const text =
            `***${category.title}***\n` +
            category.items.map((item) => `• ${item}`).join("\n");

        navigator.clipboard.writeText(text);
        setCopiedIndex(index);

        setTimeout(() => {
            setCopiedIndex(null);
        }, 2000);
    };

    return (
        <section className="section grid-bg" style={{ padding: "80px 20px", width: "100%" }}>
            <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 8px" }}>
                <h2 className="section-title" style={{ textAlign: "center", fontSize: "2.2rem", fontWeight: 800, marginBottom: "0.5rem", color: "var(--color-white)" }}>
                    Award Categories
                </h2>

                <div className="divider" style={{ width: "80px", height: "4px", background: "var(--color-red)", margin: "0 auto 2rem", borderRadius: "2px" }} />

                <div className="category-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(311px, 1fr))", gap: "1.5rem" }}>
                    {categories.map((category, idx) => (
                        <div key={idx} className="category-card" style={{ background: "var(--bg-card)", borderRadius: "15px", overflow: "hidden", boxShadow: "var(--shadow-soft)", border: "1px solid var(--border-color)" }}>
                            
                            {/* HEADER */}
                            <div
                                className="category-header"
                                style={{
                                    background: "var(--color-red)",
                                    color: "var(--color-white)",
                                    padding: "1.2rem",
                                    fontSize: "1.1rem",
                                    fontWeight: 700,
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <span>{category.title}</span>

                                <span
                                    onClick={() => copyCategory(category, idx)}
                                    style={{
                                        cursor: "pointer",
                                        fontSize: "1.2rem",
                                        userSelect: "none",
                                    }}
                                    title="Copy category"
                                >
                                    {copiedIndex === idx ? "✔" : "📋"}
                                </span>
                            </div>

                            <div className="category-body" style={{ padding: "1rem 1.25rem", maxHeight: "380px", overflowY: "auto" }}>
                                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                                    {category.items.map((item, j) => (
                                        <li key={j} style={{ display: "flex", alignItems: "flex-start", marginBottom: ".6rem", padding: ".4rem", borderRadius: "8px" }}>
                                            <span style={{ color: "var(--color-red)", marginRight: ".6rem", fontWeight: "bold" }}>•</span>
                                            <span style={{ color: "#b0c4de", fontSize: ".95rem", overflowWrap: "anywhere" }}>
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

    const NominationGuidelines = () => (
        <section
            className="section section-alt grid-bg"
            style={{
                padding: "80px 20px",
                width: "100%",
                // background: "var(--bg-gradient)",
                // backgroundImage: "var(--bg-gradient)",
                // backgroundBlendMode: "overlay",
            }}
        >
            <div
                className="container"
                style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 8px" }}
            >
                <h2
                    className="section-title"
                    style={{
                        textAlign: "center",
                        fontSize: "2.2rem",
                        fontWeight: 800,
                        marginBottom: "0.5rem",
                        color: "var(--color-white)",
                    }}
                >
                    Nomination Guidelines
                </h2>
                {/* <p
          className="section-subtitle"
          style={{
            textAlign: "center",
            fontSize: "1.05rem",
            color: "#b0c4de",
            margin: "0 auto 2rem",
            maxWidth: "600px",
          }}
        >
          Follow these guidelines for a successful nomination
        </p> */}
                <div
                    className="divider"
                    style={{
                        width: "80px",
                        height: "4px",
                        background: "var(--color-red)",
                        margin: "0 auto 2rem",
                        borderRadius: "2px",
                    }}
                />
                <div
                    className="card"
                    style={{
                        background: "var(--bg-gradient)",
                        borderRadius: "15px",
                        padding: "2rem",
                        boxShadow: "var(--shadow-soft)",
                        border: "1px solid var(--border-color)",
                        transition: "transform .3s ease, box-shadow .3s ease",
                    }}
                >
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "white" }}>
                        {[
                            "All nominations will be treated as strictly confidential.",
                            "Applicants must submit the official online nomination form.",
                            "Multiple categories can be selected while filling out the nomination form.",
                            "A nomination fee is applicable at this stage to ensure an independent and unbiased selection process.",
                            "All submitted applications will be reviewed by an external panel of jurors.",
                            "The jury panel will determine the winners for each category.",
                            "Winners will be notified at least 15 days in advance of the ceremony.",
                        ].map((text, idx) => (
                            <li
                                key={idx}
                                style={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    marginBottom: "1rem",
                                    padding: "0.5rem",
                                }}
                            >
                                <span
                                    style={{
                                        color: "var(--color-black)",
                                        marginRight: "1rem",
                                        fontWeight: "bold",
                                    }}
                                >
                                    ✓
                                </span>
                                <span style={{ fontSize: "1.05rem" }}>{text}</span>
                            </li>
                        ))}
                    </ul>

                    <div
                        className="bank"
                        style={{
                            position: "relative",
                            marginTop: "1.5rem",
                            padding: "1rem",
                            background: "var(--color-black)",
                            borderRadius: "10px",
                            border: "1px solid var(--border-color)",
                        }}
                    >
                        <h3
                            style={{
                                fontSize: "1.25rem",
                                fontWeight: 700,
                                marginBottom: "1rem",
                                color: "var(--color-red)",
                            }}
                        >
                            Bank Account Details for Payment
                        </h3>
                        <div
                            className="bank-grid"
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                                gap: "1rem",
                                color: "white",
                            }}
                        >
                            <div>
                                <p>
                                    <strong>Account Name:</strong> Fintrex Media Private Limited
                                </p>
                                <p>
                                    <strong>Account No:</strong> 44367159331
                                </p>
                                <p>
                                    <strong>Bank:</strong> State Bank of India (SBI)
                                </p>
                            </div>
                            <div>
                                <p>
                                    <strong>Branch:</strong> Muzaffarnagar – Court Road branch
                                </p>
                                <p>
                                    <strong>IFSC Code:</strong> SBIN0050259
                                </p>
                                <p>
                                    <strong>SWIFT Code:</strong> SBIN0065135
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => {
                                const bankDetails = `Account Name: Fintrex Media Private Limited
Account No: 44367159331
Bank: State Bank of India (SBI)
Branch: Muzaffarnagar – Court Road branch
IFSC Code: SBIN0050259
SWIFT Code: SBIN0065135`;
                                navigator.clipboard.writeText(bankDetails);
                                setCopied(true);
                                setTimeout(() => setCopied(false), 2000);
                            }}
                            className="copy-btn"
                            aria-label="Copy bank details"
                            title="Copy bank details"
                            style={{
                                position: "absolute",
                                top: "10px",
                                right: "10px",
                                background: "var(--color-red)",
                                color: "var(--color-white)",
                                border: "none",
                                padding: "10px 18px",
                                borderRadius: "25px",
                                fontWeight: 600,
                                cursor: "pointer",
                                transition: "all .2s ease",
                                boxShadow: "0 5px 15px rgba(225, 6, 0, 0.3)",
                            }}
                        >
                            {copied ? "✓" : "⎘"}
                        </button>

                        <div style={{ textAlign: "center", marginTop: "1.25rem" }}></div>
                    </div>

                    <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
                        <a
                            className="cta glow-border"
                            href="/nomination-registration"
                            style={{
                                padding: "14px 30px",
                                background: "var(--bg-gradient)",
                                color: "var(--color-white)",
                                borderRadius: "30px",
                                border: "2px solid var(--color-red)",
                                cursor: "pointer",
                                fontWeight: 600,
                                fontSize: "1rem",
                                textDecoration: "none",
                            }}
                        >
                            Nominate Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );

    // const Pricing = () => (
    //     <section
    //         className="section grid-bg"
    //         style={{
    //             padding: "80px 20px",
    //             width: "100%",
    //             // background: "var(--bg-gradient)",
    //         }}
    //     >
    //         <div
    //             className="container"
    //             style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 8px" }}
    //         >
    //             <h2
    //                 className="section-title"
    //                 style={{
    //                     textAlign: "center",
    //                     fontSize: "2.2rem",
    //                     fontWeight: 800,
    //                     marginBottom: "0.5rem",
    //                     color: "var(--color-white)",
    //                 }}
    //             >
    //                 Nomination Fee
    //             </h2>
    //             {/* <p
    //       className="section-subtitle"
    //       style={{
    //         textAlign: "center",
    //         fontSize: "1.05rem",
    //         color: "#b0c4de",
    //         margin: "0 auto 2rem",
    //         maxWidth: "600px",
    //       }}
    //     >
    //       Choose the category that matches your nomination
    //     </p> */}
    //             <div
    //                 className="divider"
    //                 style={{
    //                     width: "80px",
    //                     height: "4px",
    //                     background: "var(--color-red)",
    //                     margin: "0 auto 2rem",
    //                     borderRadius: "2px",
    //                 }}
    //             />
    //             <div
    //                 className="price-grid"
    //                 style={{
    //                     display: "grid",
    //                     gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    //                     gap: "1.5rem",
    //                 }}
    //             >
    //                 <div
    //                     className="price-card"
    //                     role="article"
    //                     aria-label="Individual price card"
    //                     style={{
    //                         background: "var(--bg-gradient)",
    //                         padding: "2rem 1.5rem",
    //                         borderRadius: "20px",
    //                         textAlign: "center",
    //                         boxShadow: "var(--shadow-soft)",
    //                         border: "2px solid var(--border-color)",
    //                         transition: "transform .3s ease, box-shadow .3s ease",
    //                         position: "relative",
    //                     }}
    //                 >
    //                     <h3
    //                         className="price-title"
    //                         style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: ".75rem" }}
    //                     >
    //                         Individual
    //                     </h3>
    //                     <p
    //                         className="price-value"
    //                         style={{ fontSize: "2.4rem", fontWeight: 800, marginBottom: ".25rem", color: "var(--color-white)" }}
    //                     >
    //                         ₹11,800
    //                     </p>
    //                     <p className="price-desc" style={{ color: "#b0c4de", marginBottom: "1rem" }}>
    //                         (₹10,000 + 18% GST)
    //                     </p>
    //                     <ul className="price-list" style={{ textAlign: "left", color: "#b0c4de", marginBottom: "1.5rem" }}>
    //                         <li>✓ Individual professionals</li>
    //                         <li>✓ Educators & Teachers</li>
    //                         <li>✓ Researchers</li>
    //                     </ul>
    //                 </div>

    //                 <div
    //                     className="price-card featured"
    //                     role="article"
    //                     aria-label="Educational institutions price card"
    //                     style={{
    //                         background: "var(--color-red)",
    //                         color: "var(--color-white)",
    //                         padding: "2rem 1.5rem",
    //                         borderRadius: "20px",
    //                         textAlign: "center",
    //                         boxShadow: "var(--shadow-soft)",
    //                         border: "2px solid var(--border-color)",
    //                         transition: "transform .3s ease, box-shadow .3s ease",
    //                         position: "relative",
    //                         transform: "scale(1.03)",
    //                     }}
    //                 >
    //                     <div
    //                         className="price-badge"
    //                         style={{
    //                             position: "absolute",
    //                             top: "-10px",
    //                             left: "50%",
    //                             transform: "translateX(-50%)",
    //                             background: "var(--color-white)",
    //                             color: "var(--color-red)",
    //                             padding: "5px 16px",
    //                             borderRadius: "20px",
    //                             fontSize: ".85rem",
    //                             fontWeight: 700,
    //                         }}
    //                     >
    //                         Most Popular
    //                     </div>
    //                     <h3 className="price-title" style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: ".75rem" }}>
    //                         Educational Institutions
    //                     </h3>
    //                     <p className="price-value" style={{ fontSize: "2.4rem", fontWeight: 800, marginBottom: ".25rem" }}>
    //                         ₹17,700
    //                     </p>
    //                     <p className="price-desc" style={{ color: "var(--color-white)", marginBottom: "1rem" }}>
    //                         (₹15,000 + 18% GST)
    //                     </p>
    //                     <ul className="price-list" style={{ textAlign: "left", color: "var(--color-white)", marginBottom: "1.5rem" }}>
    //                         <li>✓ Schools & Colleges</li>
    //                         <li>✓ Universities</li>
    //                         <li>✓ Preschools</li>
    //                     </ul>
    //                 </div>

    //                 <div
    //                     className="price-card"
    //                     role="article"
    //                     aria-label="EdTech companies price card"
    //                     style={{
    //                         background: "var(--bg-gradient)",
    //                         padding: "2rem 1.5rem",
    //                         borderRadius: "20px",
    //                         textAlign: "center",
    //                         boxShadow: "var(--shadow-soft)",
    //                         border: "2px solid var(--border-color)",
    //                         transition: "transform .3s ease, box-shadow .3s ease",
    //                         position: "relative",
    //                     }}
    //                 >
    //                     <h3 className="price-title" style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: ".75rem" }}>
    //                         EdTech Companies
    //                     </h3>
    //                     <p className="price-value" style={{ fontSize: "2.4rem", fontWeight: 800, marginBottom: ".25rem", color: "var(--color-white)" }}>
    //                         ₹30,000
    //                     </p>
    //                     <p className="price-desc" style={{ color: "#b0c4de", marginBottom: "1rem" }}>
    //                         (₹25,000 + 18% GST)
    //                     </p>
    //                     <ul className="price-list" style={{ textAlign: "left", color: "#b0c4de", marginBottom: "1.5rem" }}>
    //                         <li>✓ EdTech Startups</li>
    //                         <li>✓ Technology Providers</li>
    //                         <li>✓ Solution Providers</li>
    //                     </ul>
    //                 </div>
    //             </div>
    //         </div>
    //     </section>
    // );

const Pricing = () => (
  <section
    className="section grid-bg"
    style={{
      padding: "80px 20px",
      width: "100%",
    }}
  >
    <div
      className="container"
      style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 8px" }}
    >
      <h2
        className="section-title"
        style={{
          textAlign: "center",
          fontSize: "2.2rem",
          fontWeight: 800,
          marginBottom: "0.5rem",
          color: "var(--color-white)",
        }}
      >
        Nomination Fee
      </h2>

      <div
        className="divider"
        style={{
          width: "80px",
          height: "4px",
          background: "var(--color-red)",
          margin: "0 auto 2rem",
          borderRadius: "2px",
        }}
      />

      {/* ===== TOP 3 CARDS ===== */}
      <div
        className="price-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.5rem",
          marginBottom: "2.5rem",
        }}
      >
        {/* Individual */}
        <div
          className="price-card"
          style={{
            background: "var(--bg-gradient)",
            padding: "2rem 1.5rem",
            borderRadius: "20px",
            textAlign: "center",
            boxShadow: "var(--shadow-soft)",
            border: "2px solid var(--border-color)",
          }}
        >
          <h3 style={{ fontSize: "1.3rem", fontWeight: 700 }}>Individual</h3>
          <p style={{ fontSize: "2.4rem", fontWeight: 800, color: "var(--color-white)" }}>
            ₹11,800
          </p>
          <p style={{ color: "#b0c4de" }}>(₹10,000 + 18% GST)</p>
          <ul style={{ textAlign: "left", color: "#b0c4de", marginTop: "1rem" }}>
            <li>✓ Individual professionals</li>
            <li>✓ Educators & Teachers</li>
            <li>✓ Researchers</li>
          </ul>
        </div>

        {/* Educational Institutions */}
        <div
          className="price-card featured"
          style={{
            background: "var(--color-red)",
            color: "var(--color-white)",
            padding: "2rem 1.5rem",
            borderRadius: "20px",
            textAlign: "center",
            boxShadow: "var(--shadow-soft)",
            border: "2px solid var(--border-color)",
            transform: "scale(1.03)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "var(--color-white)",
              color: "var(--color-red)",
              padding: "5px 16px",
              borderRadius: "20px",
              fontSize: ".85rem",
              fontWeight: 700,
            }}
          >
            Most Popular
          </div>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 700 }}>
            Educational Institutions
          </h3>
          <p style={{ fontSize: "2.4rem", fontWeight: 800 }}>₹17,700</p>
          <p>(₹15,000 + 18% GST)</p>
          <ul style={{ textAlign: "left", marginTop: "1rem" }}>
            <li>✓ Schools & Colleges</li>
            <li>✓ Universities</li>
            <li>✓ Preschools</li>
          </ul>
        </div>

        {/* EdTech */}
        <div
          className="price-card"
          style={{
            background: "var(--bg-gradient)",
            padding: "2rem 1.5rem",
            borderRadius: "20px",
            textAlign: "center",
            boxShadow: "var(--shadow-soft)",
            border: "2px solid var(--border-color)",
          }}
        >
          <h3 style={{ fontSize: "1.3rem", fontWeight: 700 }}>EdTech Companies</h3>
          <p style={{ fontSize: "2.4rem", fontWeight: 800, color: "var(--color-white)" }}>
            ₹30,000
          </p>
          <p style={{ color: "#b0c4de" }}>(₹25,000 + 18% GST)</p>
          <ul style={{ textAlign: "left", color: "#b0c4de", marginTop: "1rem" }}>
            <li>✓ EdTech Startups</li>
            <li>✓ Technology Providers</li>
            <li>✓ Solution Providers</li>
          </ul>
        </div>
      </div>

      {/* ===== BOTTOM CENTER CARD ===== */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          className="price-card"
          style={{
            background: "var(--bg-gradient)",
            padding: "2rem 1.5rem",
            borderRadius: "20px",
            textAlign: "center",
            boxShadow: "var(--shadow-soft)",
            border: "2px solid var(--border-color)",
            maxWidth: "360px",
            width: "100%",
          }}
        >
          <h3 style={{ fontSize: "1.3rem", fontWeight: 700 }}>
            International Schools & Colleges
          </h3>
          <p style={{ fontSize: "2.4rem", fontWeight: 800, color: "var(--color-white)" }}>
            $450
          </p>
          <p style={{ color: "#b0c4de" }}>(369 USD + 18% GST)</p>
          <ul style={{ textAlign: "left", color: "#b0c4de", marginTop: "1rem" }}>
            <li>✓ Schools, Colleges & Universities</li>
            <li>✓ Individual Professionals</li>
            <li>✓ Educators & Teachers</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);


    const Contact = () => (
        <section
            className="section grid-bg"
            style={{
                padding: "80px 20px",
                width: "100%",
                // background: "var(--bg-gradient)",
            }}
        >
            <div
                className="container"
                style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 8px" }}
            >
                <h2
                    className="section-title"
                    style={{
                        textAlign: "center",
                        fontSize: "2.2rem",
                        fontWeight: 800,
                        marginBottom: "0.5rem",
                        color: "var(--color-white)",
                    }}
                >
                    Contact Us
                </h2>
                {/* <p
          className="section-subtitle"
          style={{
            textAlign: "center",
            fontSize: "1.05rem",
            color: "#b0c4de",
            margin: "0 auto 2rem",
            maxWidth: "600px",
          }}
        >
          Get in touch with us for any queries
        </p> */}
                <div
                    className="divider"
                    style={{
                        width: "80px",
                        height: "4px",
                        background: "var(--color-red)",
                        margin: "0 auto 2rem",
                        borderRadius: "2px",
                    }}
                />
                <div
                    className="contact-grid"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "1.5rem",
                    }}
                >
                    <div
                        className="contact-card grid-bg"
                        style={{
                            //   background: "var(--color-red)",
                            color: "var(--color-white)",
                            padding: "2rem",
                            borderRadius: "20px",
                            textAlign: "center",
                            boxShadow: "var(--shadow-soft)",
                            border: "2px solid var(--border-color)",
                        }}
                    >
                        <h3
                            style={{
                                fontSize: "1.35rem",
                                fontWeight: 700,
                                marginBottom: "1.5rem",
                                color: "var(--color-red)",
                            }}
                        >
                            For Award Nomination Queries
                        </h3>
                        <div className="contact-info" style={{ textAlign: "left" }}>
                            <div className="info-row" style={{ display: "flex", alignItems: "center", marginBottom: "1.2rem" }}>
                                <div
                                    className="info-icon"
                                    aria-hidden="true"
                                    style={{
                                        background: "rgba(255,255,255,0.15)",
                                        padding: "12px",
                                        borderRadius: "50%",
                                        marginRight: "1rem",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2z"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <div>
                                    <p style={{ fontWeight: 600, fontSize: "1.05rem", color: "var(--color-white)" }}>Priyansh Saharawat</p>
                                    <p style={{ opacity: 0.85, color: "var(--color-white)" }}>Award Coordinator</p>
                                </div>
                            </div>
                            <div className="info-row" style={{ display: "flex", alignItems: "center", marginBottom: "1.2rem" }}>
                                <div
                                    className="info-icon"
                                    aria-hidden="true"
                                    style={{
                                        background: "rgba(255,255,255,0.15)",
                                        padding: "12px",
                                        borderRadius: "50%",
                                        marginRight: "1rem",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </div>
                                <div>
                                    <p style={{ fontWeight: 600, color: "var(--color-white)" }}>Email</p>
                                    <p style={{ opacity: 0.85, color: "var(--color-white)" }}>priyansh@fintrexmedia.com</p>
                                </div>
                            </div>
                            <div className="info-row" style={{ display: "flex", alignItems: "center", marginBottom: "1.2rem" }}>
                                <div
                                    className="info-icon"
                                    aria-hidden="true"
                                    style={{
                                        background: "rgba(255,255,255,0.15)",
                                        padding: "12px",
                                        borderRadius: "50%",
                                        marginRight: "1rem",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <p style={{ fontWeight: 600, color: "var(--color-white)" }}>Phone</p>
                                    <p style={{ opacity: 0.85, color: "var(--color-white)" }}>+91 7011499056</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="card ready-card"
                        style={{
                            background: "var(--bg-card)",
                            borderRadius: "15px",
                            padding: "2rem",
                            boxShadow: "var(--shadow-soft)",
                            border: "1px solid var(--border-color)",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <h3
                            style={{
                                fontSize: "1.35rem",
                                fontWeight: 700,
                                marginBottom: "0.75rem",
                                color: "var(--color-red)",
                            }}
                        >
                            Ready to Nominate?
                        </h3>
                        <p style={{ color: "#b0c4de", marginBottom: "1.5rem" }}>
                            Don't miss this opportunity to get recognized for your contributions to education. Start your nomination
                            process today!
                        </p>
                        <a
                            className="cta glow-border"
                            href="/nomination-registration"
                            style={{
                                padding: "14px 30px",
                                background: "var(--color-red) !important",
                                color: "var(--color-white)",
                                borderRadius: "30px",
                                border: "2px solid var(--color-red)",
                                cursor: "pointer",
                                fontWeight: 600,
                                fontSize: "1rem",
                                textDecoration: "none",
                            }}
                        >
                            Begin Nomination
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );

    return (<>
        <div
            className="awards-page"
            style={{
                fontFamily: "'Poppins','Inter',system-ui,-apple-system,sans-serif",
                color: "var(--text-primary)",
                background: "var(--bg-gradient)",
                // paddingTop: "50px",
                overflowX: "hidden",
            }}
        >
            <style>{`
  :root {
    --bg-main: #000000;
    --grid-color: 225, 6, 0; /* red */
    --grid-line-opacity: 0.35;
    --grid-glow-opacity: 0.25;
    --grid-size: 40px;
  }

  /* ===== REUSABLE GRID BACKGROUND ===== */
  .grid-bg {
    background:
      linear-gradient(
        90deg,
        rgba(var(--grid-color), var(--grid-line-opacity)) 1px,
        transparent 1px
      ),
      linear-gradient(
        0deg,
        rgba(var(--grid-color), var(--grid-line-opacity)) 1px,
        transparent 1px
      ),
      radial-gradient(
        circle at center,
        rgba(var(--grid-color), var(--grid-glow-opacity)),
        transparent 60%
      ),
      var(--bg-main);

    background-size: var(--grid-size) var(--grid-size);
    background-position: center;
  }

  /* Optional soft version */
  .grid-bg.soft {
    --grid-line-opacity: 0.18;
    --grid-glow-opacity: 0.12;
    --grid-size: 60px;
  }
`}</style>

            <HeroSection />
            <AboutAwards />
            <ImportantDates />
            <AwardCategories />
            <NominationGuidelines />
            <Pricing />
            <Venue />
            <Contact />
        </div>
    </>
    );
};

export default Awards;