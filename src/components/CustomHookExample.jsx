import UseLocalStorage from "../useLocalStorage.jsx";

const CustomHookExample = () => {
  const [age, setAge] = UseLocalStorage("age", 20);

  const handleClear = () => {
    window.localStorage.clear();
    setAge(20);
  }
  return (
    <>
      <h1>カスタムフック</h1>
      <p>カスタムフック: コンポーネント間で状態関連のロジックを再利用するための関数です。</p>

      <button onClick={handleClear}>Clear</button>

      <p>{age} 歳</p>
      <label>ボタンで固定セット </label>
      <button onClick={() => setAge(80)}>80歳をセット</button>
      <br/>

      <label>入力値でセット</label>
      <input type={"text"} value={age} onChange={(e) => setAge(e.target.value)}/>
    </>
  );
};

export default CustomHookExample;
