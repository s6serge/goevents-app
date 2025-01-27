export default function DisplayAgend({ doc }) {
    // Vérifiez que 'doc' et 'doc.title' existent avant de les utiliser
    if (!doc || !doc.title) {
      return <div>Erreur : données de l'événement manquantes ou mal formatées.</div>;
    }
  
    return (
      <div className="event-card">
        <h2>{doc.title}</h2>
        <p>{doc.description}</p>
        <p>{doc.date}</p>
        {/* Affichage de l'image si disponible */}
        {doc.image && <img src={doc.image} alt={doc.title} />}
      </div>
    );
  }
  