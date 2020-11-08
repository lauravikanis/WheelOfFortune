import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
// import { Input } from "./Input";

const SeperatorInput = styled.input`
  width: 90%;
  text-align: center;
  height: 3rem;
`;

const PersonInput = styled.input`
  padding: 10px;
  min-height: 100px;
  text-align: center;
  border-radius: 5.1px;
`;

const InputForm = styled.form`
  background-color: lightcoral;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 70%auto;

  margin: auto;
  color: var(--text-color);
  letter-spacing: 2px;
  font-family: var(--textFont);

  .form__extras {
    padding: 1rem;
  }
  .button__submit {
    border-radius: 10px;
    max-width: 10rem;
    margin: 1rem auto;
    padding: 0.75rem 2rem;
    border: none;
  }
`;

export default function Form({ setValues, setAlreadyChoosen, setTheLuckyOne }) {
  const [inputValue, setInputValue] = useState("");
  const [separator, setSeparator] = useState(/\d+\s+/g);

  const generateID = () => Math.floor(Math.random() * 10000);

  function inputValueToObj(inputText, seperator) {
    const inputArray = inputText.split(seperator);
    const outputArray = inputArray.map((name) => {
      let ID = generateID();
      let result = { id: ID, name: name.trim() };
      return result;
    });
    return outputArray;
  }

  return (
    <InputForm
      onSubmit={(event) => {
        event.preventDefault();
        setAlreadyChoosen([]);
        setTheLuckyOne("");
        setValues(inputValueToObj(inputValue, separator));
      }}
    >
      <PersonInput
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        type="text"
        placeholder="Please insert Values with choosen Separators"
        // className="persons__input"
      />
      <div className="form__extras">
        <SeperatorInput
          placeholder="Insert the Separator-Input here"
          onChange={(event) => {
            console.log("Seperator set ", event.target.value);
            setSeparator(event.target.value);
          }}
          type="text"
        />
      </div>
      <Button className="button__submit" innerText={"Submit"} />
    </InputForm>
  );
}
