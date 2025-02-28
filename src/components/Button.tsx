import React from "react";

interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="bg-orange-400 rounded-full px-8 py-3 font-bold text-white mt-4 group w-48"
    >
      <span className="inline-block transform transition-transform duration-300 ease-in-out group-hover:scale-110">
        {label}
      </span>
    </button>
  );
};

export default Button;
