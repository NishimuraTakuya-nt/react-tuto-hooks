import './App.css'
import {useEffect, useState, useContext, useRef, useReducer, useMemo, useCallback} from "react";
import AppContext from "./main.jsx";
import SomeChild from "./SomeChild.jsx";
import UseLocalStorage from "./useLocalStorage.jsx";

// Reducer 関数の定義
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
};

function App() {

  // useState 状態管理対象の定義
  const [count,setCount] = useState(0)

  // useState set のトリガーを定義
  const handleClick = () => {
    setCount(count + 1);
  };

  // useEffect 発火のタイミング
  useEffect(() => {
    console.log('hello useEffect');
  }, [count]);

  // useContext コンテキストの取得
  const appInfo = useContext(AppContext)

  // useRef 値の保持
  const ref = useRef();

  // useRef 値の取得例
  const handleRef = () => {
    console.log(ref.current.value);
  };

  // useReducer
  const [state, dispatch] = useReducer(reducer, 0);

  // for useMemo
  const [count01, setCount01] = useState(0);
  const [count02, setCount02] = useState(0);

  // const square = () => {
  //   let i = 0;
  //   while (i < 200000000) {
  //     i++;
  //   }
  //   return count02 * count02;
  // };

  // useMemo の使用をした方が良いような思い処理
  const square = useMemo(() => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    return count02 * count02;
  }, [count02]);

  // useCallBack 関数のメモ化
  const [counter, setCounter] = useState(0);
  const handleCounterClick = () => {
    setCounter(counter + 1);
  };

  // const showCount = () => {
  //   alert(`これは重い処理です。`)
  // };

  const showCount = useCallback(() => {
    alert(`これは重い処理です。`)
  }, [counter]);

  // カスタムフック
  const [age, setAge] = UseLocalStorage("age", 20);


  return (
    <>
      <h1>UseState, useEffect</h1>
      <p>useState: コンポーネント内で状態を管理し、その状態の更新をトリガーする。</p>
      <p>useEffect: コンポーネントのレンダリング後に副作用（データフェッチングやDOMの変更など）を実行する。</p>

      <button onClick={handleClick}>+</button>
      <p>count: {count}</p>

      <hr/>
      <h1>UseContext</h1>
      <p>useContext: コンポーネントツリーを介して、深くネストされたコンポーネントに対してデータを受け渡す。</p>
      <p>context name: {appInfo.name}</p>
      <p>context version:{appInfo.version}</p>

      <hr/>
      <h1>UseRef</h1>
      <p>useRef: コンポーネントのレンダリング間で値を保持し、その値の変更がレンダリングを引き起こさない</p>
      <input type="text" ref={ref}/>
      <button onClick={handleRef}>useRef</button>

      <hr/>
      <h1>UseReducer</h1>
      <p>useReducer:
        複雑な状態ロジックを管理するためのHookで、現在の状態と行動（アクション）に基づいて新しい状態を計算する。</p>
      <p>count: {state}</p>
      <button onClick={() => dispatch({type: "increment"})}>+</button>
      <button onClick={() => dispatch({type: "decrement"})}>-</button>

      <hr/>
      <h1>UseMemo</h1>
      <p>useMemo: 計算コストの高い関数の結果をメモ化（キャッシュ）し、不要な再計算を防ぐためのHookです。</p>
      <div>count1: {count01}</div>
      <button onClick={() => setCount01(count01 + 1)}>+</button>
      <div>count2: {count02}</div>
      <button onClick={() => setCount02(count02 + 1)}>+</button>
      {/*<div>count2^ result: {square()}</div>*/}
      <div>count2^ result: {square}</div>

      <hr/>
      <h1>UseCallBack</h1>
      <p>useCallback: 関数をメモ化（キャッシュ）し、不要な再生成を防ぐためのHookです。</p>
      <button onClick={handleCounterClick}>+</button>
      <p>counter 1: {counter}</p>
      <SomeChild showCount={showCount} />


      <hr/>
      <h1>カスタムフック</h1>
      <p>カスタムフック: コンポーネント間で状態関連のロジックを再利用するための関数です。</p>
      <p>{age}</p>
      <button onClick={() => setAge(80)}>年齢をセット</button>

    </>
  )
}

export default App
