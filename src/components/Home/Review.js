import React from 'react';

const Review = ({review}) => {
    const {name, img, description, rating} = review;
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img style={{width:'150px'}} src={img} alt="" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                    <h2 class="card-title">{rating} stars</h2>
                </div>
            </div>
        </div>
    );
};

export default Review;