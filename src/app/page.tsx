import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Dashboard Overview</h1>
          <p className={styles.subtitle}>Benvenuto nel gestionale, ecco il riepilogo di oggi.</p>
        </div>
      </header>

      <div className={styles.kpiGrid}>
        <div className={`glass-panel ${styles.kpiCard}`}>
          <h3>Viaggi in Corso</h3>
          <p className={styles.kpiValue}>0</p>
        </div>
        <div className={`glass-panel ${styles.kpiCard}`}>
          <h3>Ordini da Assegnare</h3>
          <p className={styles.kpiValue}>0</p>
        </div>
        <div className={`glass-panel ${styles.kpiCard}`}>
          <h3>Autisti Disponibili</h3>
          <p className={styles.kpiValue}>0</p>
        </div>
        <div className={`glass-panel ${styles.kpiCard}`}>
          <h3>Scadenze Imminenti</h3>
          <p className={`${styles.kpiValue} ${styles.danger}`}>0</p>
        </div>
      </div>

      <div className={styles.contentGrid}>
        <div className={`glass-panel ${styles.mainPanel}`}>
          <h2>Ultimi Ordini</h2>
          <div className={styles.emptyState}>Nessun ordine recente.</div>
        </div>
        <div className={`glass-panel ${styles.sidePanel}`}>
          <h2>Avvisi Scadenze</h2>
          <div className={styles.emptyState}>Tutto in regola.</div>
        </div>
      </div>
    </div>
  );
}
