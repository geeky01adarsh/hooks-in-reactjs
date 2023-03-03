import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      You have clicked {count} times.
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => (count > 0 ? setCount(count - 1) : alert("It's already 0"))}>
        -
      </button>
    </div>
  );
};

export default Counter;
