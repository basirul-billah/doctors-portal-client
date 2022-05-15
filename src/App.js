import './App.css';
import Navbar from './Page/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Page/Home/Home';
import About from './Page/About/About';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
