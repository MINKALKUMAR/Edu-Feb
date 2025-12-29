// App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ScrollNavbar from "./components/ScrollNavbar";
import ScrollToTop from "./components/ScrollToTop";

const DelegateRegistration = lazy(() => import("./components/DelegateRegistration"));
const SponsorshipRegistration = lazy(() => import("./components/SponsorshipRegistration"));
const Awards = lazy(() => import("./components/Awards"));

function Layout() {
  const location = useLocation();

  // ✅ Pages where BOTH navbars should be hidden
  const hideNavbarRoutes = [
    "/awards",
    "/delegate-registration",
    "/sponsorship-registration",
  ];

  const hideNavbars = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {/* ✅ Hide BOTH navbars on selected pages */}
      {!hideNavbars && <Navbar />}
      {!hideNavbars && <ScrollNavbar />}

      <div className="content-container">
        <Suspense fallback={<div style={{ padding: "120px" }}>Loading...</div>}>
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/delegate-registration" element={<DelegateRegistration />} />
            <Route path="/sponsorship-registration" element={<SponsorshipRegistration />} />
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
