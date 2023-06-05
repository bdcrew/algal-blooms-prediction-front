import React, { useState, InputHTMLAttributes } from "react";

interface P extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: string;
}

const TextField: React.FC<P> = ({ label, type = "text", ...props }) => {
  const [focus, setFocus] = useState(false);

  return (
    <div className="relative flex items-center">
      <input
        {...props}
        type={type}
        className={`h-11 block w-full px-3 py-2 
        placeholder-gray-500 border border-gray-300 rounded 
        outline-none focus:border-blue-500 ${
          focus || props.value ? "" : "bg-blue-50"
        }
        `}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      <label
        htmlFor={props.id}
        className={`absolute left-3  ${
          focus || props.value
            ? "text-micro -top-2.5 bg-white px-1 rounded-sm"
            : "text-small top-1/4"
        } ${
          focus ? "text-blue-500" : "text-gray-700"
        }  transition-all duration-200`}
      >
        {label}
      </label>
    </div>
  );
};

export default TextField;
