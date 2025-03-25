

import Agenda from "@/components/Agenda";
export const metadata = {
  metadataBase: new URL('https://acme.com'),
  title: 'GoEvent | Agenda',
  description:
    'Consultez et gérez votre agenda pour ne manquer aucun événement important avec biblio-app.',
  openGraph: {
    title: 'GoEvent | Agenda',
    description:
      'Consultez et gérez votre agenda pour ne manquer aucun événement important avec biblio-app.',
    images: ['./logodusite.webp'],
  },
};


export default function AgendaPage() {
    return <Agenda />;
} 