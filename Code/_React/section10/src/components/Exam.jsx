import { useReducer } from "react";

function reducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
}

function Exam() {
  const [state, dispatch] = useReducer(reducer, 0);

  function onClickPlus() {
    // 인수 : 상태가 어떻게 변화되길 원하는지
    // -> action object
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  }

  function onClickMinus() {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  }

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
}

export default Exam;
