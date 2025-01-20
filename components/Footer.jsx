// components/Footer.jsx
export default function Footer() {
    return (
        <footer className="bg-blue-500 text-white p-4 mt-auto">
            <div className="container mx-auto text-center">
                <p>&copy; 2023 GoEvents-app. Tous droits réservés.</p>
                <ul className="flex justify-center gap-x-4 mt-2">
                    <li><a href="#" className="hover:underline">Mentions légales</a></li>
                    <li><a href="#" className="hover:underline">Politique de confidentialité</a></li>
                    <li><a href="#" className="hover:underline">Contact</a></li>
                </ul>
            </div>
        </footer>
    );
}
