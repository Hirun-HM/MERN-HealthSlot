/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import  { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const payment = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) return;

        setIsLoading(true);

        const cardElement = elements.getElement(CardElement);

        const response = await fetch('/api/payment/create-payment-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: 1000, currency: 'usd' }), // $10.00
        });

        const { clientSecret } = await response.json();

        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement,
                billing_details: { name: 'John Doe' },
            },
        });

        if (result.error) {
            setMessage(`Payment failed: ${result.error.message}`);
        } else if (result.paymentIntent.status === 'succeeded') {
            setMessage('Payment successful!');
        }

        setIsLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Complete Your Payment</h2>
            <CardElement className="p-2 border rounded-lg" />
            <button
                type="submit"
                disabled={!stripe || !elements || isLoading}
                className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 disabled:bg-gray-300"
            >
                {isLoading ? 'Processing...' : 'Pay $10.00'}
            </button>
            {message && <p className="mt-4 text-center text-red-500">{message}</p>}
        </form>
    );
};

export default payment;
