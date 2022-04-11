import { Routes, Route } from "react-router-dom";
import './index.css'
import CheckLanguage from './components/CheckLanguage';
import Home from './pages/Home';
import Bio from './pages/Bio';
import Projects from "./pages/Projects";
import Performance from "./pages/Performance";
import Press from "./pages/Press";
import Contact from "./pages/Contact";

const App = () => {
    return <Routes>
        <Route path="/" element={<Home lang={CheckLanguage} />} />
        <Route path="/bio" element={<Bio lang={CheckLanguage} />} />
        <Route path="/projects" element={<Projects lang={CheckLanguage}/>} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/press" element={<Press />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
}

export default App