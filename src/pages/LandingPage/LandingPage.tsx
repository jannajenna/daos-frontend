import React from 'react';
import styles from './LandingPage.module.css';

function LandingPage() {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <header className={styles.header}>
        <div className={styles.logoSection}>
          <h1 className={styles.title}>Musik Samspil</h1>
          <p className={styles.subtitle}>
            Skabt af DAOS - Dansk Amatørorkester Samvirke
          </p>
        </div>
        <button className={styles.menuIcon}>☰</button>
      </header>

      {/* Main Content Section */}
      <main className={styles.mainContent}>
        <div className={styles.musicGraphic}>
          <img
            src="music-notes.svg" /* replace if we can get the right image */
            alt="Music Notes"
            className={styles.musicImage}
          />
        </div>
        <h2 className={styles.description}>
          Stedet hvor musikere finder musikere og spiller musik sammen
        </h2>

        {/* Login Box */}
        <div className={styles.loginBox}>
          <p className={styles.loginText}>
            Log ind for at finde musikere du kan spille med i hele Danmark
          </p>
          <button className={`${styles.btn} ${styles.facebook}`} disabled>
            Log ind med Facebook
          </button>
          <button className={`${styles.btn} ${styles.email}`}>
            Opret med e-mail
          </button>
          <p className={styles.divider}>eller</p>
          <button className={`${styles.btn} ${styles.login}`}>Log ind</button>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;

