import {createContext} from "react";

const appInfo = {
  name: 'React App',
  version: '1.0.0',
}

// context の定義
const AppContext = createContext(appInfo)

export default AppContext;
