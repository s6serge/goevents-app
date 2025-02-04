// app/login/page.jsx
export default function LoginPage() {
    return (
      <div className="py-8 bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center">
        <div className="container mx-auto px-4 max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white text-center">
            Connexion
          </h1>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 dark:text-gray-200 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Votre email"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-gray-700 dark:text-gray-200 mb-1"
              >
                Mot de passe
              </label>
              <input
                id="password"
                type="password"
                className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Votre mot de passe"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded transition duration-300"
            >
              Se connecter
            </button>
          </form>
        </div>
      </div>
    );
  }
  