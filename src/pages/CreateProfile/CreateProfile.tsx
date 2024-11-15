// src/pages/CreateProfile.tsx
import React, { useState } from "react";

// Imported components
import { PrimaryButton, EmailInput, TextInput, PasswordInput } from "../../components";
import styles from "./CreateProfile.module.css";

// Function to handle form submission
const handleSubmit = (e: React.FormEvent, name: string, surname: string, email: string, password: string) => {
  e.preventDefault();
  console.log({ name, surname, email, password });
};

const CreateProfile: React.FC = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Opret profil</h1>
      <form onSubmit={(e) => handleSubmit(e, name, surname, email, password)} className={styles.form}>
        <div className={styles.nameFields}>
          <TextInput label="Fornavn" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your first name" />
          <TextInput label="Efternavn" value={surname} onChange={(e) => setSurname(e.target.value)} placeholder="Enter your last name" />
        </div>
        <div>
          <EmailInput label="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
        </div>
        <div>
          <PasswordInput label="Password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
        </div>
        <PrimaryButton label="Create Profile" type="submit" />
      </form>
    </section>
  );
};

export default CreateProfile;
