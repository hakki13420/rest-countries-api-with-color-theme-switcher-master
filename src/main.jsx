import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.scss'

import { ThemeContextProvider } from './context/themeContext.jsx'
import { CountriesContextProvider } from './context/countriesContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeContextProvider>
        <CountriesContextProvider>
            <App />
        </CountriesContextProvider>
      </ThemeContextProvider>
  </React.StrictMode>
)
