import React, {useState} from 'react'
import { mealData } from './data'


function Meal() {
      const [mdata , setMdata] = useState(mealData)

      const filterData = (category) => {           
            
            const fdata = mealData.filter((each)=> {
                        return each.category === category
                  })
                  setMdata(fdata)    
                                 

      }
      
  return (
    <div className='meal-container container'>
      <h1 className='meal-heading'>
            Our Meal
      </h1>
      
      <div className='buttons-card'>
            <button onClick={() => setMdata(mealData)}>All</button>
            <button onClick={() => filterData("chicken")}>Chicken</button>
            <button onClick={() => filterData("pizza")}>Pizza</button>
            <button onClick={() =>filterData("salad")}>Salad</button>
      </div>
      <div className='meal-card-container row'>
            {
                  mdata.map((each) => (
                        
                        <div key = {each.id} className='meal-item col-3'>                              
                              {console.log(each.id)}
                              <img src = {each.image} alt = {each.name}/>
                              <div className='price-card'>
                                    <p className='item-name'>{each.name}</p>
                                  <p className='price-text'>{each.price}</p>  
                              </div>
                        </div>
                  ))

            }
      </div>

    </div>
  )
}

export default Meal