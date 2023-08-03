import { createContext, useState } from 'react'

export const themeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
  const mode = window.localStorage.getItem('mode')
  const [state, setState] = useState({
    mode: mode || 'light'
  }
  )
  return (
        <themeContext.Provider value={{ state, setState }}>
            {children}
        </themeContext.Provider>
  )
}
