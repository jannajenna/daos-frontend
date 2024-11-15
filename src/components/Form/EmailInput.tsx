import React from 'react';

interface EmailInputProps {
  placeholder: string;
}

const EmailInput: React.FC<EmailInputProps> = ({ placeholder }) => {
  return <input type="email" className="form-field" placeholder={placeholder} />;
};

export default EmailInput;

