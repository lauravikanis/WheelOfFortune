import React from "react";
import Value from "./Value";
import styled from "styled-components/macro";

const RealDecideContainer = styled.div`
  background-color: lightgray;
  border-radius: 25px;
`;

export default function Realdecide({ values, setValues }) {
  return (
    <RealDecideContainer>
      {values.map((value) => (
        <Value
          key={value.id}
          value={value}
          values={values}
          setValues={setValues}
        />
      ))}
    </RealDecideContainer>
  );
}
