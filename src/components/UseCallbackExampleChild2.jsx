import {memo} from "react";

// 引数で渡ってくる handleClick2 は、コンポーネントが再レンダリングされる為、memo でラップしても、毎回propsが変わるので再レンダリングされる
const UseCallbackExampleChild2 = memo(function UseCallbackExampleChild2 ({onClick2}) {
  console.log('render UseCallbackExampleChild2');
  return (
    <>
      <button onClick={onClick2}>Click me2</button>;
    </>
  );
});

export default UseCallbackExampleChild2;
