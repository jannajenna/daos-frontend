import React from "react";
import styles from "./EditProfile.module.css";

const EditProfile: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>Rediger Profil</h2>
        <div className={styles.menuIcon}>☰</div>
      </header>

      <form className={styles.form}>
        {/*Name*/}
        <div className={styles.formGroup}>
          <label htmlFor="name">Navn</label>
          <input type="text" id="name" name="name" placeholder="Navn" />
          <input type="text" id="surname" name="surname" placeholder="Efternavn" />
        </div>
        {/*Profile picture*/}
        <div className={styles.formGroup}>
          <label htmlFor="profilePicture">Profilbillede</label>
          <div className={styles.profilePreviewPlaceholder}>{/* Placeholder for profile picture preview */}</div>
          <input type="file" id="profilePicture" accept="image/*" />
          <button type="button" className={styles.secondaryButton}>
            Upload billede
          </button>
        </div>
        {/* Description */}
        <div className={styles.formGroup}>
          <label htmlFor="description">Profilbeskrivelse</label>
          <textarea id="description" name="description" placeholder="Skriv en kort beskrivelse af dig selv"></textarea>
        </div>
        {/* Adress */}
        <div className={styles.formGroup}>
          <label>Område</label>
          <input type="text" id="post" name="post" placeholder="Indtast postnummer" />
          <input type="text" id="city" name="city" placeholder="Indtast by" />
        </div>

        {/* Contact Information */}
        <div className={styles.formGroup}>
          <label>Kontaktoplysninger</label>
          <small>Indtast din email og telefonnummer</small>
          <input type="email" id="email" name="email" placeholder="Indtast email" />
          <input type="tel" id="phone" name="phone" placeholder="Indtast telefonnummer" />
        </div>

        {/* Instrument */}
        <div className={styles.formGroup}>
          <label>Instrument</label>
          <select id="instrument" name="instrument">
            <option value="">Vælg instrument</option>
            <option value="guitar">Guitar</option>
            <option value="piano">Piano</option>
            <option value="violin">Violin</option>
            <option value="drums">Drums</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit" className={styles.primaryButton}>
          Gem profil
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
