import React, { useContext } from 'react'
import Country from './Country'
import { countriesContext } from '../context/countriesContext'

const Main = () => {
  const { searchCountries } = useContext(countriesContext)

  return (
    <main>
        <div className="countries">
          {
            searchCountries().map(country =>
                <Country key={country.id} country={country}/>
            )
          }
        </div>
    </main>
  )
}

export default Main
