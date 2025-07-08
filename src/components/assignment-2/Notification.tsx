"use client"
import React, { useState, useEffect } from 'react';

const Notification = () => {
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        if (!message) return;

        const timer = setTimeout(() => {
            setMessage('');
        }, 5000);

        return () => clearTimeout(timer);
    }, [message]);

    return (
        <div>

            <button onClick={() => setMessage('This is a notification!')}>
                Show Notification
            </button>
            <div>
                {message}
            </div>

        </div>
    );
};

export default Notification;
