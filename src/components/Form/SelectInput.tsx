import React from "react";
//import styles from "./Form.module.css";

interface SelectInputProps {
  label: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({ label, options, value, onChange }) => (
  <div className="none">
    <label className="none">{label}</label>
    <select value={value} onChange={onChange} className="none">
      <option value="" disabled>
        Select an option
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default SelectInput;
