// app/contact/page.jsx
export default function ContactPage() {
    return (
      <div className="py-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white text-center">
            Contact
          </h1>
          <div className="flex flex-col md:flex-row md:justify-center md:space-x-8">
            <div className="mb-4 md:mb-0 md:w-1/2">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
                Notre Adresse
              </h2>
              <p className="text-gray-700 dark:text-gray-200">
                123 Rue Moliere, Paris, FRANCE
              </p>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
                Contactez-nous
              </h2>
              <p className="text-gray-700 dark:text-gray-200">
                Email: contact@goevents.com<br />
                Téléphone: +33 787 96 22 33 
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  