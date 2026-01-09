// App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ScrollNavbar from "./components/ScrollNavbar";
import ScrollToTop from "./components/ScrollToTop";
import useUpdateChecker from "./hooks/useUpdateChecker";
import UpdateBanner from "./components/UpdateBanner";


const DelegateRegistration = lazy(() => import("./components/DelegateRegistration"));
const SponsorshipRegistration = lazy(() => import("./components/SponsorshipRegistration"));
const NominationRegistration = lazy(() => import("./components/NominationRegistration"));
const Awards = lazy(() => import("./components/Awards"));


function Layout() {
  const location = useLocation();
  const updateData = useUpdateChecker();


  // ✅ Pages where BOTH navbars should be hidden
  const hideNavbarRoutes = [
    "/awards",
    "/delegate-registration",
    "/sponsorship-registration",
    "/nomination-registration",
  ];

  const hideNavbars = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
       {/* 🔔 Update Banner */}
     {updateData && (
     <UpdateBanner
    title={updateData.title}
    message={updateData.message}
  />
)}


      {/* ✅ Hide BOTH navbars on selected pages */}
      {!hideNavbars && <Navbar />}
      {!hideNavbars && <ScrollNavbar />}

       <ScrollToTop />

      <div className="content-container">
        <Suspense fallback={<div style={{ padding: "120px" }}>Loading...</div>}>
         

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/delegate-registration" element={<DelegateRegistration />} />
            <Route path="/sponsorship-registration" element={<SponsorshipRegistration />} />
            <Route path="/nomination-registration" element={<NominationRegistration />} />
          </Routes>

        </Suspense>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
