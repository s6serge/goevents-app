"use client"; // Mark this as a Client Component for interactivity

import { useState, useEffect } from 'react';

export default function Main({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Toggle dark mode
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    // Apply dark mode class to the body
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <main className={`flex-grow p-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
            <div className="container mx-auto max-w-4xl">
                {/* Dark Mode Toggle Button */}
                <button
                    onClick={toggleDarkMode}
                    className="fixed bottom-4 right-4 p-2 bg-blue-500 text-white rounded-full shadow-lg"
                    aria-label="Toggle Dark Mode"
                >
                    {isDarkMode ? '🌞' : '🌙'}
                </button>

                {/* Main Content */}
                {children}
            </div>
        </main>
    );
}
