import React from 'react'

const Header = () => {
  return (
    <header>
        <div className="title">
           <h1>
                Where in the world?
            </h1>
        </div>
        <div className="mode">
            <ion-icon name="moon-outline"></ion-icon>
            <span>Dark Mode</span>
        </div>
    </header>
  )
}

export default Header
