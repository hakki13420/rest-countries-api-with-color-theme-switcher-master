import { createContext, useState } from 'react'

export const countriesContext = createContext()

export const CountriesContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [continent, setContinent] = useState('')

  const searchCountries = () => {
    return countries.filter(
      country => country.name.common.toLowerCase().includes(search.toLowerCase()) &&
                 (country.continents.join().includes(continent))
    )
  }

  return <countriesContext.Provider value={{ countries, setCountries, searchCountries, search, setSearch, continent, setContinent }}>
        {children}
    </countriesContext.Provider>
}
