import React from "react";
//Import styles
//import styles from "./Button.modules.css";

interface SecondaryButtonProps {
  label: string; //Text that will appear on the button will be a string
  onClick: () => void; // Function to call when the button is clicked
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ label, onClick }) => {
  return (
    //We use className attribute to apply CSS classes to elements since "class" is a JS reserved keyword
    <button onClick={onClick}>{label}</button>
  );
};

export default SecondaryButton;
