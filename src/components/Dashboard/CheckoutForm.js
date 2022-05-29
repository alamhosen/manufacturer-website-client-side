import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { async } from '@firebase/util';

const CheckoutForm = ({ parts }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('')
  const [success, setSuccess] = useState('')
  const [processing, setProcessing] = useState(false)
  const [transactionId, setTransactionId] = useState('')
  const [clientSecret, setClientSecret] = useState('');

  const {_id, totalPrice, customerName, email } = parts;

  useEffect(() => {
    fetch('https://protected-lowlands-58562.herokuapp.com/create-payment-intent', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify({ totalPrice })
    })
      .then(res => res.json())
      .then(data => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });

  }, [totalPrice])


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      setCardError(error?.message)
    } else {
      setCardError('')
    }
    setSuccess('')
    setProcessing(true)
    // confirm card payment
    const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: customerName,
            email: email
          },
        },
      },
    );

    if(intentError){
      setCardError(intentError?.message);
      setSuccess('');
      setProcessing(false);
    }else{
      setCardError('');
      setTransactionId(paymentIntent.id);
      console.log(paymentIntent);
      setSuccess('Congrats! Your payment is completed.')

      //STORE PAYMENT ON DATABASE
      const payment = {
        parts: _id,
        transactionId: paymentIntent.id,
      }
      fetch(`https://protected-lowlands-58562.herokuapp.com/order/${_id}`, {
        method:'PATCH',
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(payment)

      }).then(res => res.json())
      .then(data => {
        setProcessing(false);
        console.log(data);
      })
    }

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-success btn-sm my-3' type="submit" disabled={!stripe || !clientSecret || success}>
          Pay
        </button>
      </form>
      {
        cardError && <p className='text-red-500'>{cardError}</p>
      }
      {
        success && <div className='text-green-500'>
         <p > {success}</p>
         <p>Your Transaction Id: <span className='text-orange-500 font-bold'>{transactionId}</span></p>
          </div>
      }
    </>
  );
};

export default CheckoutForm;