import React from "react";
import Value from "./Value";
import styled from "styled-components/macro";

const RealDecide = styled.div`
  background-color: lightgray;
  border-radius: 15px;
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
`;

export default function Realdecide({ values, setValues }) {
  return (
    <RealDecide>
      {values.map((value) => (
        <Value
          key={value.id}
          value={value}
          values={values}
          setValues={setValues}
        />
      ))}
    </RealDecide>
  );
}
