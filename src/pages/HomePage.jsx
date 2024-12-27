import React from 'react'
import "../css/HomePage.css"
import HomeButton from '../components/HomeButton'

function HomePage() {
  return (
    <div className='homepage'>
      <div className='homepage-text'>
        <h1>Teknolojik Yemekler</h1>
        <h4>KOD ACIKTIRIR PİZZA, DOYURUR</h4>
        <HomeButton />
      </div>
    </div>
  )
}

export default HomePage