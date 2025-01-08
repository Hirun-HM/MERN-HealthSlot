import { useState, useContext, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';

const Payment = ({ appointmentId }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [isLoading, setIsLoading] = useState(false);
    const { backendUrl, token } = useContext(AppContext);
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('');

    useEffect(() => {
        const fetchPaymentDetails = async () => {
            try {
                const response = await axios.get(`${backendUrl}/api/appointments/${appointmentId}/payment-details`, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                const { amount, currency } = response.data;
                setAmount(amount);
                setCurrency(currency);
            } catch (error) {
                console.error('Error fetching payment details:', error.message);
                toast.error('Failed to fetch payment details.');
            }
        };

        if (appointmentId) {
            fetchPaymentDetails();
        }
    }, [appointmentId, backendUrl, token]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        setIsLoading(true);

        const cardElement = elements.getElement(CardElement);

        try {
            const response = await axios.post(
                `${backendUrl}/api/user/create-payment-intent`,
                { amount, currency },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            const { clientSecret } = response.data;

            if (!clientSecret) {
                throw new Error('Missing client secret from payment intent');
            }

            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: cardElement,
                    billing_details: { name: 'John Doe' },
                },
            });

            if (result.error) {
                toast.error(`Payment failed: ${result.error.message}`);
            } else if (result.paymentIntent.status === 'succeeded') {
                toast.success('Payment successful!');
            }

            elements.getElement(CardElement).clear();
        } catch (error) {
            toast.error(`Error: ${error.message}`);
        }

        setIsLoading(false);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Complete Your Payment</h2>

                <div className="mb-4">
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        disabled
                        className="w-full p-2 border rounded-lg mt-2 bg-gray-100"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="currency" className="block text-sm font-medium text-gray-700">Currency</label>
                    <input
                        id="currency"
                        value={currency}
                        disabled
                        className="w-full p-2 border rounded-lg mt-2 bg-gray-100"
                    />
                </div>

                <CardElement className="p-2 border rounded-lg" />

                <button
                    type="submit"
                    disabled={!stripe || !elements || isLoading}
                    className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 disabled:bg-gray-300"
                >
                    {isLoading ? 'Processing...' : 'Pay Now'}
                </button>
            </form>
        </div>
    );
};

export default Payment;
