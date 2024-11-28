// Imported components
import { EmailInput, TextInput, PasswordInput } from "../../components";
import styles from "./CreateProfile.module.css";

const CreateProfile: React.FC = () => {
  //Functionality

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Opret profil</h1>
      <form /*onSubmit={handleSubmit}*/ className={styles.form}>
        <div className={styles.nameFields}>
          <TextInput
            /*label="Fornavn"
            value={name}
            onChange={(e) => setName(e.target.value)}*/
            placeholder="Indtast dit fornavn"
          />
          <TextInput
            /*label="Efternavn"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}*/
            placeholder="Indtast dit efternavn"
          />
        </div>
        <div>
          <EmailInput
            /*label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}*/
            placeholder="Indtast din email"
          />
        </div>
        <div>
          <PasswordInput
            /*label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}*/
            placeholder="Indtast din adgangskode"
          />
        </div>
        {/*Primary button goes here */}
      </form>
    </section>
  );
};

export default CreateProfile;
