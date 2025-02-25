import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CheckoutForm } from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);

export const Payment = () => {
    const options = {
        clientSecret: 'seti_1OhLY0A0D3nIAUzqip1nEw77_secret_PWOKNIOlI3JhLtIwiMjEwaEZ53T1BuI',
        // Fully customizable with appearance API.
        appearance: {
            theme: 'flat',
        },
    };

    console.log(import.meta.env.VITE_SECRET_KEY);

    return (
        <div>
            <div>Payment</div>
            <Elements stripe={stripePromise} options={options}>
                <CheckoutForm clientSecret={options.clientSecret} />
            </Elements>
        </div>
    );
};
