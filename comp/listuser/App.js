import React from 'react'

import './App.css'

let data = [
      {
          "name": "John Smith",
          "location": "New York, NY"
      },
      {
          "name": "Jane Doe",
          "location": "Los Angeles, CA"
      },
      {
          "name": "Bob Johnson",
          "location": "Chicago, IL"
      },
      {
          "name": "Emily Davis",
          "location": "Houston, TX"
      },
      {
          "name": "Michael Brown",
          "location": "Phoenix, AZ"
      },
      {
          "name": "Sarah Miller",
          "location": "Philadelphia, PA"
      },
      {
          "name": "David Garcia",
          "location": "San Antonio, TX"
      },
      {
          "name": "Jessica Rodriguez",
          "location": "San Diego, CA"
      },
      {
          "name": "Mark Wilson",
          "location": "Dallas, TX"
      },
      {
          "name": "Elizabeth Martinez",
          "location": "San Jose, CA"
      },
      {
          "name": "Joshua Hernandez",
          "location": "Austin, TX"
      },
      {
          "name": "Karen Moore",
          "location": "Jacksonville, FL"
      },
      {
          "name": "Brian Jackson",
          "location": "Fort Worth, TX"
      },
      {
          "name": "Heather Anderson",
          "location": "Columbus, OH"
      },
      {
          "name": "Teresa Thomas",
          "location": "Charlotte, NC"
      },
      {
          "name": "Dennis Mitchell",
          "location": "Indianapolis, IN"
      },
      {
          "name": "Cynthia Lee",
          "location": "Seattle, WA"
      },
      {
          "name": "Adam Hall",
          "location": "Denver, CO"
      },
      {
          "name": "Nancy Allen",
          "location": "El Paso, TX"
      },
      {
          "name": "Lisa King",
          "location": "Washington, DC"
      },
      {
          "name": "William Wright",
          "location": "Boston, MA"
      },
      {
          "name": "Mary Scott",
          "location": "Nashville, TN"
      },
      {
          "name": "Kathryn Green",
          "location": "Portland, OR"
      },
      {
          "name": "Gerald Baker",
          "location": "Vancouver, BC"
      },
      {
          "name": "Eric Cooper",
          "location": "Sacramento, CA"
      },
      {
          "name": "Stephanie Gomez",
          "location": "Oklahoma City, OK"
      },
      {
          "name": "Edward Kelly",
          "location": "Tulsa, OK"
      },
      {
          "name": "Ashley Sanders",
          "location": "Winnipeg, MB"
      }
  ]
 
  

function App() {
  
  
  return (    
      <div className='main-container'>
            <div className='head-card'>
                  <h1 className='text-white'>PEOPLE DATA</h1>
                  <button >Next person</button>   
            </div> 
            {data.map(each => {
                  return (
            <div key = {each.id} className='d-flex person-card mt-3'>
                  <div className='left-card'>
                      <h1>{data.indexOf(each)+1}</h1>
                  </div>
                  <div className='right-card'>
                        <h3 className='name'>{each.name}</h3>
                        <h3 className='location'>{each.location}</h3>                        
                  </div>
            </div>
            
                  )
            })}          
                  

            

                 
               
      </div>
    
  )
}

export default App