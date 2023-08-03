import React, { useState } from 'react'

const SelectBox = ({ continent, setContinent, display, setDisplay }) => {
  // const [selectedValue, setSelectedValue] = useState('Filter By Region...')
  const label = 'Filter By Region'
  const values = [
    'Africa',
    'America',
    'Asia',
    'Europe',
    'Oceania'
  ]

  const handlClick = () => {
    setDisplay(!display)
  }

  const clickItem = (event) => {
    setContinent(event.target.getAttribute('data-value'))
  }

  return (
    <div className="selectBox">
        <div className="head">
            <span>{continent || label}</span>
            <ion-icon id="continent-icon" onClick={handlClick} name="chevron-down-outline"></ion-icon>
        </div>
        {display && <div className="body">
            {
                values.map(el => <p key={el}
                                    onClick={clickItem}
                                    data-value={el}
                                >
                                    {el}
                                </p>
                )
            }
        </div>}

    </div>
  )
}

export default SelectBox
