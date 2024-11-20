import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Imported components
import { PrimaryButton, EmailInput, TextInput, PasswordInput } from "../../components";
import styles from "./CreateProfile.module.css";

// Main Component
const CreateProfile: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // Validation
    if (!name || !surname || !email || !password) {
      alert("Udfyld venligst alle felter.");
      return;
    }
  
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Indtast en gyldig email-adresse.");
      return;
    }
  
    // Simulate successful submission
    console.log({ name, surname, email, password });
  
    // Navigate to the profile page
    navigate("/profile");
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Opret profil</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.nameFields}>
          <TextInput
            label="Fornavn"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Indtast dit fornavn"
          />
          <TextInput
            label="Efternavn"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            placeholder="Indtast dit efternavn"
          />
        </div>
        <div>
          <EmailInput
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Indtast din email"
          />
        </div>
        <div>
          <PasswordInput
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Indtast din adgangskode"
          />
        </div>
        <PrimaryButton label="Opret profil" type="submit" />
      </form>
    </section>
  );
};

export default CreateProfile;