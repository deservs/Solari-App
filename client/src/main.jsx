import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/globalStyles.css'

import Home from './containers/Home/Index'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
