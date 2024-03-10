import React from "react";

function Error({ value, className }) {
  return (
    <div className={`text-[13px] leading-4 text-red-600 mt-1.5 ${className}`}>
      {value}
    </div>
  );
}

export default Error;
