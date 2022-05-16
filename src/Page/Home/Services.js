import React from 'react';
import ServiceCard from './ServiceCard';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import treatment from '../../assets/images/treatment.png'

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
            <div className='mx-20 my-10'>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={treatment} alt="treatment" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold text-5xl text-accent">Exceptional Dental Care, on Your Terms</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary mt-6">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;