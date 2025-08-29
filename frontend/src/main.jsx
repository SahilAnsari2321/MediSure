import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { ToastContainer } from 'react-toastify'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter future={{ 
      v7_startTransition: true,
      v7_relativeSplatPath: true 
      }}>
        <ToastContainer />
        <App />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
