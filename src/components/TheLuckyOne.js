// import "./TheLuckyOne.css";
import React from "react";

import styled from "styled-components/macro";

const TheLuckyOneContainer = styled.div`
  margin: 1rem auto;
  padding: 1rem 0rem 0;

  .theLuckyOne__itsYou {
    margin: 1rem 0 auto;
  }
  .theLuckyOne__text {
    display: inline-block;
    border: 1px solid black;
    margin: 0.5rem auto 3rem;
    color: var(--action-text);
    padding: 0.5rem;
    border-radius: 5px;
  }
`;

export default function TheLuckyOne({ theLuckyOne }) {
  return (
    <TheLuckyOneContainer>
      <h3 className="theLuckyOne__itsYou">Its:</h3>
      <h2 className="theLuckyOne__text  glow">✨ {theLuckyOne} ✨</h2>
    </TheLuckyOneContainer>
  );
}
