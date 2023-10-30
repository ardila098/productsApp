import React, { useEffect } from "react";
import { BtnCount } from "../buttonsDetails/style";
import PropType from "prop-types";
import useCounter from "./hooks/useCounter";

const Counter = ({
  setDataCount,
  initialValue = 1,
  addValue = 1,
  removeValue = 1,
  min = 1,
  max = 10,
}) => {
  const { addCount, removeCount, counter } = useCounter({
    initialValue,
    min,
    max,
  });

  useEffect(() => {
    setDataCount(counter.count);
  }, [counter]);

  return (
    <>
      <BtnCount onClick={() => removeCount(removeValue)}>-</BtnCount>

      <span>{counter.count}</span>

      <BtnCount onClick={() => addCount(addValue)}>+</BtnCount>
    </>
  );
};

export default Counter;

Counter.propType = {
  initialValue: PropType.string,
  addValue: PropType.number,
  removeValue: PropType.number,
  setDataCount: PropType.func,
  min: PropType.number,
  max: PropType.number,
};
