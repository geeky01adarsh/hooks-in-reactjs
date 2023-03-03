import React, { useReducer } from 'react'

const reducer = (state, action) => {
    if (action === 'increase') return state + 1;
    else if (action === 'decrease') return state - 1;
    else state

}

const CounterReducer = () => {
    const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h1>Counter using Reducer hook</h1>
          <button onClick={()=>dispatch("increase")}>+</button>
       {count}
      <button onClick={()=>dispatch("decrease")}>-</button>
    </>
  );
}

export default CounterReducer
