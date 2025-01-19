import Header from '@/components/Header';
import styles from './page.module.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className={styles.main}>
          <Header />
          <div className={styles.welcome}>
            Soyez la bienvenue sur GoEvents-app
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}