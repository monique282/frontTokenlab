import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ResetStyle from './assents/reset.jsx'
import GlobalStyle from './assents/global.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <App />
  </StrictMode>,
)
