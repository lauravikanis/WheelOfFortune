import React, { useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "./Sets.css";
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
  setActiveSet,
}) {
  const [setName, setSetName] = useState("");
  //   const [visible, setVisible] = useState(false);

  //   const toggleButton = () => {
  //     setVisible(!visible);
  //   };
  return (
    <Tippy
      className="setList glow-on-hover"
      //   visible={visible}
      allowHTML={true}
      interactive={true}
      theme={"light"}
      content={
        <div className="setTooltip">
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
                    setActiveSet(set);
                  }
                }}
              >
                <p>{set.name}</p>
              </button>
            );
          })}
        </div>
      }
    >
      <h2
        className="sets glow-on-hover"
        //   onClick={toggleButton}
      >
        Sets
      </h2>
    </Tippy>
  );
}
