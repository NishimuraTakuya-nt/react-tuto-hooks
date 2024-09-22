import {useMemo, useState} from "react";

const UseMemoExample = () => {
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
  // 同一コンポーネント内の任意の状態変数（state）が変更されると、そのコンポーネント全体が再レンダリングされます。
  // 特定の値（依存配列に指定した値）が変更されない限り、メモ化した値や計算結果を再利用します。
  const square = useMemo(() => {
    console.log('useMemo method run. count02:', count02);
    let i = 0;
    while (i < 500000000) {
      i++;
    }
    return count02 * count02;
  }, [count02]);

  return (
    <>
      <h1>UseMemo</h1>
      <p>useMemo: 計算コストの高い関数の結果をメモ化（キャッシュ）し、不要な再計算を防ぐためのHookです。</p>

      <button onClick={() => setCount01(count01 + 1)}>+</button>
      <div>count1: {count01}</div>
      <button onClick={() => setCount02(count02 + 1)}>+</button>
      <div>count2: {count02}</div>

      <p>useMemo の使用をした方が良いような思い処理</p>
      {/*<div>count2^ result: {square()}</div>*/}
      <div>count2^ result: {square}</div>
    </>
  );
};

export default UseMemoExample;
