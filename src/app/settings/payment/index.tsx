import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CheckoutForm } from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);

export const Payment = () => {
    const options = {
        clientSecret: 'pi_123_secret_123',
        // Fully customizable with appearance API.
        appearance: {
            theme: 'flat',
        },
    };

    console.log(import.meta.env.VITE_SECRET_KEY);

    return (
        <div>
            <div>Payment</div>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};
