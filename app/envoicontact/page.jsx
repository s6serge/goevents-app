
import InstallPrompt from '@/components/InstallPrompt';
import Envoicontact from "@/components/Envoicontact";
export const metadata = {
  title: 'GoEvent | contact',
  description:
    'Contactez l’équipe GoEvent pour toute question, demande d’information ou assistance.',
  openGraph: {
    title: 'GoEvent | contact',
    description:
      'Contactez l’équipe GoEvent pour toute question, demande d’information ou assistance.',
    images: ['./react.webp'],
  },
  manifest: '/manifest.json',
};

export default function EnvoicontactPage() {
  return (
    <>
      <Envoicontact />
      <InstallPrompt />
    </>
  );
} 