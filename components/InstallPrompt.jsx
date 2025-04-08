'use client';

import { MdOutlineInstallDesktop } from 'react-icons/md';

import { useEffect, useState } from 'react';

export default function InstallPrompt() {
  const [installPrompt, setInstallPrompt] = useState(null);

  useEffect(() => {
    const getInstallPrompt = (event) => {
      event.preventDefault();
      setInstallPrompt(event);
    };

    window.addEventListener('beforeinstallprompt', getInstallPrompt);

    // Cleanup
    return () => {
      window.removeEventListener('beforeinstallprompt', getInstallPrompt);
    };
  }, [setInstallPrompt]);

  const handleClose = () => setInstallPrompt(null);

  const handleInstall = async () => {
    installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    console.log(outcome);
    if (outcome === 'accepted') {
      setInstallPrompt(null);
    }
  };

  return (
    installPrompt && (
      <div className="relative flex w-full justify-between items-center p-2 bg-gray-200 mb-8 rounded-lg overflow-hidden">
        {/* Cercle décoratif gauche */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-green-500 rounded-full ml-2 shadow-md" />

        <div className="flex items-center gap-2 z-10">
          <MdOutlineInstallDesktop className="text-green-600" />
          <button
            onClick={handleInstall}
            className="text-green-700 font-medium hover:underline"
          >
            Cliquer ici pour installer!
          </button>
        </div>

        <button
          onClick={handleClose}
          className="z-10 text-gray-700 hover:text-red-500 font-bold text-lg"
        >
          &times;
        </button>

        {/* Cercle décoratif droite */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full mr-2 shadow-md" />
      </div>
    )
  );
}
