import React, { useContext } from 'react'
import { countriesContext } from '../context/countriesContext'

const Header = () => {
  const { state } = useContext(countriesContext)
  const { setState } = useContext(countriesContext)

  const changeMode = () => {
    const mode = state?.mode === 'light' ? 'dark' : 'light'
    setState({
      mode
    })
  }

  return (
    <header>
        <div className="title">
           <h1>
                Where in the world?
            </h1>
        </div>
        <div className="mode" onClick={changeMode}>
            <ion-icon className='icon-mode' name="moon-outline"></ion-icon>
            <span>
                {
                state?.mode === 'light'
                  ? 'Dark'
                  : 'Light'
                } Mode</span>
        </div>
    </header>
  )
}

export default Header
