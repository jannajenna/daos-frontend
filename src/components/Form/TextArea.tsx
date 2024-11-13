import React from "react";
import styles from "./Form.module.css";

interface TextAreaProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, value, onChange, placeholder }) => (
  <div className={styles.inputGroup}>
    <label className={styles.label}>{label}</label>
    <textarea value={value} onChange={onChange} placeholder={placeholder} className={styles.textArea} rows={4} />
  </div>
);

export default TextArea;
