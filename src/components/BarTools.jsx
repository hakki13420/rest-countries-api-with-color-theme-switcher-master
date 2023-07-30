import React from 'react'

const BarTools = ({ setContinent, setSearch }) => {
  const handlChange = (event) => {
    setSearch(event.target.value)
  }

  const handlSelectChange = (event) => {
    setContinent(event.target.value)
  }

  return (
    <div className='bartools'>
      <div className="search">
        <ion-icon name="search-outline"></ion-icon>
        <input type="search" onChange={handlChange} name="search" id="" placeholder='Search for a country...' />
      </div>
      <div className="continents">
        <select name="continents" onChange={handlSelectChange}>
          <option value="-1">Filter By Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  )
}

export default BarTools
