import React from "react";
//import styles from "./Form.module.css";

interface PasswordInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ label, value, onChange, placeholder }) => (
  <div className="none">
    <label className="none">{label}</label>
    <input type="password" value={value} onChange={onChange} placeholder={placeholder} className="none" />
  </div>
);

export default PasswordInput;
