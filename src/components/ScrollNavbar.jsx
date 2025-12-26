
// src/components/ScrollNavbar.jsx
import { useState, useEffect } from "react";
import logo from "../assets/ShortLogo.png";
import { useNavigate } from "react-router-dom";


function ScrollNavbar() {
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const [open, setOpen] = useState(false);
  const [openEdition, setOpenEdition] = useState(false);
  const [hoverItem, setHoverItem] = useState(null);
  const [hoverBtn, setHoverBtn] = useState(false);
  const [hoverHam, setHoverHam] = useState(false);

  const navigate = useNavigate();


  const menuItems = [
    "Home",
    "About",
    "Partners",
    "Speakers",
    "Past Speakers",
    "Venue",
    "Contact",
  ];

  /* 🔥 LABEL → ID MAP */
  const sectionMap = {
    Home: "home",
    About: "about",
    Partners: "partners",
    Speakers: "speakers",
    "Past Speakers": "past-speakers",
    Venue: "venue",
    Contact: "contact",
  };

  /* 🔥 SMOOTH SCROLL */
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  /* ================= SCROLL ================= */
  useEffect(() => {
    const onScroll = () => {
      const visible = window.scrollY > 200;
      setShow(visible);
      setTimeout(() => setAnimate(visible), 50);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ================= RESIZE ================= */
  useEffect(() => {
    const resize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setOpen(false);
    };
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  /* ================= BUTTON ================= */
  const glowButton = (hover) => ({
    padding: "9px 22px",
    background: "var(--bg-gradient)",
    color: "var(--color-white)",
    borderRadius: "28px",
    border: "2px solid var(--color-red)",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: "0.95rem",
    transition: "var(--transition-fast)",
    boxShadow: hover
      ? "0 0 18px var(--color-red)"
      : "0 0 8px rgba(225,6,0,0.5)",
    transform: hover ? "translateY(-2px)" : "translateY(0)",
    whiteSpace: "nowrap",
  });

  /* ================= HAMBURGER ================= */
  const glowHamburger = (hover) => ({
    width: "42px",
    height: "42px",
    background: "var(--color-red)",
    borderRadius: "50%",
    border: "2px solid var(--color-white)",
    cursor: "pointer",
    padding: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "var(--transition-fast)",
    boxShadow: hover
      ? "0 0 18px var(--color-red)"
      : "0 0 8px rgba(225,6,0,0.5)",
  });

  /* ================= STYLES ================= */
  const styles = {
    container: {
      position: "fixed",
      top: "15px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "95%",
      background: "var(--bg-main)",
      borderRadius: "30px",
      padding: "10px 18px",
      display: show ? "block" : "none",
      zIndex: 2000,
      opacity: animate ? 1 : 0,
      transition: "all 0.6s ease",
      boxShadow: "0 0 20px rgba(0,0,0,0.15)",
      border: "1px solid var(--color-red)",
    },
    row: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "12px",
    },
    rowLeft: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      flexWrap: "wrap",
    },
    item: (hover) => ({
      cursor: "pointer",
      fontWeight: 600,
      color: hover ? "var(--color-red)" : "var(--text-primary)",
      display: "flex",
      alignItems: "center",
      gap: "6px",
      transition: "var(--transition-fast)",
      transform: hover ? "translateY(-2px)" : "translateY(0)",
      whiteSpace: "nowrap",
    }),
    editionWrapper: {
      position: "relative",
    },
    arrow: (open) => ({
      fontSize: "0.7rem",
      transition: "0.3s",
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
    }),
    dropdown: {
      position: "absolute",
      top: "110%",
      left: 0,
      background: "var(--bg-main)",
      padding: "12px 16px",
      borderRadius: "12px",
      boxShadow: "0 0 12px rgba(225,6,0,0.5)",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      minWidth: "180px",
      zIndex: 3000,
    },
    dropdownItem: (hover) => ({
      textDecoration: "none",
      color: hover ? "var(--color-red)" : "var(--text-primary)",
      fontWeight: 500,
      cursor: "pointer",
      transition: "var(--transition-fast)",
      transform: hover ? "translateX(6px)" : "translateX(0)",
      whiteSpace: "nowrap",
    }),
    mobileMenu: {
      marginTop: "15px",
      background: "var(--bg-main)",
      padding: "16px",
      borderRadius: "16px",
      display: open ? "flex" : "none",
      flexDirection: "column",
      gap: "14px",
      boxShadow: "0 0 16px rgba(225,6,0,0.4)",
    },
    bars: {
      width: "20px",
      height: "16px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    bar: {
      height: "3px",
      width: "100%",
      background: "var(--color-white)",
      borderRadius: "5px",
    },
    logo: {
      height: isMobile ? "32px" : "36px",
    },
  };

  return (
    <div style={styles.container}>
      {/* HEADER */}
      <div style={styles.row}>
        <div style={styles.rowLeft}>
          <img src={logo} alt="Logo" style={styles.logo} />

          {!isMobile &&
            menuItems.map((item) => (
              <span
                key={item}
                style={styles.item(hoverItem === item)}
                onMouseEnter={() => setHoverItem(item)}
                onMouseLeave={() => setHoverItem(null)}
                onClick={() => scrollToSection(sectionMap[item])}
              >
                {item}
              </span>
            ))}

          {!isMobile && (
            <div
              style={styles.editionWrapper}
              onMouseEnter={() => setOpenEdition(true)}
              onMouseLeave={() => setOpenEdition(false)}
            >
              <span style={styles.item(openEdition)}>
                Past Editions <span style={styles.arrow(openEdition)}>▼</span>
              </span>

              {openEdition && (
                <div style={styles.dropdown}>
                  <a
                    href="https://first.edutomorrow.in"
                    target="_blank"
                    rel="noreferrer"
                    style={styles.dropdownItem(hoverItem === "first")}
                    onMouseEnter={() => setHoverItem("first")}
                    onMouseLeave={() => setHoverItem(null)}
                  >
                    First Edition
                  </a>
                  <a
                    href="https://second.edutomorrow.in"
                    target="_blank"
                    rel="noreferrer"
                    style={styles.dropdownItem(hoverItem === "second")}
                    onMouseEnter={() => setHoverItem("second")}
                    onMouseLeave={() => setHoverItem(null)}
                  >
                    Second Edition
                  </a>
                </div>
              )}
            </div>
          )}
        </div>

        {!isMobile && (
          <button
            style={glowButton(hoverBtn)}
            onMouseEnter={() => setHoverBtn(true)}
            onMouseLeave={() => setHoverBtn(false)}
            onClick={() => navigate("/awards")}
          >
            Awards Nomination
          </button>
        )}

        {isMobile && (
          <div
            style={glowHamburger(hoverHam)}
            onMouseEnter={() => setHoverHam(true)}
            onMouseLeave={() => setHoverHam(false)}
            onClick={() => setOpen(!open)}
          >
            <div style={styles.bars}>
              <div style={styles.bar} />
              <div style={styles.bar} />
              <div style={styles.bar} />
            </div>
          </div>
        )}
      </div>

      {/* MOBILE MENU */}
      {isMobile && (
        <div style={styles.mobileMenu}>
          {menuItems.map((item) => (
            <span
              key={item}
              style={styles.item(false)}
              onClick={() => scrollToSection(sectionMap[item])}
            >
              {item}
            </span>
          ))}

          <span
            style={styles.item(openEdition)}
            onClick={() => setOpenEdition(!openEdition)}
          >
            Past Editions <span style={styles.arrow(openEdition)}>▼</span>
          </span>

          {openEdition && (
            <>
              <a
                href="https://first.edutomorrow.in"
                target="_blank"
                rel="noreferrer"
                style={styles.dropdownItem(false)}
              >
                First Edition
              </a>
              <a
                href="https://second.edutomorrow.in"
                target="_blank"
                rel="noreferrer"
                style={styles.dropdownItem(false)}
              >
                Second Edition
              </a>
            </>
          )}

          <button style={glowButton(false)} onClick={() => {
            setOpen(false);
            navigate("/awards");
          }}  >Awards Nomination</button>
        </div>
      )}
    </div>
  );
}

export default ScrollNavbar;
