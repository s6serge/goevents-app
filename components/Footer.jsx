import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
<<<<<<< HEAD

const footerSections = [
  {
    title: "Liens rapides",
    links: [
      { href: "/about", label: "À propos" },
      { href: "/events", label: "Événements" },
      { href: "/contact", label: "Contact" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Contact",
    links: [
      { href: "mailto:support@goevents.com", label: "Email: sup@goevents.com" },
      { href: "tel:+123456789", label: "Téléphone: +1 234 567 89" },
      { label: "Adresse: 123 Rue des Événements, Ville, Pays" },
    ],
  },
];

const socialLinks = [
  { href: "https://facebook.com", icon: <FaFacebook /> },
  { href: "https://instagram.com", icon: <FaInstagram /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
];

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

        {/* Render Footer Sections */}
        {footerSections.map((section) => (
          <div key={section.title}>
            <h3 className="text-lg font-bold mb-2 text-[#D97706]">{section.title}</h3>
            <ul className="text-sm space-y-1">
              {section.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href || "#"}
                    className="hover:underline hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-2 text-[#D97706]">Suivez-nous</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="hover:underline hover:text-white transition-colors duration-300 text-xl"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-white">
        © {new Date().getFullYear()} GoEvents. Tous droits réservés.
=======

const Footer = () => {
  const year = new Date().getFullYear();

  const links = [
    { href: "/about", text: "À propos" },
    { href: "/events", text: "Événements" },
    
    { href: "/faq", text: "FAQ" },
  ];

  const contactInfo = [
    {
      label: "Email",
      value: "sup@goevents.com",
      href: "mailto:support@goevents.com",
    },
    {
      label: "Téléphone",
      value: "+1 234 567 89",
      href: "tel:+123456789",
    },
    { label: "Adresse", value: "123 Rue des Événements, Ville, Pays" },
  ];

  const socialMedia = [
    { href: "https://facebook.com", icon: <FaFacebook /> },
    { href: "https://instagram.com", icon: <FaInstagram /> },
    { href: "https://twitter.com", icon: <FaTwitter /> },
  ];

  return (
    <footer className="bg-[#1E3A8A] text-white py-6 md:py-8 w-full">
      <div className="container max-w-4xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <h2 className="text-lg font-bold text-[#D97706] mb-2">GoEvents</h2>
          <p className="text-sm">Explorez les événements, conférences et festivals à venir.</p>
        </div>

        
        <div>
          <h3 className="text-lg font-bold mb-2 text-[#D97706]">Liens rapides</h3>
          <ul className="text-sm space-y-1">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:bg-[#F59E0B] hover:text-white transition-colors duration-300 px-1"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        

        <div>
          <h3 className="text-lg font-bold mb-2 text-[#D97706]">Contact</h3>
          <ul className="text-sm space-y-1">
            {contactInfo.map((item, index) => (
              <li key={index}>
                {item.href ? (
                  <a
                    href={item.href}
                    className="hover:underline hover:text-white transition-colors duration-300"
                  >
                    {item.label}: {item.value}
                  </a>
                ) : (
                  `${item.label}: ${item.value}`
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2 text-[#D97706]">Suivez-nous</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="hover:underline hover:text-white transition-colors duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
        © {year} GoEvents. Tous droits réservés.
>>>>>>> e3ca7d7 (Correction apporter sur le header et le footer)
      </div>
    </footer>
  );
};

export default Footer;
