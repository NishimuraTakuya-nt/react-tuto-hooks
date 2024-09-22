import {useEffect, useState} from "react";

/**
 * UseLocalStorage カスタムフック
 *
 * このフックは、ブラウザのローカルストレージとReactの状態を同期させるために使用します。
 * キーと初期値を受け取り、ローカルストレージから値を読み込むか、
 * 存在しない場合は初期値を使用します。値が変更されるたびに、
 * 自動的にローカルストレージに保存します。
 *
 * @param {string} key - ローカルストレージで使用するキー
 * @param {any} defaultValue - キーに対応する値が存在しない場合に使用される初期値
 * @returns {[any, function]} - 現在の値と、値を更新するための関数のタプル
 */
const UseLocalStorage = (key, defaultValue) => {

  const [keyValue, setKeyValue] = useState(() => {
    const jsonValue = window.localStorage.getItem(key);
    if (jsonValue !== null) return JSON.parse(jsonValue);

    return defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(keyValue));
  }, [keyValue, setKeyValue]);

  return [keyValue, setKeyValue];
};

export default UseLocalStorage;
