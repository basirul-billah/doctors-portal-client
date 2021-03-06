import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import About from '../About/About';
import Dashboard from '../Dashboard/Dashboard';
import Home from '../Home/Home';
import Login from '../Login/Login';

const Navbar = () => {

    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

    const menuItems = <>
        <li><Link to="/home" element={<Home></Home>}>Home</Link></li>
        <li><Link to="/appointment" element={<About></About>}>Appointment</Link></li>
        <li><Link to="/reviews" element={<About></About>}>Reviews</Link></li>
        <li><Link to="/contact" element={<About></About>}>Contact Us</Link></li>
        <li><Link to="/about" element={<About></About>}>About</Link></li>
        {
            user && <li><Link to="/dashboard" element={<Dashboard></Dashboard>}>Dashboard</Link></li>
        }
        <li>{user ?
            <button
                onClick={logout}
                className="btn btn-ghost text-base font-normal normal-case">Sign Out</button>
            : <Link to="/login" element={<Login></Login>}>Login</Link>}</li>
    </>;

    return (
        <div className="navbar px-5 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link className='font-normal text-lg' to='/' element={<Home></Home>}>Doctors Portal</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;