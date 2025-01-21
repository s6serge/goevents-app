import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#1E3A8A] text-white py-6 md:py-8 w-full">
            <div className="container max-w-4xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
                {/* Logo and Description */}
                <div>
                    <h2 className="text-lg font-bold text-[#D97706] mb-2">GoEvents</h2>
                    <p className="text-sm text-white">
                        Explorez les événements, conférences et festivals à venir.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-bold mb-2 text-[#D97706]">Liens rapides</h3>
                    <ul className="text-sm space-y-1">
                        <li><a href="/about" className="hover:bg-[#F59E0B] hover:text-white transition-colors duration-300">À propos</a></li>
                        <li><a href="/events" className="hover:underline hover:text-white transition-colors duration-300">Événements</a></li>
                        <li><a href="/contact" className="hover:underline hover:text-white transition-colors duration-300">Contact</a></li>
                        <li><a href="/faq" className="hover:underline hover:text-white transition-colors duration-300">FAQ</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-bold mb-2 text-[#D97706]">Contact</h3>
                    <ul className="text-sm space-y-1">
                        <li>Email: <a href="mailto:support@goevents.com" className="hover:underline hover:text-white transition-colors duration-300">sup@goevents.com</a></li>
                        <li>Téléphone: <a href="tel:+123456789" className="hover:underline hover:text-white transition-colors duration-300">+1 234 567 89</a></li>
                        <li>Adresse: 123 Rue des Événements, Ville, Pays</li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-bold mb-2 text-[#D97706]">Suivez-nous</h3>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a href="https://facebook.com" className="hover:underline hover:text-white transition-colors duration-300"><FaFacebook /></a>
                        <a href="https://instagram.com" className="hover:underline hover:text-white transition-colors duration-300"><FaInstagram /></a>
                        <a href="https://twitter.com" className="hover:underline hover:text-white transition-colors duration-300"><FaTwitter /></a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-white">
                © {new Date().getFullYear()} GoEvents. Tous droits réservés.
            </div>
        </footer>
    );
};

export default Footer;
