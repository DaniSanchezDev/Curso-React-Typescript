import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BudgetProvider } from './context/BudgetContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Ponemos el BudgetProvider para que rodee nuestra app y tener acceso  */}
    <BudgetProvider>
      <App />
    </BudgetProvider>
  </StrictMode>,
)
