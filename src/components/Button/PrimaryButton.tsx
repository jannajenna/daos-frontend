import React from "react";
//Import styles
//import styles from "./Button.modules.css";

interface PrimaryButtonProps {
  label: string; //Text that will appear on the button will be a string
  onClick: () => void; // Function to call when the button is clicked
  type?: "button" | "submit" | "reset"; //This button can have different purposes
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ label, onClick }) => {
  return (
    //We use className attribute to apply CSS classes to elements since "class" is a JS reserved keyword
    //className={styles.primaryButton}
    <button onClick={onClick}>{label}</button>
  );
};

export default PrimaryButton;
