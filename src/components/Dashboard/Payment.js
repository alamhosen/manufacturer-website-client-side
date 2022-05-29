import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L4RZ8D9aNDTiTKcmt5I0mnLSqD3tw58GFZWaMgA5F252LC9t5wKlRK68dG7ZlmmTyp7zVfQU3Yv1GahC1SEeeoa00qvyCHYvu');

const Payment = () => {
    const { id } = useParams();
    const url = `https://protected-lowlands-58562.herokuapp.com/order/${id}`

    const { data: parts, isLoading, refetch } = useQuery('parts', () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))


    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <h2 className='text-2xl font-bold'>Hello, {parts.customerName}</h2>
                    <h2 className="card-title">Pay for: <span>{parts.productId}</span></h2>
                    <p className='font-bold'>Total Price: ${parts.totalPrice}</p>
                    <p className='font-bold'>Total Quantity: {parts.quantity}</p>
                </div>
            </div>

            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm parts={parts}/>
                    </Elements>

                </div>
            </div>

        </div>
    );
};

export default Payment;