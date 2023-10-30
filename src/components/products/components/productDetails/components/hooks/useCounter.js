import { useState } from "react";

const useCounter = ({ initialValue, min, max }) => {
  const [counter, setCounter] = useState({
    count: initialValue,
    min,
    max,
  });

  const addCount = (value = 1) => {
    setCounter({
      ...counter,
      count:
        counter.count + value < counter.max
          ? counter.count + value
          : counter.max,
    });
  };

  const removeCount = (value = 1) => {
    setCounter({
      ...counter,
      count:
        counter.count - value > counter.min
          ? counter.count - value
          : counter.min,
    });
  };

  return {
    addCount,
    removeCount,
    counter,
  };
};

export default useCounter;
