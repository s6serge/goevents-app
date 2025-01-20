export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center h-full">
            <div className="text-center space-y-4">
                <h1 className="text-2xl md:text-4xl font-bold text-primary">
                    Soyez la bienvenue sur GoEvents-app
                </h1>
                <p className="text-sm md:text-base text-textSecondary">
                    Explore upcoming events, conferences, and festivals.
                </p>
            </div>
        </main>
    );
}
