import React from 'react';

const Review = ({ reviews }) => {
    const { name, comment, img, location } = reviews;
    return (
        <div>
            <div className="card w-fit lg:h-80 bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>{comment}</p>
                    <div className="flex">
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                <img src={img} alt=''/>
                            </div>
                        </div>
                        <div>
                            <h4 className='text-xl'>{name}</h4>
                            <p>{location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;