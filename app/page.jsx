import Accueil from "@/components/Accueil";
export const metadata = {
  title: 'GoEvent | Accueil',
  description:
    'Bienvenue sur GoEvent, la plateforme idéale pour organiser et découvrir des événements.',
  openGraph: {
    title: 'GoEvent | Accueil',
    description:
      'Bienvenue sur GoEvent, la plateforme idéale pour organiser et découvrir des événements.',
    images: ['./react.webp'],
  },
};

export default function Home() {
    return <Accueil />;
}


