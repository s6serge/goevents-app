import Header from '@/components/Header';


import Image from 'next/image';
import styles from './page.module.css';

export default function RootLayout({children}) {
    return (
        <html lang='en'>

        <main className={styles.main}>
            
        <Header/>
            <div className={styles.welcome}>
            Soyez la bienvenue sur GoEvents-app
             </div>

            
        </main>

        </html>
      
    );
}
