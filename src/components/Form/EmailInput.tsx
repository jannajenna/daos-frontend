import React from "react";
//import styles from "./Form.module.css";

interface EmailInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const EmailInput: React.FC<EmailInputProps> = ({ label, value, onChange, placeholder }) => (
  <div className="none">
    <label className="none">{label}</label>
    <input type="email" value={value} onChange={onChange} placeholder={placeholder} className="none" />
  </div>
);

export default EmailInput;
