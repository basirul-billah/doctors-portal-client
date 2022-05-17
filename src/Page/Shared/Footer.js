import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../assets/images/footer.png';

const Footer = () => {
    return (
        <footer
            style={{
                background: `url(${footer})`,
                backgroundSize: 'cover'
            }}
            className="p-10">
            <div className="footer">
                <div>
                    <span className="footer-title font-bold">Services</span>
                    <Link to='/' className="link link-hover font-normal text-base">Emergency Checkup</Link>
                    <Link to='/' className="link link-hover font-normal text-base">Monthly Checkup</Link>
                    <Link to='/' className="link link-hover font-normal text-base">Weekly Checkup</Link>
                    <Link to='/' className="link link-hover font-normal text-base">Deep Checkup</Link>
                </div>
                <div>
                    <span className="footer-title font-bold">Oral Health</span>
                    <Link to='/' className="link link-hover font-normal text-base">Fluoride Treatment</Link>
                    <Link to='/' className="link link-hover font-normal text-base">Cavity Filling</Link>
                    <Link to='/' className="link link-hover font-normal text-base">Teeth Whitening</Link>
                </div>
                <div>
                    <span className="footer-title font-bold">Our Address</span>
                    <p>New York - 101010 Hudson</p>
                </div>
            </div>
            <div className='mt-20 text-center text-base font-normal'>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;