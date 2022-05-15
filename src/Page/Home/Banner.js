import React from 'react';
import chair from '../../assets/images/chair.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen px-12 bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="lg:w-2/4 rounded-lg lg:shadow-2xl" alt=''/>
                <div>
                    <h1 className="text-5xl font-bold mt-14 lg:mt-0">Your New Smile Starts Here</h1>
                    <p className="py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary mt-6">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;