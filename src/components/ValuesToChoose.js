import React from "react";
import Realdecide from "./RealDecide";
import styled from "styled-components";

const ValuesToChooseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

export default function ValuesToChoose({ values, setValues }) {
  return (
    <ValuesToChooseContainer className="valuesToChoose">
      <h2>{values.length} Participants</h2>
      <Realdecide values={values} setValues={setValues} />
    </ValuesToChooseContainer>
  );
}
