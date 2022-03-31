import { Routes, Route } from "react-router-dom";
import './index.css'
import Home from './pages/Home'
import Bio from './pages/Bio'
import Project from "./pages/Project";
import Performance from "./pages/Performance";
import Press from "./pages/Press";
import Contact from "./pages/Contact";

const App = () => {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/project" element={<Project />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/press" element={<Press />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
}

export default App