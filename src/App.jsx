import './App.css'
import {useContext} from "react";

import UseStateExample from "./components/UseStateExample.jsx";
import UseEffectExample from "./components/UseEffectExample.jsx";
import UseContextExample from "./components/UseContextExample.jsx";
import UseRefExample from "./components/UseRefExample.jsx";
import UseReducerExample from "./components/UseReducerExample.jsx";
import UseMemoExample from "./components/UseMemoExample.jsx";
import ReactMemoExample from "./components/ReactMemoExample.jsx";
import UseCallbackExample from "./components/UseCallbackExample.jsx";
import CustomHookExample from "./components/CustomHookExample.jsx";

import AppContext from "./context/AppContext.js";

function App() {
  // useContext コンテキストの取得
  const contextValue = useContext(AppContext);

  return (
    <AppContext.Provider value={contextValue}>
      <>
        <UseStateExample/>
        <hr/>
        <UseEffectExample/>
        <hr/>
        <UseContextExample/>
        <hr/>
        <UseRefExample/>
        <hr/>
        <UseReducerExample/>
        <hr/>
        <UseMemoExample/>
        <hr/>
        <ReactMemoExample/>
        <hr/>
        <UseCallbackExample/>
        <hr/>
        <CustomHookExample/>
      </>
    </AppContext.Provider>
  )
}

export default App;
