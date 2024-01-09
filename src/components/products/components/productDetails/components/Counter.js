import React, { useEffect } from "react";
import { BtnCount } from "../buttonsDetails/style";
import PropType from "prop-types";
import useCounter from "./hooks/useCounter";

const Counter = ({
  updatePriceItems,
  data,
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
    updatePriceItems({
      counter: counter.count,
      idProduct: data?._id,
      price: data?.price,
    });
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
  min: PropType.number,
  max: PropType.number,
  data: PropType.object,
  updatePriceItems: PropType.func,
};
