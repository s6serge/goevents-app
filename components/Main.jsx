"use client"; // This makes the component work on the client side

import { useState, useEffect } from 'react';
import Particles from '@tsparticles/react'; // For the cool particle animation
import { loadSlim } from '@tsparticles/slim'; // Updated import

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

  // Initialize particles
  const particlesInit = async (engine) => {
    await loadSlim(engine); // Updated function
  };

  return (
    <main className={`flex-grow p-4 ${isDarkMode ? 'bg-gradient-to-b from-gray-900 to-gray-800 text-white' : 'bg-gradient-to-b from-blue-100 to-white text-black'}`}>
      {/* Particle Animation */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: isDarkMode ? '#1a1a1a' : '#ffffff',
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: isDarkMode ? '#ffffff' : '#000000',
            },
            links: {
              color: isDarkMode ? '#ffffff' : '#000000',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Dark Mode Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-4 right-4 p-2 bg-blue-500 text-white rounded-full shadow-lg z-50"
        aria-label="Toggle Dark Mode"
      >
        {isDarkMode ? '🌞' : '🌙'}
      </button>

      {/* Main Content */}
      <div className="container mx-auto max-w-4xl relative z-10">
        {children}
      </div>
    </main>
  );
}
