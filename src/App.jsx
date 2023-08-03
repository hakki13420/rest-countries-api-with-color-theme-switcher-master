import { useContext, useEffect, useState } from 'react'
import './App.css'
// import Main from './components/Main'
import axios from 'axios'
import { countriesContext } from './context/countriesContext'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CountryEdit from './pages/CountryEdit'
import Home from './pages/Home'
import FourAndFour from './pages/FourAndFour'

function App () {
  // const [search, setSearch] = useState('')
  // const [continent, setContinent] = useState('')

  // const { countries } = useContext(countriesContext)
  const { setCountries } = useContext(countriesContext)

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

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/country/:id',
      element: <CountryEdit />
    },
    {
      path: '/*',
      element: <FourAndFour />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
