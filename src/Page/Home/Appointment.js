import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Appointment = () => {
    return (
        <section 
        style={{
            background: `url(${appointment})`,
        }}
        className='flex justify-center items-center px-20'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="doctor" />
            </div>
            <div className='flex-1'>
                <h4 className='font-bold text-primary text-xl'>Appointment</h4>
                <h2 className='text-white text-4xl font-semibold'>Make an appointment Today</h2>
                <p className='text-white font-normal text-base'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default Appointment;