import React from 'react';

const Review = ({review}) => {
    const {name, img, description, rating} = review;
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img style={{width:'150px'}} src={img} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <h2 className="card-title">{rating} stars</h2>
                </div>
            </div>
        </div>
    );
};

export default Review;