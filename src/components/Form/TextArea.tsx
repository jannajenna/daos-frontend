import React from "react";
//import styles from "./Form.module.css";

interface TextAreaProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, value, onChange, placeholder }) => (
  <div className="none">
    <label className="none">{label}</label>
    <textarea value={value} onChange={onChange} placeholder={placeholder} className="none" rows={4} />
  </div>
);

export default TextArea;
