import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => (
  <div className="form-control">
    {label && (
      <label className="label">
        <span className="font-medium label-text">{label}</span>
      </label>
    )}
    <input className="w-full input input-bordered" {...props} />
  </div>
);

export default Input;
