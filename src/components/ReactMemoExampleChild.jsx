import {memo} from "react";

// someValue が変更されたときのみ再レンダリングされる
const ReactMemoExampleChild = memo(function ReactMemoExampleChild({someValue}) {
  console.log('render ReactMemoExampleChild');
  return (
    <>
      <p>this is react memo child component.</p>
      <p>name1 value: {someValue}</p>
    </>
  );
});

export default ReactMemoExampleChild;
