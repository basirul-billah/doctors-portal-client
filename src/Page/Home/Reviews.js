import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';

const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Bill Gates',
            comment: 'I got root canal last month from them. They were very professional and took very good care of me. I am quite impressed with them and it got me thinking that maybe I should now build a new microsoft focused only on dental industry. Who knows maybe people will remember me for my nice teeth.',
            img: people1,
            location: 'Washington'
        },
        {
            _id: 2,
            name: 'Steve Jobs',
            comment: 'An apple a day does not keep the doctor away. It turns out that the apples I ate every day were too much sweet and it damaged my teeth cavity or something. They have told me not to eat apple for some day and hopefully things will get better. ',
            img: people2,
            location: 'California'
        },
        {
            _id: 3,
            name: 'Warren Buffet',
            comment: 'My friend Bill suggested me this doctor and it was amazing. Both my teeth and money are safe. I want to invest in this service. They are awesome.',
            img: people3,
            location: 'Nebraska'
        },
    ]
    return (
        <section className='my-28 mx-12'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-primary font-bold text-xl">Testimonials</h4>
                    <h2 className="text-3xl">What our patients say</h2>
                </div>
                <div>
                    <img src={quote} className='w-24 lg:w-48' alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        reviews ={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Reviews;