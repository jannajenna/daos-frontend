import React from "react";
import { useNavigate } from "@tanstack/react-router";

interface PrimaryButtonProps {
  label: string; //Text that will appear on the button will be a string
  onClick?: () => void; // Function to call when the button is clicked
  type?: "button" | "submit" | "reset"; //This button can have different purposes
  to?: string; // Added for routing
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ label, onClick, to, type = "button" }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate({ to });
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button type={type} onClick={handleClick}>
      {label}
    </button>
  );
};

export default PrimaryButton;
