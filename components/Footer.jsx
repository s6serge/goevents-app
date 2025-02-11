import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; // Importation des icônes de réseaux sociaux depuis react-icons

// Level 1: UI Components
// Composant FooterSection : sert de conteneur pour une section du pied de page avec un titre et un contenu (children)
const FooterSection = ({ title, children }) => (
    <div>
        <h3 className="text-lg font-semibold mb-4 text-light-primary dark:text-accent">
            {title} {/* Affiche le titre de la section */}
        </h3>
        {children} {/* Contenu de la section */}
    </div>
);

// Level 2: Section Components
// Composant QuickLinks : affiche une liste de liens rapides (navigation) pour le pied de page
const QuickLinks = () => (
    <ul className="text-white text-sm space-y-2">
        <li>
            <a href="/about" 
               className="group inline-flex items-center text-white 
                        transition-all duration-200 ease-in-out">
                <span className="hover:text-accent hover:underline transform 
                               group-hover:scale-110 inline-block">
                    À propos
                </span>
            </a>
        </li>
        <li>
            <a href="/events" 
               className="group inline-flex items-center text-white 
                        transition-all duration-200 ease-in-out">
                <span className="hover:text-accent hover:underline transform 
                               group-hover:scale-110 inline-block">
                    Événements
                </span>
            </a>
        </li>
        <li>
            <a href="/faq" 
               className="group inline-flex items-center text-white 
                        transition-all duration-200 ease-in-out">
                <span className="hover:text-accent hover:underline transform 
                               group-hover:scale-110 inline-block">
                    FAQ
                </span>
            </a>
        </li>
    </ul>
);

// Composant ContactInfo : affiche les informations de contact (email, téléphone, adresse)
const ContactInfo = () => (
    <ul className="text-white text-sm space-y-2">
        <li>
            <a href="mailto:support@goevents.com" 
               className="group inline-flex items-center text-white 
                        transition-all duration-200 ease-in-out">
                <span className="hover:text-accent hover:underline transform 
                               group-hover:scale-110 inline-block">
                    Email: sup@goevents.com
                </span>
            </a>
        </li>
        <li>
            <a href="tel:+123456789" 
               className="group inline-flex items-center text-white 
                        transition-all duration-200 ease-in-out">
                <span className="hover:text-accent hover:underline transform 
                               group-hover:scale-110 inline-block">
                    Téléphone: +1 234 567 89
                </span>
            </a>
        </li>
        <li className="text-white">
            Adresse: 123 Rue des Événements
        </li>
    </ul>
);

// Level 3: Feature Components
// Composant SocialLinks : affiche les icônes des réseaux sociaux avec leurs liens respectifs
const SocialLinks = () => (
    <div className="flex justify-center md:justify-start space-x-4">
        <a href="#" 
           className="group p-1 inline-flex items-center text-white 
                    transition-all duration-200 ease-in-out">
            <span className="text-xl hover:text-accent transform group-hover:scale-110">
                <FaFacebook aria-label="Facebook" /> {/* Icône Facebook */}
            </span>
        </a>
        <a href="#" 
           className="group p-1 inline-flex items-center text-white 
                    transition-all duration-200 ease-in-out">
            <span className="text-xl hover:text-accent transform group-hover:scale-110">
                <FaTwitter aria-label="Twitter" /> {/* Icône Twitter */}
            </span>
        </a>
        <a href="#" 
           className="group p-1 inline-flex items-center text-white 
                    transition-all duration-200 ease-in-out">
            <span className="text-xl hover:text-accent transform group-hover:scale-110">
                <FaInstagram aria-label="Instagram" /> {/* Icône Instagram */}
            </span>
        </a>
    </div>
);

// Level 4: UI Elements
// Composant Copyright : affiche le copyright avec l'année en cours
const Copyright = () => {
    const year = new Date().getFullYear(); // Récupère l'année actuelle
    return (
        <div className="text-center text-sm text-white/80 mt-8">
            © {year} GoEvents. Tous droits réservés.
        </div>
    );
};

// Main Component
// Composant principal Footer : regroupe toutes les sections du pied de page
export default function Footer() {
    return (
        <footer className="bg-primary py-12">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Section Liens Rapides */}
                <FooterSection title="Liens Rapides">
                    <QuickLinks />
                </FooterSection>

                {/* Section Contact */}
                <FooterSection title="Contact">
                    <ContactInfo />
                </FooterSection>

                {/* Section Suivez-nous */}
                <FooterSection title="Suivez-nous">
                    <SocialLinks />
                </FooterSection>
            </div>
            {/* Affichage du Copyright en bas du pied de page */}
            <Copyright />
        </footer>
    );
}
