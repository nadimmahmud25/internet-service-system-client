import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51Ie9sEItbSbxB1zmSnVNfj4Z4iB5OixogAnJGPtuQMbNhbEjZboPb57xtjvOH8TtOHbpIcCAbRj5uU0KuuuBsrfj004sifIXsZ');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment} ></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;