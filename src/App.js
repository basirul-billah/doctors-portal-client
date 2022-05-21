import './App.css';
import Navbar from './Page/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Page/Home/Home';
import About from './Page/About/About';
import Login from './Page/Login/Login';
import Appointment from './Page/Appointment/Appointment';
import SignUp from './Page/Login/SignUp';
import RequireAuth from './Page/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
