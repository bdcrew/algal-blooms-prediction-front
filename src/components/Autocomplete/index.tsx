import React, { useState, useRef, useEffect } from "react";

interface AutocompleteProps {
  label?: string;
  options: string[];
  inputValue: string;
  updateInputValue: (selectedItem: string) => void;
}

const Autocomplete: React.FC<AutocompleteProps> = ({
  options,
  inputValue,
  updateInputValue,
  label,
}) => {
  const [items, setItems] = useState<string[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const divRef = useRef<HTMLDivElement>(null);

  const handleFocusIn = () => {
    setOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateInputValue(e.target.value);
  };

  const handleDropDownClick = (selectedItem: string) => {
    updateInputValue(selectedItem);
    setOpen(false);
  };

  const handleDeleteButtonClick = () => {
    updateInputValue("");
  };

  useEffect(() => {
    if (inputValue === "") {
      setItems(options);
    } else {
      setItems(
        options.filter((option) => {
          return option.includes(inputValue);
        })
      );
    }
  }, [inputValue]);

  const handleBlur = (e: React.FocusEvent) => {
    if (!divRef.current?.contains(e.relatedTarget as Node)) {
      setOpen(false);
    }
  };

  return (
    <div ref={divRef} onBlur={handleBlur} className="relative">
      <div className="flex">
        <input
          type="text"
          onChange={handleInputChange}
          value={inputValue}
          onFocus={handleFocusIn}
          className={`border  rounded-l px-4 py-2 w-full ring-0 outline-none ${
            inputValue || open
              ? "bg-white border-blue-500"
              : "bg-blue-50 border-gray-300"
          }`}
        />
        <button
          onClick={handleDeleteButtonClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-r"
        >
          X
        </button>
      </div>
      {open && (
        <div className="absolute left-0 mt-1 w-full bg-white border border-gray-300 rounded shadow z-10">
          {items.map((item, index) => (
            <div
              key={index}
              onMouseDown={() => handleDropDownClick(item)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      )}
      <label
        className={`absolute left-3  ${
          open || inputValue
            ? "text-micro text-blue-500 -top-2.5 bg-white px-1 rounded-sm"
            : "text-small top-1/4 text-gray-700"
        } transition-all duration-200`}
      >
        {label}
      </label>
    </div>
  );
};

export default Autocomplete;
