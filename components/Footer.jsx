import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; // Import the icons

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6 md:py-8 w-full">
      <div className="container max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-lg font-bold text-accent mb-2">GoEvents</h2>
          <p className="text-sm text-textSecondary">
            Explorez les événements, conférences et festivals à venir.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-2 text-accent">Liens rapides</h3>
          <ul className="text-sm space-y-1">
            <li><a href="/about" className="hover:text-secondary">À propos</a></li>
            <li><a href="/events" className="hover:text-secondary">Événements</a></li>
            <li><a href="/contact" className="hover:text-secondary">Contact</a></li>
            <li><a href="/faq" className="hover:text-secondary">FAQ</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-2 text-accent">Contact</h3>
          <ul className="text-sm space-y-1">
            <li>Email : <a href="mailto:support@goevents.com" className="hover:text-secondary">support@goevents.com</a></li>
            <li>Téléphone : <a href="tel:+123456789" className="hover:text-secondary">+1 234 567 89</a></li>
            <li>Adresse : 123 Rue des Événements, Ville, Pays</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-2 text-accent">Suivez-nous</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-secondary">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-secondary">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-secondary">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-textSecondary">
        © {new Date().getFullYear()} GoEvents. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
