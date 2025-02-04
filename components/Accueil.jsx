"use client";

import { useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Agenda from "./Agenda";

export default function Accueil() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [page, setPage] = useState("home"); // Ajout d'un état pour la page actuelle

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    const particlesInit = async (engine) => {
        await loadSlim(engine);
    };

    const handleEventClick = () => {
        
        setPage("agenda"); // Met à jour la page pour afficher Agenda
    };

    return (
        <main
            className={`relative flex flex-col items-center justify-center min-h-[70vh] ${
                isDarkMode
                    ? "dark bg-gradient-to-b from-gray-900 to-gray-800 text-white"
                    : "bg-gradient-to-b from-blue-100 to-white text-black"
            }`}
        >
            {/* Particles Background */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: {
                        color: { value: isDarkMode ? "#1a1a1a" : "#ffffff" },
                    },
                    particles: {
                        color: { value: isDarkMode ? "#ffffff" : "#000000" },
                        links: {
                            color: isDarkMode ? "#ffffff" : "#000000",
                            enable: true,
                        },
                        move: { enable: true },
                    },
                }}
                className="absolute inset-0 -z-10"
            />

            {/* Affichage conditionnel de la page */}
            {page === "home" ? (
                <div className="absolute top-1/2 transform -translate-y-1/2 text-center z-20 w-full h-full flex flex-col items-center justify-center">
                    {/* Titre principal */}
                    <h1 className="text-3xl md:text-5xl font-bold text-200 animate-float">
                        Soyez la bienvenue sur GoEvents-app
                    </h1>
                    <p className="mt-4 text-lg md:text-xl animate-float">
                        Explore upcoming events, conferences, and festivals.
                    </p>
                    <button
                        className="mt-6 px-6 py-3 bg-primary text-white font-bold text-lg rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300 animate-float"
                        onClick={handleEventClick}
                    >
                        Voir les Événements
                    </button>
                </div>
            ) : (
                <Agenda /> // Affiche l'Agenda lorsque "Voir les Événements" est cliqué
            )}

            {/* Dark Mode Toggle Button */}
            <button
                onClick={toggleDarkMode}
                className="fixed bottom-4 right-4 p-3 bg-blue-500 text-white rounded-full shadow-lg z-50 transition-transform hover:scale-105 focus:ring focus:ring-blue-300"
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
                {isDarkMode ? "🌞" : "🌙"}
            </button>

            {/* Toast Notifications */}
            <ToastContainer position="top-center" autoClose={3000} />

            {/* Main Content */}
            <div className="container mx-auto max-w-4xl relative z-10 mt-8"></div>
        </main>
    );
}
