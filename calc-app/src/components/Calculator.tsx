//import React from 'react'

import { useState } from "react";
import Button from "./Button";
import Screen from "./Screen";

const Calculator = () => {
  const [result, setResult] = useState("");

  function addNum(text: string) {
    setResult(result + text);
  }

  function clearScreen() {
    setResult("");
  }

  function getResult() {
    setResult(eval(result));
  }

  return (
    <div
      className="grid grid-cols-4 gap-0 w-80 h-120 p-2 rounded-2xl
                 bg-gray-300 drop-shadow-heavy"
    >
      <Screen text={result} />

      <Button text="C" onClick={clearScreen} type="above" bigSize={true} />
      <Button text="%" onClick={addNum} type="above" />
      <Button text="/" onClick={addNum} type="operator" />
      <Button text="7" onClick={addNum} />
      <Button text="8" onClick={addNum} />
      <Button text="9" onClick={addNum} />
      <Button text="*" onClick={addNum} type="operator" />
      <Button text="4" onClick={addNum} />
      <Button text="5" onClick={addNum} />
      <Button text="6" onClick={addNum} />
      <Button text="-" onClick={addNum} type="operator" />
      <Button text="1" onClick={addNum} />
      <Button text="2" onClick={addNum} />
      <Button text="3" onClick={addNum} />
      <Button text="+" onClick={addNum} type="operator" />
      <Button text="0" onClick={addNum} bigSize={true} />
      <Button text="." onClick={addNum} />
      <Button text="=" onClick={getResult} type="operator" />
    </div>
  );
};

export default Calculator;
