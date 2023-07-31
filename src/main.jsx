import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CountryEdit from './pages/CountryEdit.jsx'
import { CountriesContextProvider } from './context/countriesContext.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/country/:id',
    element: <CountryEdit />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <CountriesContextProvider>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </CountriesContextProvider>
  </React.StrictMode>
)
