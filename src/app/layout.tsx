import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import styles from './layout.module.css';

export const metadata: Metadata = {
  title: 'Gestionale Camion Stefano',
  description: 'Logistica e gestione autisti e mezzi',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>
        <div className={styles.appContainer}>
          <aside className={`${styles.sidebar} glass-panel`}>
            <div className={styles.logo}>
              <h2>STEFANO <br/><span>Logistics</span></h2>
            </div>
            <nav className={styles.nav}>
              <Link href="/" className={styles.navLink}>Dashboard</Link>
              <Link href="/ordini" className={styles.navLink}>Ordini</Link>
              <Link href="/autisti" className={styles.navLink}>Autisti</Link>
              <Link href="/veicoli" className={styles.navLink}>Veicoli</Link>
            </nav>
            <div className={styles.userProfile}>
              <div className={styles.avatar}>S</div>
              <div>
                <p className={styles.userName}>Stefano</p>
                <p className={styles.userRole}>Amministratore</p>
              </div>
            </div>
          </aside>
          <main className={styles.mainContent}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
