import React from "react";
import styled from "styled-components";

const ValueList = styled.li`
  display: table;
  border-radius: 10px;
  background-color: var(--action-background);
  font-family: var(--textFont);
  color: var(--text-color);
  margin: 1rem 0.5rem;
  padding: 1rem 2rem;
  list-style-type: none;
  text-shadow: 0 0 5px var(--background-color);
  letter-spacing: 2px;

  p {
    margin: 0;
    padding: 0;
    font-size: 0.5rem;
  }
`;

export default function Value({ value, setValues, values }) {
  return (
    <ValueList
      className="value"
      onClick={(event) => {
        if (event.altKey) {
          const filteredArray = values.filter((item) => item.id !== value.id);
          setValues(filteredArray);
        } else {
          alert("To delete entry press the <Alt> Key.");
        }
      }}
    >
      {value.name}
      <p className="ids">#{value.id}</p>
    </ValueList>
  );
}
