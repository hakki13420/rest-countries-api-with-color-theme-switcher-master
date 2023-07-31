import { createContext, useState } from 'react'

export const countriesContext = createContext()

export const CountriesContextProvider = ({ children }) => {
  const [state, setState] = useState({
    mode: 'light'
  }
  )
  return (
        <countriesContext.Provider value={{ state, setState }}>
            {children}
        </countriesContext.Provider>
  )
}
