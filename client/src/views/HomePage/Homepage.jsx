import React from 'react'
import Nav from '../../components/homepage-Components/Nav'
import HomePageComponent from '../../components/homepage-Components/HomePageComponent'


const Homepage = () => {
  return (
    
    <div className="min-w-full ">
      <Nav/>
        <div className='w-full'>

      <HomePageComponent />
        </div>

    </div>
  )
}

export default Homepage