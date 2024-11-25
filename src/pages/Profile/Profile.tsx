import React from "react";
import styles from "./Profile.module.css";

const Profile: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.title}>Musik Samspil</h1>
        <div className={styles.menuIcon}>☰</div>
      </header>

      {/* Profile Section */}
      <section className={styles.profileSection}>
        <img src="placeholder-avatar.png" alt="User Avatar" className={styles.avatar} />
        <h3 className={`${styles.name} ${styles.redText}`}>Susanne N.</h3>
        <p className={styles.details}>
          <small>Medlem siden: Maj 2020</small>
          <br />
          <small>Sidst logget ind: 1 time siden</small>
        </p>
        <div className={styles.buttons}>
          <button className={styles.secondaryButton}>Rediger Profil</button>
          <button className={styles.secondaryButton} disabled>
            Indstillinger
          </button>
        </div>
      </section>

      {/* My Ensembles Section */}
      <section className={styles.myEnsemblesSection}>
        <h3 className={`${styles.sectionTitle} ${styles.blueText}`}>Mine ensembler</h3>
        <div className={styles.ensembleCard}>
          <img src="placeholder-ensemble.png" alt="Ensemble" className={styles.ensembleImage} />
          <h3 className={styles.blueText}>Ingen ensembler</h3>
          <p className={styles.bodyText}>Hvis du repræsenterer et ensemble, kan du oprette det her, så du kan lave opslag på vegne af ensemblet.</p>
          <button className={styles.primaryButton}>Opret ensemble</button>
        </div>
      </section>

      {/* My Posts Section */}
      <section className={styles.myPostsSection}>
        <h3 className={`${styles.sectionTitle} ${styles.blueText}`}>Mine opslag</h3>
        <div className={styles.noPosts}>
          <p className={styles.bodyText}>Du skal oprette et ensemble for at kunne lave opslag.</p>
        </div>
        <button className={styles.primaryButton} disabled>
          Opret opslag
        </button>
      </section>
    </div>
  );
};

export default Profile;
