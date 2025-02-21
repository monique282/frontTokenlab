import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import GlobalStyle from './assets/styled/global.jsx'
import ResetStyle from "./assets/styled/reset.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <App />
  </StrictMode>,
)
