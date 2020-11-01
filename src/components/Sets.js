import React, { useState } from "react";
import { usePopper } from "react-popper";

export default function Sets({
  values,
  setValues,
  alreadyChoosen,
  setAlreadyChoosen,
  theLuckyOne,
  setTheLuckyOne,
  round,
  setRound,
  sets,
  setSets,
}) {
  const [setName, setSetName] = useState("");
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      {
        name: "arrow",
        options: { element: arrowElement, placement: "auto" },
      },
    ],
  });

  return (
    <details className="setList" ref={setReferenceElement}>
      <summary>Sets</summary>
      <div
        className="setTooltip"
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        {/* <div ref={setArrowElement} style={styles.arrow} /> */}
        <form
          onSubmit={(event) => {
            event.preventDefault();

            setSets([
              ...sets,
              {
                name: setName,
                values: values,
                alreadyChoosen: alreadyChoosen,
                theLuckyOne: theLuckyOne,
                round: round,
              },
            ]);
          }}
        >
          <input
            type="text"
            placeholder=" Save current as set"
            onChange={(event) => {
              setSetName(event.target.value);
            }}
          ></input>
        </form>
        {sets?.map((set) => {
          return (
            <button
              key={set.name}
              className="setList__set"
              onClick={(event) => {
                event.preventDefault();
                console.log(event);
                if (event.altKey) {
                  setSets(() => {
                    const cleanedArray = sets.filter(
                      (setItem) => setItem.name !== set.name
                    );
                    setSets(cleanedArray);
                  });
                } else {
                  setValues(set.values);
                  setAlreadyChoosen(set.alreadyChoosen);
                  setTheLuckyOne(set.theLuckyOne);
                  setRound(set.round);
                }
              }}
            >
              <p>{set.name}</p>
            </button>
          );
        })}
      </div>
    </details>
  );
}
