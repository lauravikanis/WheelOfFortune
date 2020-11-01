import React, { useState } from "react";

export default function Sets({
  values,
  setValues,
  alreadyChoosen,
  setAlreadyChoosen,
  theLuckyOne,
  setTheLuckyOne,
  sets,
  setSets,
}) {
  const [setName, setSetName] = useState("");

  return (
    <details className="setList">
      <summary>Sets</summary>
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
              }
            }}
          >
            <p>{set.name}</p>
          </button>
        );
      })}
    </details>
  );
}
