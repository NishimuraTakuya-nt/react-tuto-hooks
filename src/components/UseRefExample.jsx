import {useRef} from "react";

const UseRefExample = () => {

  // useRef 値の保持
  const ref = useRef(null);

  // useRef 値の取得例
  const handleRef = () => {
    console.log("useRef run. refs value:" + ref.current.value);
  }

  return (
    <>
      <h1>UseRef</h1>
      <p>useRef: コンポーネントのレンダリング間で値を保持し、その値の変更がレンダリングを引き起こさない</p>

      <input type="text" ref={ref}/>
      <button onClick={handleRef}>useRef</button>
    </>
  );
};

export default UseRefExample;
