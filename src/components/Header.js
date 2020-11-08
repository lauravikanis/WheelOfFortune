// import "./Header.css";
import React from "react";
import styled from "styled-components/macro";

const MainHeader = styled.div`
  background-color: var(--background-color);
  color: whitesmoke;
  text-align: center;

  h1 {
    margin-top: 4rem;
  }

  h5 {
    margin-bottom: 3rem;
    color: whitesmoke;
  }
`;

export default function Header() {
  return (
    <MainHeader>
      <h1>Wheel Of Fortune 🎱</h1>
      <h5> A different Version</h5>
    </MainHeader>
  );
}
