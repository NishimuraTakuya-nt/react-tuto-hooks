import ReactMemoExampleChild from "./ReactMemoExampleChild.jsx";
import {useState} from "react";

const ReactMemoExample = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");

  return (
    <>
      <h1>react Memo</h1>
      <p>React.memo: コンポーネントの不要な再レンダリングを防ぐためのパフォーマンス最適化ツールです。</p>

      <label>name1:</label>
      <input type={"text"} value={name1} onChange={(e) => setName1(e.target.value)}/>
      <br />

      <label>name2:</label>
      <input type={"text"} value={name2} onChange={(e) => setName2(e.target.value)}/>
      <ReactMemoExampleChild someValue={name1} />
    </>
  );
};

export default ReactMemoExample;
