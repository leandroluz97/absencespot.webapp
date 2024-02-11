import React, { useState } from 'react';
import { PaymentElement, CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

interface ICheckoutFormProps {
    clientSecret: string;
}
export const CheckoutForm = ({ clientSecret }: ICheckoutFormProps) => {
    const stripe = useStripe();
    const elements = useElements();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = async (ev) => {
        ev.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsLoading(true);

        // const { error } = await stripe.confirmPayment({
        //     elements,
        //     confirmParams: {
        //         // Make sure to change this to your payment completion page
        //         return_url: `http://localhost:3000/c/5454-4353-534f-3ef6/dashboard`,
        //     },
        // });
        const { error } = await stripe.confirmSetup({
            elements,
            confirmParams: {
                return_url: 'https://example.com/account/payments/setup-complete',
            },
        });

        // await stripe.createPaymentMethod({
        //     elements,
        //     params: {
        //         billing_details: {
        //             name: 'Jenny Rosen',
        //         },
        //     },
        // });

        if (error.type === 'card_error' || error.type === 'validation_error') {
            console.log(error.message);
        } else {
            console.log('An unexpected error occured.');
        }

        setIsLoading(false);
    };

    let option = {
        appearance: {
            theme: 'flat',
        },
    };
    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement />

            <button
                type="submit"
                disabled={isLoading}
                className="mt-6 w-full px-6 text-white text-sm bg-primary-900 p-3 rounded-lg hover:bg-primary-950 transition-all ease-in-out duration-300"
            >
                Pay
            </button>
        </form>
    );
};
