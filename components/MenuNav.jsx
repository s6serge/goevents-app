export function MenuNav({ changePage = () => {}, menuOpen }) {
  const menuItems = [
    { key: "accueil", label: "Accueil" },
    { key: "agenda", label: "Agenda" },
    { key: "contact", label: "Ajout Evenement" },
    { key: "espace", label: "Espace Client" },
  ];

  return (
    <nav>
      <ul className="hidden md:flex justify-center gap-x-8">
        {menuItems.map(({ key, label }) => (
          <li key={key}>
            <button onClick={() => changePage(key)} className="px-4 py-2 hover:underline">{label}</button>
          </li>
        ))}
      </ul>

      <ul
        className={`md:hidden fixed top-16 left-0 w-full bg-primary text-white flex flex-col items-center gap-4 p-6 transition-transform duration-300 ease-in-out ${menuOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        {menuItems.map(({ key, label }) => (
          <li key={key}>
            <button onClick={() => changePage(key)} className="px-4 py-2 hover:underline">{label}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
