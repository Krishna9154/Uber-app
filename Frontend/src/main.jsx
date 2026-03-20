import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Usercontex from './Contex/Usercontex.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Usercontex>
      <BrowserRouter>
      <App />
    </BrowserRouter>
    </Usercontex>
  </StrictMode>,
)
