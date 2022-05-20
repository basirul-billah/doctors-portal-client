import React from 'react';
import chair from '../../assets/images/chair.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero rounded-xl px-5 lg:px-12 bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="lg:w-2/4 rounded-lg lg:shadow-2xl" alt=''/>
                <div>
                    <h1 className="text-3xl lg:text-5xl font-bold mt-14 lg:mt-0">Your New Smile Starts Here</h1>
                    <p className="py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;