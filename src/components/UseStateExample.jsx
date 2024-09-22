import {useState} from "react";

const UseStateExample = () => {

  // useState 状態管理対象の定義
  const [count, setCount] = useState(0)

  // useState set のトリガーを定義
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>UseState</h1>
      <p>useState: コンポーネント内で状態を管理し、その状態の更新をトリガーする。</p>

      <button onClick={handleClick}>+</button>
      <p>count: {count}</p>
    </>
  );
};

export default UseStateExample;
