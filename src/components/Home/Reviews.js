import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Review from './Review';

const Reviews = () => {   
    const {data: reviews, isLoading} = useQuery('reviews', () => fetch('https://protected-lowlands-58562.herokuapp.com/review').then(res => res.json()) )

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='my-5'>
            <h2 className='text-5xl text-center font-bold my-4'>What Our Customers Say!</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-12'>
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;