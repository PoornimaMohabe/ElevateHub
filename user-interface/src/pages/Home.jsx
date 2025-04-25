import React from 'react'
import WelcomeScreen from '../components/homepageComponents/WelcomeScreen'
import MentorCarousel from '../components/homepageComponents/MentorCarousel'
import RequestConfirmation from '../components/homepageComponents/RequestConfirmation'
import statichomeImage from '../assets/images/image.png'
import MentorCard from './Mentor/MentorCard'

function Home() {
  return (
    <div>
      <WelcomeScreen/>
      <MentorCarousel/>
      <img src={statichomeImage} alt="static image" className='object-cover w-full h-auto' />
      <MentorCard/>
     
      {/* <RequestConfirmation/> */}
    </div>
  )
}

export default Home
