// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import ScrollNavbar from "./components/ScrollNavbar";


function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <ScrollNavbar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
