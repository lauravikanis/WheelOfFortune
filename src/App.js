import { useEffect, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Rounds from "./components/Rounds";
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

  const [round, setRound] = useState(
    JSON.parse(localStorage.getItem("round")) || 0
  );

  // Set values in localStorage on valuechange
  useEffect(() => {
    try {
      console.log("set in buttonclick");
      setLocalStorage(values, alreadyChoosen, theLuckyOne, sets, round);
    } catch (error) {
      console.error(error);
    }
  }, [values, alreadyChoosen, theLuckyOne, sets, round]);

  const moveFromValuesToAlreadyChoosen = (value) => {
    const valuesCleaned = values.filter((item) => item !== value);
    setValues(valuesCleaned);
    setAlreadyChoosen([...alreadyChoosen, value]);
  };

  return (
    <div className="container">
      <Header />
      <main className="main">
        <Form
          setValues={setValues}
          setAlreadyChoosen={setAlreadyChoosen}
          setTheLuckyOne={setTheLuckyOne}
        />

        <div className="realDecideContainer">
          <Rounds round={round} setRound={setRound} />
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
                setRound(round + 1);
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
      <footer>
        <Sets
          setValues={setValues}
          values={values}
          setAlreadyChoosen={setAlreadyChoosen}
          alreadyChoosen={alreadyChoosen}
          setTheLuckyOne={setTheLuckyOne}
          theLuckyOne={theLuckyOne}
          round={round}
          setRound={setRound}
          sets={sets}
          setSets={setSets}
        />
      </footer>
    </div>
  );
}

export default App;
