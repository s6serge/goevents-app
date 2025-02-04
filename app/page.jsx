export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center text-white relative">
      {/* SVG Background */}
      <img
        src="/photo.svg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Hero Section */}
      <div className="text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-float">
          Bienvenue sur GoEvents
        </h1>
        <p className="text-lg md:text-xl mb-8 animate-float-delay">
          Découvrez les meilleurs événements près de chez vous.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg animate-bounce">
          Voir les événements
        </button>
      </div>
    </div>
  );
}
