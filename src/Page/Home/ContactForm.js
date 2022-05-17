import React from 'react';
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const ContactForm = () => {
    return (
        <section
            style={{
                background: `url(${appointment})`,
            }}
            className="flex flex-col justify-center items-center py-10">
            <h4 className='font-bold text-primary text-xl'>Contact Us</h4>
            <h2 className='text-white text-4xl font-semibold mb-5'>Stay connected with us</h2>
            <form className='flex flex-col gap-5 w-1/3 justify-center item-center'>
                <input className="rounded h-10 p-2" type="email" name="email" id="email" placeholder="Your email" />
                <input className="rounded h-10 p-2" type="text" name="subject" id="subject" placeholder="Subject" />
                <textarea className="rounded h-20 p-2" name="message" id="message" placeholder="Message"></textarea>
                <button type="submit"><PrimaryButton>Submit</PrimaryButton></button>
            </form>
        </section>
    );
};

export default ContactForm;