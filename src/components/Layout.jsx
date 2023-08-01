import React, { useContext } from 'react'
import { themeContext } from '../context/themeContext'

const Layout = ({ children }) => {
  const { mode } = useContext(themeContext).state

  return (
    <div className={`layout theme-${mode}`}>
        {children}
    </div>
  )
}

export default Layout
