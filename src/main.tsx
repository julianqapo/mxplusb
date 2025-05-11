import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MLTutorialsApp from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MLTutorialsApp />
  </StrictMode>,
)
