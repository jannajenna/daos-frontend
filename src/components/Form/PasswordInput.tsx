import React from 'react';
import './Form.modules.css';

interface PasswordInputProps {
  placeholder: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ placeholder }) => {
  return <input type="password" className="form-field" placeholder={placeholder} />;
};

export default PasswordInput;
