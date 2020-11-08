import React from "react";
import Realdecide from "./RealDecide";
import styled from "styled-components";

const AlreadyChooseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

export default function AlreadyChoosen({ alreadyChoosen, setAlreadyChoosen }) {
  return (
    <AlreadyChooseContainer>
      <h2>{alreadyChoosen.length} Already Choosen</h2>
      <Realdecide values={alreadyChoosen} setValues={setAlreadyChoosen} />
    </AlreadyChooseContainer>
  );
}
