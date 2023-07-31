import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { countriesContext } from '../context/countriesContext'

const CountryDetails = () => {
  const country = useLocation().state
  const { state } = useContext(countriesContext)
  const { setState } = useContext(countriesContext)

  const back = () => {
    history.back()
  }

  return (
    <div className='country-details'>
        <button onClick={back}><ion-icon name="arrow-back-outline"></ion-icon>back</button>
        <div className="country">
            <div className="left">
                <img src={country.flags.png} alt="" />
            </div>
            <div className="top">
                <h1>{country.name.common}</h1>
            </div>
            <div className="middle">
                <div className="country-name">
                    <span className='title'>
                        Native Name:
                        <span className='value'>
                            {country.name.nativeName[Object.keys(country.languages)[0]].common}
                        </span>
                    </span>
                </div>
                <div className="population">
                    <span className='title'>
                        Population:
                        <span className='value'>
                            {country.population}
                        </span>
                    </span>
                </div>
                <div className="region">
                    <span className='title'>
                        Region:
                        <span className='value'>
                            {country.continents.join(', ')}
                        </span>
                    </span>
                </div>
                <div className="capital">
                    <span className='title'>
                        Capital:
                        <span className='value'>
                            {country.capital}
                        </span>
                    </span>
                </div>
            </div>
            <div className="right">
                <div className="domain">
                    <span className='title'>
                        Top Level Domain:
                        <span className='value'>
                            {country.tld.join(', ')}
                        </span>
                    </span>
                </div>
                <div className='currencies:'>
                    <span className='title'>
                        Currencies:
                        <span className='value'>
                            {Object.keys(country.currencies).join(', ')}
                        </span>
                    </span>
                </div>
                <div className='languages'>
                    <span className='title'>
                        Languages:
                        <span className='value'>
                            {Object.values(country.languages).join(', ')}
                        </span>
                    </span>
                </div>
            </div>
            <div className="bottom">
                <span className='title'>
                    Border Countries: {
                    country.borders?.map(bor => (
                        <span key={bor} className="value border-item">
                            {bor}
                        </span>
                    ))
                    }
                </span>

            </div>
        </div>
    </div>
  )
}

export default CountryDetails
