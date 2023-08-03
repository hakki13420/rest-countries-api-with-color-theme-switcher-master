import React, { useContext, useState } from 'react'
import SelectBox from './SelectBox'
import { countriesContext } from '../context/countriesContext'

const BarTools = () => {
  const [display, setDisplay] = useState(false)

  const { continent } = useContext(countriesContext)
  const { setContinent } = useContext(countriesContext)
  const { setSearch } = useContext(countriesContext)

  const handlChange = (event) => {
    setSearch(event.target.value)
  }

  const handlSelectChange = (event) => {
    setContinent(event.target.value)
  }

  const hideSelectBox = (event) => {
    console.log(event.target.getAttribute('name'))
    if (event.target.getAttribute('name') === 'bartools')setDisplay(false)
  }

  return (
    <div className='bartools' name='bartools' onClick={hideSelectBox}>
      <div className="search">
        <ion-icon name="search-outline"></ion-icon>
        <input type="search" onChange={handlChange} name="search" id="" placeholder='Search for a country...' />
      </div>
      <div className="continents">
        <SelectBox continent={continent}
                    setContinent={setContinent}
                    setDisplay={setDisplay}
                    display={display}
        />
      </div>
    </div>
  )
}

export default BarTools
