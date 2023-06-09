import { Route, Routes } from "react-router-dom";
// import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import Resume from "./pages/Resume.jsx";

function App() {
  return (
    <div className="App h-full">
      <Header />
      <Routes>
        <Route path="/projects" element={<Projects key="Projects" />} />
        <Route path="/about" element={<About key="About" />} />
        <Route path="/contact" element={<Contact key="Contact" />} />
        <Route path="/resume" element={<Resume key="Resume" />} />
        <Route exact path="/" element={<Home key="Home" />} />
      </Routes>
    </div>
  );
}

export default App;
