import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 10px;
  max-width: 10rem;
  margin: 1rem auto;
  padding: 0.75rem 2rem;
  border: none;
`;

export default function Button({ className, onClick, innerText }) {
  return (
    <StyledButton
      tabIndex={"0"}
      className={`button glow-on-hover ${className}`}
      onClick={onClick}
    >
      {innerText}
    </StyledButton>
  );
}
