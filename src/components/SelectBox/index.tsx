import React, { useState, useRef } from "react";

interface P {
  label: string;
  options: string[];
  onChange: (option: string | string[]) => void;
  multiple?: boolean;
  value?: string | string[];
}

const getSelectValueText = (value?: string | string[]) => {
  if (Array.isArray(value)) {
    let text = "";
    const length = value.length;
    value.forEach((property, idx) => {
      text += property;
      if (idx !== length - 1) {
        text += ", ";
      }
    });
    return text;
  } else {
    return value;
  }
};

const getCheckOfSelectedValue = (
  multiple: boolean,
  option: string,
  value?: string | string[]
) => {
  if (multiple) {
    return value?.includes(option);
  } else {
    return value === option;
  }
};

const SelectBox: React.FC<P> = ({
  label,
  options,
  onChange,
  value,
  multiple = false,
}) => {
  const [open, setOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleFocusIn = () => {
    setOpen(true);
  };

  const handleBlur = (e: React.FocusEvent) => {
    if (!selectRef.current?.contains(e.relatedTarget as Node)) {
      setOpen(false);
    }
  };

  const handleSelect = (option: string) => {
    onChange(option);
    setOpen(false);
  };

  const handleMultipleSelect = (option: string) => {
    const values = value as string[] | undefined;
    if (values) {
      if (values.includes(option)) {
        onChange(values.filter((value) => value !== option));
      } else {
        onChange([...values, option]);
      }
    } else {
      onChange([option]);
    }
  };

  return (
    <div
      ref={selectRef}
      onBlur={handleBlur}
      className="relative w-full"
      tabIndex={0}
    >
      <div
        className={`
        flex items-center w-full h-11 px-3 py-2 justify-between
        cursor-pointer border  rounded 
        ${
          open || (value && value?.length > 0)
            ? "bg-white border-blue-500"
            : "bg-blue-50 border-gray-300"
        }
        
        `}
        onClick={() => setOpen(!open)}
        onFocus={handleFocusIn}
      >
        <span>{getSelectValueText(value)}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-5 h-5 ${open ? "rotate-180" : ""}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      {open && (
        <ul className="absolute w-full py-2 bg-white border border-gray-300 rounded z-10 mt-1">
          {options.map((option, index) => (
            <li
              key={index}
              className={`px-4 py-1 h-11 flex items-center  cursor-pointer hover:bg-gray-100 
                ${!multiple && "justify-between"}
                ${
                  getCheckOfSelectedValue(multiple, option, value) &&
                  "bg-sky-50"
                }
              `}
              onClick={() =>
                multiple ? handleMultipleSelect(option) : handleSelect(option)
              }
            >
              {multiple && (
                <div
                  className={`
                  w-5 h-5
                  flex justify-center items-center
                  rounded mr-2 
                  ${
                    getCheckOfSelectedValue(multiple, option, value)
                      ? "bg-blue-500"
                      : "border border-blue-500"
                  }  
                  
                `}
                >
                  {getCheckOfSelectedValue(multiple, option, value) && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  )}
                </div>
              )}
              {option}
            </li>
          ))}
        </ul>
      )}
      <label
        className={`absolute left-3  ${
          open || (value && value?.length > 0)
            ? "text-micro text-blue-500 -top-2.5 bg-white px-1 rounded-sm"
            : "text-small top-1/4 text-gray-700"
        } transition-all duration-200`}
      >
        {label}
      </label>
    </div>
  );
};

export default SelectBox;
