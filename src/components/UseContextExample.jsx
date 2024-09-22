import { useContext } from 'react';
import AppContext from "../context/AppContext.js";

const UseContextExample = () => {

  // useContext コンテキストの取得
  const appInfo = useContext(AppContext)

  return (
    <>
      <h1>UseContext</h1>
      <p>useContext: コンポーネントツリーを介して、深くネストされたコンポーネントに対してデータを受け渡す。</p>

      <p>context name: {appInfo.name}</p>
      <p>context version:{appInfo.version}</p>
    </>
  );
};

export default UseContextExample;
