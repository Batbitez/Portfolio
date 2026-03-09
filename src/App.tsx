import { HashRouter, Route, Routes } from "react-router";
// Pages
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ProjectPage from "./pages/Project";
// Components
import Background from "./components/Background";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Background>
      <HashRouter>
        <Navbar />
        <div className="items-center text-center mx-auto mt-16 text-lg">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio/:slug" element={<ProjectPage />} />
          </Routes>
        </div>
      </HashRouter>
    </Background>
  );
}
