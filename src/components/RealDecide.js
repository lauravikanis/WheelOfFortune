// import "./RealDecide.css";

import React from "react";
import Value from "./Value";
import styled from "styled-components/macro";

const RealDecide = styled.div`
  border: 1px solid black;
  background-color: lightgray;
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
