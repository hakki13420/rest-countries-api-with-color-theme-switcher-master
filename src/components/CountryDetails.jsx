import React from 'react'
import { useLocation } from 'react-router-dom'

const CountryDetails = () => {
  const country = useLocation().state

  const back = () => {
    history.back()
  }

  return (
    <div className='country-details'>
        <button onClick={back}>{'<- back'}</button>
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
                <div className="borders">
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
    </div>
  )
}

export default CountryDetails
