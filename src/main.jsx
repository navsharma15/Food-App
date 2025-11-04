import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './context/StoreContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 👇 Add basename for GitHub Pages */}
    <BrowserRouter basename="/Food-App">
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </BrowserRouter>
  </StrictMode>
)
