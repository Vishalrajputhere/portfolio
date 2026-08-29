import "./App.css";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SeoHead from "./components/SeoHead";
import LoadingProvider from "./components/loading/LoadingProvider";
import LoadingScreen from "./components/loading/LoadingScreen";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <LoadingProvider>
      <Router>
        <SeoHead />
        <LoadingScreen />
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),_transparent_35%),linear-gradient(180deg,#07111f_0%,#04070d_100%)] text-slate-50">
          <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
            <Navbar />
            <main className="flex-1 pb-10 pt-6 sm:pt-8">
              <AnimatedRoutes />
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </LoadingProvider>
  );
}

export default App;
