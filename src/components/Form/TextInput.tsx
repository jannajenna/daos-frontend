import React from "react";

//Imported styles:
//import styles from "./Form.module.css";

interface TextInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, value, onChange, placeholder }) => (
  <div className="none">
    <label className="none">{label}</label>
    <input type="text" value={value} onChange={onChange} placeholder={placeholder} className="none" />
  </div>
);

export default TextInput;
