import {memo} from "react";

const UseCallbackExampleChild = memo(function UseCallbackExampleChild ({onClick}) {
  console.log('render UseCallbackExampleChild');
  return (
    <>
      <button onClick={onClick}>Click me</button>;
    </>
  );
});

export default UseCallbackExampleChild;
