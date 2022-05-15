import React from 'react';
import ServiceCard from './ServiceCard';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';

const Services = () => {
    return (
        <div className='my-28 px-5'>
            <h3 className='text-center uppercase text-primary font-bold text-xl'>Our Services</h3>
            <h2 className='text-center text-accent font-normal text-4xl'>Services We Provide</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center mt-7 gap-5'>
                <ServiceCard img={fluoride} cardTitle='Fluoride Treatment'></ServiceCard>
                <ServiceCard img={cavity} cardTitle='Cavity Filling'></ServiceCard>
                <ServiceCard img={whitening} cardTitle='Teeth Whitening'></ServiceCard>
            </div>
        </div>
    );
};

export default Services;