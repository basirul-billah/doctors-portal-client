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
import Dashboard from './Page/Dashboard/Dashboard';
import MyAppointments from './Page/Dashboard/MyAppointments';
import MyReviews from './Page/Dashboard/MyReviews';

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
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path="/dashboard/review" element={<MyReviews></MyReviews>}></Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
