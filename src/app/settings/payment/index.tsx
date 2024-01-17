import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CheckoutForm } from './CheckoutForm';

const stripePromise = loadStripe(
    'pk_test_51OYwSkA0D3nIAUzqlvK5xSqkeaeeuHwNgWxGQgszRvmgQoE69EKAogew9qr9VgIj3QFpJj4bJ1iV5ZZgd99Yc5ug006ECOwHLa'
);

export const Payment = () => {
    const options = {
        clientSecret: 'rtyrtyt',
        // Fully customizable with appearance API.
        appearance: {
            /*...*/
        },
    };

    return (
        <div>
            <div>Payment</div>
            <Elements stripe={stripePromise} options={options}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};
