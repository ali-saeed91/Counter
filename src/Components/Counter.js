import React, { useState } from "react";
import Button from "./Button";
import classes from "./Counter.module.css";

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);

  const increaseHandler = () => {
    setCounterValue((prevValue) => prevValue + 1);
  };

  const deleteHandler = () => {
    if (counterValue > 0) {
      setCounterValue((prevValue) => prevValue - 1);
    }
  };

  const resetHandler = () => {
    setCounterValue(0);
  };

  return (
    <div className={classes.counterContainer}>
      <div className={classes.counter}>{counterValue}</div>
      <div className={classes.btnContainer}>
        <Button title="Decrease" onClick={deleteHandler} />
        <Button title="Reset" onClick={resetHandler} />
        <Button title="Increase" onClick={increaseHandler} />
      </div>
    </div>
  );
};

export default Counter;
