import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CountryEdit from './pages/CountryEdit.jsx'
import { ThemeContextProvider } from './context/themeContext.jsx'

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
      <ThemeContextProvider>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </ThemeContextProvider>
  </React.StrictMode>
)
