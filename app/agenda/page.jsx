

import Agenda from "@/components/Agenda";
export const metadata = {
  title: 'GoEvent | Agenda',
  description:
    'Consultez et gérez votre agenda pour ne manquer aucun événement important avec biblio-app.',
  openGraph: {
    title: 'GoEvent | Agenda',
    description:
      'Consultez et gérez votre agenda pour ne manquer aucun événement important avec biblio-app.',
    images: ['./react.webp'],
  },
};


export default function AgendaPage() {
    return <Agenda />;
} 