import React from 'react'
import WelcomeScreen from '../components/homepageComponents/WelcomeScreen'
import MentorCarousel from '../components/homepageComponents/MentorCarousel'
import RequestConfirmation from '../components/homepageComponents/RequestConfirmation'

function Home() {
  return (
    <div>
      <WelcomeScreen/>
      <MentorCarousel/>
      <RequestConfirmation/>
    </div>
  )
}

export default Home
