// // src/components/Navbar.jsx
// import { useState, useEffect } from "react";
// import logo from "../assets/ShortLogo.png";

// function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
//   const [hoverBtn, setHoverBtn] = useState(false);
//   const [hoverHam, setHoverHam] = useState(false);
//   const [openEdition, setOpenEdition] = useState(false);
//   const [hoverItem, setHoverItem] = useState(null);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= 768);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   /* 🔥 SMOOTH SCROLL FUNCTION */
//   const scrollToSection = (id) => {
//     const el = document.getElementById(id);
//     if (el) {
//       el.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//     setOpen(false); // close mobile menu
//   };

//   /* LABEL → ID MAP */
//   const sectionMap = {
//     Home: "home",
//     About: "about",
//     Partners: "partners",
//     Speakers: "speakers",
//     "Past Speakers": "past-speakers",
//     Venue: "venue",
//     Contact: "contact",
//   };

//   /* BUTTON */
//   const glowButton = (hover) => ({
//     padding: "10px 22px",
//     background: "var(--bg-gradient)",
//     color: "var(--color-white)",
//     borderRadius: "28px",
//     border: "2px solid var(--color-red)",
//     cursor: "pointer",
//     fontWeight: 600,
//     fontSize: "1rem",
//     transition: "var(--transition-fast)",
//     boxShadow: hover
//       ? "0 0 18px var(--color-red)"
//       : "0 0 8px rgba(225,6,0,0.5)",
//   });

//   /* HAMBURGER */
//   const glowHamburger = (hover) => ({
//     width: "42px",
//     height: "42px",
//     background: "var(--color-red)",
//     borderRadius: "50%",
//     border: "2px solid var(--color-white)",
//     cursor: "pointer",
//     padding: "8px",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     transition: "var(--transition-fast)",
//     boxShadow: hover
//       ? "0 0 18px var(--color-red)"
//       : "0 0 8px rgba(225,6,0,0.5)",
//   });

//   const styles = {
//     navbar: {
//       width: "100%",
//       background: "var(--bg-main)",
//       padding: "12px 20px",
//       position: "relative",
//       zIndex: 100,
//     },
//     row: {
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//     },
//     rowLeft: {
//       display: "flex",
//       gap: "18px",
//       alignItems: "center",
//     },
//     item: (hover) => ({
//       cursor: "pointer",
//       fontWeight: 600,
//       color: hover ? "var(--color-red)" : "var(--text-primary)",
//       display: "flex",
//       alignItems: "center",
//       gap: "6px",
//       transition: "var(--transition-fast)",
//       transform: hover ? "translateY(-2px)" : "translateY(0)",
//     }),
//     editionWrapper: {
//       position: "relative",
//     },
//     arrow: (open) => ({
//       fontSize: "0.7rem",
//       transition: "0.3s",
//       transform: open ? "rotate(180deg)" : "rotate(0deg)",
//     }),
//     dropdown: {
//       position: "absolute",
//       top: "100%",
//       left: 0,
//       background: "var(--bg-main)",
//       padding: "12px 16px",
//       borderRadius: "12px",
//       boxShadow: "0 0 12px rgba(225,6,0,0.5)",
//       display: "flex",
//       flexDirection: "column",
//       gap: "10px",
//       minWidth: "180px",
//     },
//     dropdownItem: (hover) => ({
//       color: hover ? "var(--color-red)" : "var(--text-primary)",
//       fontWeight: 500,
//       cursor: "pointer",
//       transition: "var(--transition-fast)",
//       transform: hover ? "translateX(6px)" : "translateX(0)",
//       textDecoration: "none",
//     }),
//     mobileMenu: {
//       background: "var(--bg-main)",
//       marginTop: "15px",
//       padding: "18px",
//       borderRadius: "16px",
//       display: open ? "flex" : "none",
//       flexDirection: "column",
//       gap: "16px",
//       boxShadow: "0 0 20px rgba(225,6,0,0.4)",
//     },
//     bars: {
//       width: "20px",
//       height: "16px",
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "space-between",
//     },
//     bar: {
//       height: "3px",
//       width: "100%",
//       background: "var(--color-white)",
//       borderRadius: "5px",
//     },
//     logoDesktop: { height: "42px" },
//     logoMobile: { height: "34px" },
//   };

//   const menuItems = [
//     "Home",
//     "About",
//     "Partners",
//     "Speakers",
//     "Past Speakers",
//     "Venue",
//     "Contact",
//   ];

//   return (
//     <nav style={styles.navbar}>
//       {/* MOBILE HEADER */}
//       {isMobile && (
//         <div style={styles.row}>
//           <img src={logo} alt="Logo" style={styles.logoMobile} />
//           <div
//             style={glowHamburger(hoverHam)}
//             onMouseEnter={() => setHoverHam(true)}
//             onMouseLeave={() => setHoverHam(false)}
//             onClick={() => setOpen(!open)}
//           >
//             <div style={styles.bars}>
//               <div style={styles.bar} />
//               <div style={styles.bar} />
//               <div style={styles.bar} />
//             </div>
//           </div>
//         </div>
//       )}

//       {/* DESKTOP */}
//       {!isMobile && (
//         <div style={styles.row}>
//           <div style={styles.rowLeft}>
//             <img src={logo} alt="Logo" style={styles.logoDesktop} />

