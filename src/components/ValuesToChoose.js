import React from "react";
import Realdecide from "./RealDecide";

export default function ValuesToChoose({ values, setValues }) {
  return (
    <div className="valuesToChoose">
      <h2>👬👭 Participants 👬👭</h2>
      <Realdecide values={values} setValues={setValues} />
    </div>
  );
}
