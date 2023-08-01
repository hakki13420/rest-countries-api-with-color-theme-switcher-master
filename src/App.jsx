import { useContext, useEffect, useState } from 'react'
import './App.css'
import BarTools from './components/BarTools'
import Header from './components/Header'
import Layout from './components/Layout'
import Main from './components/Main'
import axios from 'axios'
import { themeContext } from './context/themeContext'

function App () {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [continent, setContinent] = useState('')

  const { state } = useContext(themeContext)
  const { setState } = useContext(themeContext)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(import.meta.env.VITE_URL)
        const dataSource = data.map(
          (el, index) => (
            {
              id: index,
              name: el.name,
              capital: el.capital,
              population: el.population,
              flags: el.flags,
              continents: el.continents,
              subregion: el.subregion,
              currencies: el.currencies,
              languages: el.languages,
              cca3: el.cca3,
              tld: el.tld,
              borders: el.borders
            })
        )
        setCountries(dataSource)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  const searchCountries = () => {
    return countries.filter(
      country => country.name.common.toLowerCase().includes(search.toLowerCase()) &&
                 (continent === '-1' || country.continents.join().includes(continent))
    )
  }

  return (

      <Layout>
        <Header/>
        <BarTools setSearch={setSearch} setContinent={setContinent}/>
        <Main countries={searchCountries()}/>
      </Layout>

  )
}

export default App
