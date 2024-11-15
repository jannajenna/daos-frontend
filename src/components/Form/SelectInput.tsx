import React from 'react';
import './Form.modules.css';

interface SelectInputProps {
  options: string[];
  placeholder: string;
}

const SelectInput: React.FC<SelectInputProps> = ({ options, placeholder }) => {
  return (
    <select className="form-field">
      <option value="" disabled selected hidden>{placeholder}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
