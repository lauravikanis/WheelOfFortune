import React from "react";

export default function Rounds({ round, setRound }) {
  return (
    <h2
      onDoubleClick={() => {
        setRound(0);
      }}
    >
      Round {round}
    </h2>
  );
}
