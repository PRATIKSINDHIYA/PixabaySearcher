import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ImageState from './context/ImageState.jsx'

createRoot(document.getElementById('root')).render(
  <ImageState>
    <App />
  </ImageState>,
)
