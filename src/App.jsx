// App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ScrollNavbar from "./components/ScrollNavbar";

const Awards = lazy(() => import("./components/Awards"));

function Layout() {
  const location = useLocation();
  const isAwardsPage = location.pathname === "/awards";

  return (
    <>
      {/* ✅ Hide BOTH navbars on Awards page */}
      {!isAwardsPage && <Navbar />}
      {!isAwardsPage && <ScrollNavbar />}

      <div className="content-container">
        <Suspense fallback={<div style={{ padding: "120px" }}>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/awards" element={<Awards />} />
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
