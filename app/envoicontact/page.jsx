

import Envoicontact from "@/components/Envoicontact";
export const metadata = {
  metadataBase: new URL('https://acme.com'),
  title: 'GoEvent | contact',
  description:
    'Contactez l’équipe GoEvent pour toute question, demande d’information ou assistance.',
  openGraph: {
    title: 'GoEvent | contact',
    description:
      'Contactez l’équipe GoEvent pour toute question, demande d’information ou assistance.',
    images: ['./logodusite.webp'],
  },
};

export default function EnvoicontactPage() {
    return <Envoicontact />;
} 