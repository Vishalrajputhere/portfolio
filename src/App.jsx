import "./App.css";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import bgimg from "./img/bg2.jpg";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Router>
      <div className={theme === "dark" ? "dark" : ""}>
        <div
          style={{ backgroundImage: theme === "dark" ? `url(${bgimg})` : "none" }}
          className={`relative min-h-screen bg-cover bg-no-repeat bg-center ${
            theme === "light" ? "bg-white" : ""
          }`}
        >
          {/* Dark overlay only in dark mode */}
          {theme === "dark" && (
            <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
          )}

          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar theme={theme} setTheme={setTheme} />

            <div className="flex-1">
              <AnimatedRoutes />
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
