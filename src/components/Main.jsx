import React from 'react'
import Country from './Country'

const Main = ({ countries }) => {
  return (
    <main>
        <div className="countries">
          {
            countries.map(country =>
                <Country key={country.id} country={country}/>
            )
          }
        </div>
    </main>
  )
}

export default Main
