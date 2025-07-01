import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, ...props }) => (
  <div className="form-control">
    {label && (
      <label className="label">
        <span className="font-medium label-text">{label}</span>
      </label>
    )}
    <textarea className="w-full textarea textarea-bordered" {...props} />
  </div>
);

export default Textarea;
