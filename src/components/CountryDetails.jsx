import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
// import { themeContext } from '../context/themeContext'
import { countriesContext } from '../context/countriesContext'
import axios from 'axios'

const CountryDetails = ({ country }) => {
  // const country = useLocation().state
  // const { state } = useContext(themeContext)
  // const { setState } = useContext(themeContext)
  const { countries } = useContext(countriesContext)
  const [countryData, setCountryData] = useState({})
  const [borders, setBorders] = useState([])
  const { id } = useParams()

  const back = () => {
    history.back()
  }
  useEffect(() => {
    setBorders(country?.borders?.map(bor => countries.filter(el => el.cca3 === bor)[0]?.name.common))
    if (country) setCountryData(country)
  }, [countries])

  useEffect(() => {
    const data = countries.filter(count => count.name.common == id)
    console.log('data', data)
    data && setCountryData(data[0])

    // getCountry()
  }, [id, countries])
  console.log('countries', countries)

  return (

      <div className='country-details'>
      {
          countryData
            ? (<>
                <button onClick={back}><ion-icon name="arrow-back-outline"></ion-icon>back</button>
                <div className="country">
                <div className="left">
                        <img src={countryData?.flags?.png} alt="" />
                        </div>
                    <div className="top">
                        <h1>{countryData?.name?.common}</h1>
                    </div>
                    <div className="middle">
                    <div className="country-name">
                    <span className='title'>
                    Native Name:
                    <span className='value'>
                    {countryData?.name?.nativeName[Object.keys(countryData.languages)[0]].common}
                    </span>
                    </span>
                    </div>
                    <div className="population">
                    <span className='title'>
                    Population:
                                <span className='value'>
                                {countryData?.population}
                                </span>
                                </span>
                                </div>
                                <div className="region">
                                <span className='title'>
                                Region:
                                <span className='value'>
                                {countryData?.continents?.join(', ')}
                                </span>
                                </span>
                                </div>
                                <div className="capital">
                                <span className='title'>
                                Capital:
                                <span className='value'>
                                {countryData?.capital}
                                </span>
                                </span>
                                </div>
                                </div>
                                <div className="right">
                                <div className="domain">
                                <span className='title'>
                                Top Level Domain:
                                <span className='value'>
                                {countryData?.tld?.join(', ')}
                                </span>
                                </span>
                                </div>
                                <div className='currencies:'>
                                <span className='title'>
                                Currencies:
                                <span className='value'>
                                {countryData.currencies && Object.keys(countryData?.currencies)?.join(', ') }
                                </span>
                                </span>
                                </div>
                                <div className='languages'>
                                <span className='title'>
                                Languages:
                                <span className='value'>
                                {countryData?.languages && Object.values(countryData?.languages).join(', ')}
                                </span>
                                </span>
                                </div>
                                </div>
                                <div className="bottom">
                                <span className='title'>
                                Border Countries: {
                            borders?.map(bor => (
                                <span key={bor} className="value border-item">
                                    {bor}
                                </span>
                            ))
                        }
                        </span>

                        </div>
                        </div>
                    </>)
            : <>data not found!</>
            }
                </div>
  )
}

export default CountryDetails
