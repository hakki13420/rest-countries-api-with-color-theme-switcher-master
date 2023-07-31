import React, { useContext } from 'react'
import { countriesContext } from '../context/countriesContext'

const Layout = ({ children }) => {
  const { mode } = useContext(countriesContext).state

  return (
    <div className={`layout theme-${mode}`}>
        {children}
    </div>
  )
}

export default Layout
