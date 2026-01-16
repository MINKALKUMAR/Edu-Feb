// import React from 'react';
// import JatinderImage from '../assets/Guest/Dr. Jatinder Pal Singh.png';
// import MonikaImage from '../assets/Guest/Dr. Monika Pendukeni.png';
// import GuestBgImage from '../assets/GuestBg.png';

// const GuestSpeakerSection = () => {

//   /* MAIN CONTAINER */
//   const containerStyle = {
//     width: '100%',
//     height: '80vh',
//     position: 'relative',
//     overflow: 'hidden',
//     display: 'flex',
//     alignItems: 'center',
//     padding: '40px 60px',
//     boxSizing: 'border-box',

//     /* STATIC + COMPLEX BACKGROUND (PERFORMANCE SAFE) */
//     backgroundImage: `
//       radial-gradient(circle at top left, rgba(220,20,60,0.25), transparent 45%),
//       radial-gradient(circle at bottom right, rgba(255,255,255,0.08), transparent 40%),
//       linear-gradient(135deg, #120000 0%, #240000 45%, #000000 100%),
//       url(${GuestBgImage})
//     `,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//   };

//   const contentStyle = {
//     display: 'flex',
//     width: '100%',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     gap: '40px',
//   };

//   const sideContainerStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '30px',
//     flex: 1,
//   };

//   const photoStyle = {
//     width: '300px',
//     height: '380px',
//     borderRadius: '16px',
//     objectFit: 'cover',
//     border: '3px solid rgba(220,20,60,0.8)',
//     boxShadow: '0 12px 35px rgba(0,0,0,0.6)',
//     background: 'linear-gradient(135deg, #e10600 0%, #7a0000 40%, #0b0b0b 100%);',
//   };

//   const textContainerStyle = {
//     flex: 1,
//     color: '#ffffff',
//   };

//   const labelStyle = {
//     fontSize: '13px',
//     letterSpacing: '2px',
//     color: '#dc143c',
//     marginBottom: '12px',
//     textTransform: 'uppercase',
//     fontWeight: '800',
//   };

//   const nameStyle = {
//     fontSize: '26px',
//     fontWeight: '800',
//     marginBottom: '8px',
//     lineHeight: '1.3',
//   };

//   const positionStyle = {
//     fontSize: '15px',
//     color: '#d0d0d0',
//     lineHeight: '1.6',
//   };

//   return (
//     <section style={containerStyle}>
//       <div style={contentStyle}>

//         {/* LEFT – CHIEF GUEST */}
//         <div style={sideContainerStyle}>
//           <img src={JatinderImage} alt="Dr. Jatinder Pal Singh" style={photoStyle} />
//           <div style={textContainerStyle}>
//             <div style={labelStyle}>Guest of Honor</div>
//             <div style={nameStyle}>Dr. Jatinder Pal Singh</div>
//             <div style={positionStyle}>
//               Deputy Director, Directorate of Higher Education, Government of Punjab
//               <br />
//             </div>
//           </div>
//         </div>

//         {/* RIGHT – PROGRAM COORDINATOR */}
//         <div style={sideContainerStyle}>
//           <div style={textContainerStyle}>
//             <div style={{ ...labelStyle, textAlign: 'right' }}>
//               Special Guest
//             </div>
//             <div style={{ ...nameStyle, textAlign: 'right' }}>
//               Dr. Monika Pendukeni
//             </div>
//             <div style={{ ...positionStyle, textAlign: 'right' }}>
//              Co-Founder & Council Chairperson
//               <br />
//               Welwitchia University
//             </div>
//           </div>
//           <img src={MonikaImage} alt="Dr. Monika Pendukeni" style={photoStyle} />
//         </div>

//       </div>
//     </section>
//   );
// };

// export default GuestSpeakerSection;






import React, { useEffect, useState } from 'react';
import JatinderImage from '../assets/Guest/Dr. Jatinder Pal Singh.png';
import MonikaImage from '../assets/Guest/Dr. Monika Pendukeni.png';
import GuestBgImage from '../assets/GuestBg.png';

const GuestSpeakerSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  /* MAIN CONTAINER */
  const containerStyle = {
    width: '100%',
    height: isMobile ? 'auto' : '80vh',
    padding: isMobile ? '30px 20px' : '40px 60px',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    boxSizing: 'border-box',
    backgroundImage: `
      radial-gradient(circle at top left, rgba(220,20,60,0.25), transparent 45%),
      radial-gradient(circle at bottom right, rgba(255,255,255,0.08), transparent 40%),
      linear-gradient(135deg, #120000 0%, #240000 45%, #000000 100%),
      url(${GuestBgImage})
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    width: '100%',
    gap: isMobile ? '50px' : '40px',
  };

  const sideContainerStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center',
    gap: '25px',
    flex: 1,
    textAlign: isMobile ? 'center' : 'left',
  };

  const photoStyle = {
    width: isMobile ? '220px' : '300px',
    height: isMobile ? '280px' : '380px',
    borderRadius: '16px',
    objectFit: 'cover',
    border: '3px solid rgba(220,20,60,0.8)',
    boxShadow: '0 12px 35px rgba(0,0,0,0.6)',
  };

  const labelStyle = {
    fontSize: '13px',
    letterSpacing: '2px',
    color: '#dc143c',
    marginBottom: '10px',
    textTransform: 'uppercase',
    fontWeight: '800',
  };

  const nameStyle = {
    fontSize: isMobile ? '22px' : '26px',
    fontWeight: '800',
    marginBottom: '6px',
    color:'white'
  };

  const positionStyle = {
    fontSize: '14px',
    color: '#d0d0d0',
    lineHeight: '1.6',
  };

  return (
    <section style={containerStyle}>
      <div style={contentStyle}>

        {/* LEFT – GUEST OF HONOR */}
        <div style={sideContainerStyle}>
          <img src={JatinderImage} alt="Dr. Jatinder Pal Singh" style={photoStyle} />
          <div>
            <div style={labelStyle}>Guest of Honor</div>
            <div style={nameStyle}>Dr. Jatinder Pal Singh</div>
            <div style={positionStyle}>
              Deputy Director, Directorate of Higher Education<br />
              Government of Punjab
            </div>
          </div>
        </div>

        {/* RIGHT – SPECIAL GUEST */}
        <div style={{ ...sideContainerStyle, flexDirection: isMobile ? 'column' : 'row-reverse' }}>
          <img src={MonikaImage} alt="Dr. Monika Pendukeni" style={photoStyle} />
          <div>
            <div style={{...labelStyle,textAlign:'right'}}>Special Guest</div>
            <div style={{...nameStyle,textAlign:'right'}}>Dr. Monika Pendukeni</div>
            <div style={{...positionStyle,textAlign:'right'}}>
              Co-Founder & Council Chairperson<br />
              Welwitchia University
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GuestSpeakerSection;
