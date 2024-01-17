import { PaymentElement } from '@stripe/react-stripe-js';
import React from 'react';

export const CheckoutForm = () => {
    return (
        <form>
            <PaymentElement />
            <button>Submit</button>
        </form>
    );
};
