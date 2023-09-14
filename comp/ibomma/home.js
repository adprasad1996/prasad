import React from 'react'
import {Link} from "react-router-dom";
import './final.css'

function Home() {
  return (
    <div>            
      <ul >

            <li><Link to = '/'>Home</Link></li>
            <li><Link to = '/about'>About</Link></li>
            <li><Link to = '/history'>History</Link></li>
      </ul>
    </div>
  )
}

export default Home