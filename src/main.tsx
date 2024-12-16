import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './main.css'
import App from './App.tsx'
import { LoadingProvider } from './lib/loading_provider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoadingProvider>
      <App />
    </LoadingProvider>
  </StrictMode>,
)
