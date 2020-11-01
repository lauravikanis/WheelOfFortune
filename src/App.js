import { useEffect, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import RealDecide from "./components/RealDecide";
import "./global.css";
import "./components/Sets.css";
import { choosOneRandom, setLocalStorage } from "./utils/helpers";
import Sets from "./components/Sets";
import Button from "./components/Button";
import TheLuckyOne from "./components/TheLuckyOne";
import ValuesToChoose from "./components/ValuesToChoose";
import AlreadyChoosen from "./components/AlreadyChoosen";

function App() {
  const [values, setValues] = useState(
    JSON.parse(localStorage.getItem("values")) || []
  );
  const [alreadyChoosen, setAlreadyChoosen] = useState(
    JSON.parse(localStorage.getItem("alreadyChoosen")) || []
  );
  const [theLuckyOne, setTheLuckyOne] = useState(
    JSON.parse(localStorage.getItem("theLuckyOne")) || ""
  );
  const [sets, setSets] = useState(
    JSON.parse(localStorage.getItem("sets")) || []
  );

  // Set values in localStorage on valuechange
  useEffect(() => {
    try {
      setLocalStorage(values, alreadyChoosen, theLuckyOne, sets);
    } catch (error) {
      console.error(error);
    }
  }, [values, alreadyChoosen, theLuckyOne, sets]);

  const moveFromValuesToAlreadyChoosen = (value) => {
    const valuesCleaned = values.filter((item) => item !== value);
    setValues(valuesCleaned);
    setAlreadyChoosen([...alreadyChoosen, value]);
  };

  return (
    <div className="container">
      <Header />
      <main className="main">
        <Sets
          setValues={setValues}
          values={values}
          setAlreadyChoosen={setAlreadyChoosen}
          alreadyChoosen={alreadyChoosen}
          setTheLuckyOne={setTheLuckyOne}
          theLuckyOne={theLuckyOne}
          sets={sets}
          setSets={setSets}
        />
        <Form
          setValues={setValues}
          setAlreadyChoosen={setAlreadyChoosen}
          setTheLuckyOne={setTheLuckyOne}
        />

        <div className="realDecideContainer">
          <Button
            className={"button__reRun"}
            innerText={"REAL DECIDE"}
            onClick={() => {
              console.log("click");
              if (values.length > 0) {
                const randomPerson = choosOneRandom(values);
                setTheLuckyOne(randomPerson);
                moveFromValuesToAlreadyChoosen(randomPerson);
              } else {
                setValues(alreadyChoosen);
                setTheLuckyOne(null);
                setAlreadyChoosen([]);
              }
            }}
          />
          {theLuckyOne && <TheLuckyOne theLuckyOne={theLuckyOne} />}
          <div className="valuesToChoose">
            {values.length > 0 && (
              <ValuesToChoose setValues={setValues} values={values} />
            )}
          </div>

          {alreadyChoosen.length > 0 && (
            <AlreadyChoosen
              setAlreadyChoosen={setAlreadyChoosen}
              alreadyChoosen={alreadyChoosen}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
