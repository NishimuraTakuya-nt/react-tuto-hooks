import {useEffect, useState} from "react";

const UseEffectExample = () => {

  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  // useEffect （副作用）発火のタイミング
  useEffect(() => {
    console.log('useEffect run. count:', count);
  }, [count]);

  return (
    <>
      <h1>UseEffect</h1>
      <p>useEffect: コンポーネントのレンダリング後に副作用（データフェッチングやDOMの変更など）を実行する。</p>

      <button onClick={handleClick}>+</button>
      <p>count: {count}</p>
    </>
  );
};

export default UseEffectExample;
