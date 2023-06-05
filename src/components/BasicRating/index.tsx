import React, { useState } from "react";

interface P {
  maxRating?: number;
}

const BasicRating: React.FC<P> = ({ maxRating = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const starRating = Array.from({ length: maxRating }, (_, i) => i + 1);

  const onMouseEnter = (value: number) => setHover(value);
  const onMouseLeave = () => setHover(0);
  const onClick = (value: number) => setRating(value);

  return (
    <div className="flex">
      {starRating.map((star) => (
        <button
          key={star}
          className={`p-1 ${
            (hover || rating) >= star ? "text-yellow-400" : "text-gray-300"
          } transition-colors duration-200`}
          onMouseEnter={() => onMouseEnter(star)}
          onMouseLeave={onMouseLeave}
          onClick={() => onClick(star)}
        >
          ★
        </button>
      ))}
    </div>
  );
};

export default BasicRating;
