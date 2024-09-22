import UseCallbackExampleChild from "./UseCallbackExampleChild.jsx";
import {useCallback, useState} from "react";
import UseCallbackExampleChild2 from "./UseCallbackExampleChild2.jsx";

const UseCallbackExample = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count => count + 1);
  }, []); // 依存配列が空なので、このコールバックは一度だけ作成されます

  // handleClick2 は、コンポーネントが再レンダリングされるたびに再作成されます。
  const handleClick2 = () => {
    setCount(count => count + 1);
  }; // 依存配列が空なので、このコールバックは一度だけ作成されます

  return (
    <>
      <h1>useCallBack</h1>
      <p>useCallback: 関数をメモ化（キャッシュ）し、不要な再レンダリングを防ぐためのHookです。</p>

      <div>
        <p>カウント: {count}</p>
        <label>useCallback: </label>
        <UseCallbackExampleChild onClick={handleClick}/>
        <br/>
        <label>useCallbackなし: </label>
        <UseCallbackExampleChild2 onClick2={handleClick2}/>
      </div>
    </>
  );
};

export default UseCallbackExample;
