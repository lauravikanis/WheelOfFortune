// import "./Header.css";
import React from "react";
import styled from "styled-components/macro";

const MainHeader = styled.div`
  background-color: var(--background-color);
  background: rgb(49, 10, 107);
  background: linear-gradient(
    180deg,
    rgba(49, 10, 107, 1) 0%,
    rgba(102, 51, 153, 1) 100%
  );
  color: var(--foreground-color);
  text-align: center;

  h1 {
    margin-top: 4rem;
  }

  h5 {
    margin-bottom: 3rem;
  }
`;

export default function Header() {
  return (
    <MainHeader>
      <h1>Wheel Of Fortune 🎱</h1>
      <h5> Tidy Verrsion</h5>
    </MainHeader>
  );
}
