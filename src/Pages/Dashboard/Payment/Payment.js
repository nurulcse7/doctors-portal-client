import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
// import { useNavigation } from 'react-day-picker';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const booking = useLoaderData();
  const navigation = useNavigation();
  const { treatment, price, appointmentDate, slot } = booking;
  if (navigation.state === 'loading') {
    return <Loading></Loading>;
  }
  return (
    <div className='p-8 mt-8'>
      <h3 className='text-2xl'>Payment for {treatment}</h3>
      <p className='text-lg mt-3'>
        Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}
      </p>
      <div className='w-96 my-12'>
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
// 77-2 05.00 
