import React from 'react'
import { Link} from 'react-router-dom'


const Home = () => {
  return (
    <div className='flex justify-between bg-white '>
        <div>About</div>
        <Link to={'/login'}> Login </Link>        
        <div>Patient</div>
    </div>
  )
}

export default Home