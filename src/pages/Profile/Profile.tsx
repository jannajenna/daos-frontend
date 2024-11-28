import React from "react";
import styles from "./Profile.module.css";

const ProfilePage: React.FC = () => {
  return (
    <div className={styles.ProfilePage}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.title}>Musik Samspil</h1>
        <p className={styles.subtitle}>
          Skabt af DAOS - Dansk Amatørorkester Samvirke
        </p>
        <div className={styles.menuIcon}>☰</div>
      </header>

      {/* Profile Section */}
      <section className={styles.profileSection}>
        <img
          src="placeholder-avatar.png"
          alt="User Avatar"
          className={styles.avatar}
        />
        <h2 className={styles.name}>Susanne N.</h2>
        <p className={styles.details}>
          Medlem siden Maj 2020<br />
          Sidst logget ind 1 time siden
        </p>
        <div className={styles.buttons}>
          <button className="primary">Rediger Profil</button>
          <button className="disabled" disabled>
            Indstillinger
          </button>
        </div>
      </section>

      {/* Ensembles Section */}
      <section className={styles.ensembleSection}>
        <div className={styles.ensembleHeader}>
          <h3 className={styles.ensembleTitle}>Mine ensembler</h3>
          <button className="primary">Opret</button>
        </div>
        <div className={styles.noEnsemble}>
          <p className={styles.noEnsembleText}>Ingen ensembler</p>
          <p className={styles.noEnsembleDescription}>
            Hvis du repræsenterer et ensemble kan du oprette det her, så du kan
            lave og opslag på vegne af ensemblet.
          </p>
          <button className="primary">Opret Ensemble</button>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;

