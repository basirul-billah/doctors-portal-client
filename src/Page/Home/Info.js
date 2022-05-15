import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5 px-5'>
            <InfoCard cardTitle="Openning Hours" bgClass="bg-primary" img={clock}></InfoCard>
            <InfoCard cardTitle="Visit Our Location" bgClass="bg-accent" img={marker}></InfoCard>
            <InfoCard cardTitle="Contact Us Now" bgClass="bg-primary" img={phone}></InfoCard>
        </div>
    );
};

export default Info;