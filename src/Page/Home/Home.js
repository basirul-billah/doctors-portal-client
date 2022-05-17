import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import ContactForm from './ContactForm';
import Info from './Info';
import Reviews from './Reviews';
import Services from './Services';
import Footer from '../Shared/Footer'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Appointment></Appointment>
            <Reviews></Reviews>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;