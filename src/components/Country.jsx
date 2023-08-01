import React from 'react'
import { Link } from 'react-router-dom'

const Country = ({ country }) => {
  const hasNativeLazyLoadSupport = 'loading' in HTMLImageElement.prototype
  if (!hasNativeLazyLoadSupport) {
  // no supporting lazy loading
    console.log('no support')
  }
  return (
    <Link className='link' to={'/country/' + country.id} state={country} >
        <div className="country">
            <img src={country?.flags?.png || country?.flags?.svg}
                 alt=""
                 loading='lazy'
            />
            <div className="country-data">
                <h1 className="country-name">
                    {country.name.common}
                </h1>
                <div className="population">
                    <span className='title'>Population:</span>
                    <span className='value'>{country.population}</span>
                </div>
                <div className="region">
                    <span className='title'>Region:</span>
                    <span className='value'>{country.continents}</span>
                </div>
                <div className="region">
                    <span className='title'>Capital:</span>
                    <span className='value'>{country.capital}</span>
                </div>
            </div>
        </div>
    </Link>

  )
}

export default Country
