// components/GoEventLogo.jsx
// Ce composant affiche le logo "GoEvent" avec un dégradé de couleurs et des effets stylisés.
export default function GoEventLogo() {
  return (
    // Conteneur centré horizontalement et verticalement
    <div className="flex items-center justify-center">
      {/*
        Le titre "GoEvent" est stylisé avec :
        - Une grande taille de police (text-5xl)
        - Une graisse de police extrême (font-extrabold)
        - Un dégradé de couleurs de bleu à violet (bg-gradient-to-r from-blue-500 to-purple-600)
        - Un texte transparent qui laisse apparaître le dégradé via bg-clip-text
        - Un effet d'ombre léger (drop-shadow-md)
      */}
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text drop-shadow-md">
        GoEvent
      </h1>
    </div>
  );
}
