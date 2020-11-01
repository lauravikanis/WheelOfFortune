import React from "react";

export default function Button({ className, onClick, innerText }) {
  return (
    <button className={`button glow-on-hover ${className}`} onClick={onClick}>
      {innerText}
    </button>
  );
}
