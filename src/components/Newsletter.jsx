import React, { useState, useEffect } from 'react';
import heroBg from '../assets/bg-shadow.png';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        // Check for email in localStorage on component mount
        const storedEmail = localStorage.getItem('subscribedEmail');
        if (storedEmail) {
            setEmail(storedEmail);
            setIsSubscribed(true);
        }
    }, []);

    const validateEmail = (email) => {
        // Regular expression to check if the email is in a valid format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubscribe = () => {
        if (!email) {
            setError("Email is required.");
        } else if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
        } else {
            setError('');
            localStorage.setItem('subscribedEmail', email);
            setIsSubscribed(true);
            alert('Subscribed successfully!');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('subscribedEmail');
        setEmail('');
        setIsSubscribed(false);
    };

    return (
        <div className='p-4 backdrop-blur-xl bg-white/30 border rounded-2xl max-w-5xl mx-auto mt-32 md:mt-16'>
            <div className="bg-white bg-hero-pattern bg-cover bg-center text-gray-800 py-8 max-w-5xl mx-auto rounded-xl" style={{ backgroundImage: `url(${heroBg})` }}>
                <h2 className="text-center text-2xl font-bold mb-4 p-1">Subscribe to our Newsletter</h2>
                
                {isSubscribed ? (
                    // Display this section if the user is already subscribed
                    <div className="text-center">
                        <p className="text-lg mb-4">Welcome back, <strong>{email}</strong>!</p>
                        <p className="text-base mb-4">You're already subscribed to our newsletter.</p>
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                        >
                            Unsubscribe
                        </button>
                    </div>
                ) : (
                    // Display the subscription form if not subscribed
                    <>
                        <p className='text-center text-base mb-3'>Get the latest updates and news right in your inbox!</p>
                        <div className="flex flex-col md:flex-row gap-2 md:gap-0 justify-center px-5">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="px-4 py-2 border rounded-lg md:rounded-none md:rounded-s-lg border-gray-300 outline-none text-black"
                            />
                            <button
                                onClick={handleSubscribe}
                                className="bg-yellow-400 rounded-lg md:rounded-none md:rounded-e-lg text-black px-4 py-2 hover:bg-yellow-500"
                            >
                                Subscribe
                            </button>
                        </div>
                        {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
                    </>
                )}
            </div>
        </div>
    );
};

export default Newsletter;
