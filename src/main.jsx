import {createContext, StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const appInfo = {
  name: 'React App',
  version: '1.0.0',
}

const AppContext = createContext(appInfo)

createRoot(document.getElementById('root')).render(
  <AppContext.Provider value={appInfo}>
    <StrictMode>
      <App/>
    </StrictMode>,
  </AppContext.Provider>
)

export default AppContext