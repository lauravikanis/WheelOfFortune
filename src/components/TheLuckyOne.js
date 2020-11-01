import "./TheLuckyOne.css";
import React from "react";

export default function TheLuckyOne({ theLuckyOne }) {
  return (
    <div className="theLuckyOne__container">
      <h3 className="theLuckyOne__itsYou">🚀 Its you! 👩‍🎤</h3>
      <h2 className="theLuckyOne__text  glow">✨ {theLuckyOne} ✨</h2>
    </div>
  );
}
