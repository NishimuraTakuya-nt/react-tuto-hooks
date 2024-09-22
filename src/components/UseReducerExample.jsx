import {useReducer} from "react";
import calcReducer from "../utils/culcReducer.js";

export const UseReducerExample = () => {

  // useReducer
  const [state, dispatch] = useReducer(calcReducer, 0);

  return (
    <>
      <h1>UseReducer</h1>
      <p>useReducer:
        複雑な状態ロジックを管理するためのHookで、現在の状態と行動（アクション）に基づいて新しい状態を計算する。</p>

      <button onClick={() => dispatch({type: "increment"})}>+</button>
      <button onClick={() => dispatch({type: "decrement"})}>-</button>
      <p>count: {state}</p>
    </>
  );
};

export default UseReducerExample;