//             {menuItems.map((item) => (
//               <span
//                 key={item}
//                 style={styles.item(hoverItem === item)}
//                 onMouseEnter={() => setHoverItem(item)}
//                 onMouseLeave={() => setHoverItem(null)}
//                 onClick={() =>   scrollToSection(sectionMap[item])}
//               >
//                 {item}
//               </span>
//             ))}

//             <div
//               style={styles.editionWrapper}
//               onMouseEnter={() => setOpenEdition(true)}
//               onMouseLeave={() => setOpenEdition(false)}
//             >
//               <span style={styles.item(openEdition)}>
//                 Past Editions <span style={styles.arrow(openEdition)}>▼</span>
//               </span>

//               {openEdition && (
//                 <div style={styles.dropdown}>
//                   <a
//                     href="https://first.edutomorrow.in"
//                     target="_blank"
//                     rel="noreferrer"
//                     style={styles.dropdownItem(false)}
//                   >
//                     First Edition
//                   </a>
//                   <a
//                     href="https://second.edutomorrow.in"
//                     target="_blank"
//                     rel="noreferrer"
//                     style={styles.dropdownItem(false)}
//                   >
//                     Second Edition
//                   </a>
//                 </div>
//               )}
//             </div>
//           </div>

//           <button
//             style={glowButton(hoverBtn)}
//             onMouseEnter={() => setHoverBtn(true)}
//             onMouseLeave={() => setHoverBtn(false)}
//           >
//             Awards Nomination
//           </button>
//         </div>
//       )}

//       {/* MOBILE MENU */}
//       {isMobile && (
//         <div style={styles.mobileMenu}>
//           {menuItems.map((item) => (
//             <span
//               key={item}
//               style={styles.item(false)}
//               onClick={() => scrollToSection(sectionMap[item])}
//             >
//               {item}
//             </span>
//           ))}

//           <span
//             style={styles.item(openEdition)}
//             onClick={() => setOpenEdition(!openEdition)}
//           >
//             Past Editions <span style={styles.arrow(openEdition)}>▼</span>
//           </span>

//           {openEdition && (
//             <>
//               <a
//                 href="https://first.edutomorrow.in"
//                 target="_blank"
//                 rel="noreferrer"
//                 style={styles.dropdownItem(false)}
//               >
//                 First Edition
//               </a>
//               <a
//                 href="https://second.edutomorrow.in"
//                 target="_blank"
//                 rel="noreferrer"
//                 style={styles.dropdownItem(false)}
//               >   
//                 Second Edition
//               </a>
//             </>
//           )}

//           <button style={glowButton(false)}>Awards Nomination</button>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;





// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import logo from "../assets/ShortLogo.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [hoverBtn, setHoverBtn] = useState(false);
  const [hoverHam, setHoverHam] = useState(false);
  const [openEdition, setOpenEdition] = useState(false);
  const [hoverItem, setHoverItem] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* 🔥 SMOOTH SCROLL FUNCTION */
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  /* LABEL → ID MAP */
  const sectionMap = {
    Home: "home",
    About: "about",
    Partners: "partners",
    Speakers: "speakers",
    "Past Speakers": "past-speakers",
    Venue: "venue",
    Contact: "contact",
  };

  /* BUTTON */
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

  /* HAMBURGER */
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

  const styles = {
    navbar: {
      width: "100%",
      background: "var(--bg-main)",
      padding: "12px 20px",
      position: "relative",
      zIndex: 100,
    },
    row: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      gap: "12px",
    },
    rowLeft: {
      display: "flex",
      gap: "18px",
      alignItems: "center",
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
      zIndex: 200,
    },
    dropdownItem: (hover) => ({
      color: hover ? "var(--color-red)" : "var(--text-primary)",
      fontWeight: 500,
      cursor: "pointer",
      transition: "var(--transition-fast)",
      transform: hover ? "translateX(6px)" : "translateX(0)",
      textDecoration: "none",
      whiteSpace: "nowrap",
    }),
    mobileMenu: {
      background: "var(--bg-main)",
      marginTop: "15px",
      padding: "18px",
      borderRadius: "16px",
      display: open ? "flex" : "none",
      flexDirection: "column",
      gap: "16px",
      boxShadow: "0 0 20px rgba(225,6,0,0.4)",
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
    logoDesktop: { height: "42px" },
    logoMobile: { height: "34px" },
  };

  const menuItems = [
    "Home",
    "About",
    "Partners",
    "Speakers",
    "Past Speakers",
    "Venue",
    "Contact",
  ];

  return (
    <nav style={styles.navbar}>
      {/* MOBILE HEADER */}
      {isMobile && (
        <div style={styles.row}>
          <img src={logo} alt="Logo" style={styles.logoMobile} />
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
        </div>
      )}

      {/* DESKTOP */}
      {!isMobile && (
        <div style={styles.row}>
          <div style={styles.rowLeft}>
            <img src={logo} alt="Logo" style={styles.logoDesktop} />

            {menuItems.map((item) => (
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
          </div>

          <button
            style={glowButton(hoverBtn)}
            onMouseEnter={() => setHoverBtn(true)}
            onMouseLeave={() => setHoverBtn(false)}
          >
            Awards Nomination
          </button>
        </div>
      )}

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

          <button style={glowButton(false)}>Awards Nomination</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
