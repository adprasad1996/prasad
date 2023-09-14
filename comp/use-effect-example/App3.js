import React, {useState, useEffect} from 'react';
import './App3.css'

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
function App3() {
      const [list, setList] = useState([])
      const [error, setError] = useState({status: false, msg: ''})
      const [input, setInput] = useState("")

      const getData = async(apiUrl)=> {
            try{

            const response = await fetch(apiUrl) 
            
            const {drinks} = await response.json()
            setList(drinks)   
            setError({
                  status: false,
                  msg:"",
             })
            console.log(drinks) 
            if(!drinks){
                  throw new Error( "data not found")
            }     
              
            }catch(error){
                  console.log(error.message)
                  setError({
                        status: true,
                        msg: error.message || "Something went wrong..",
                   })
            }       
      }

      useEffect(() => {
            const correctUrl = `${URL}${input}`
            getData(correctUrl)

      }, [input])
  return (
    <div>
      <form>
            <input
             type = "text" 
             onChange = {(e) => setInput(e.target.value) }
             value={input}

            />
      </form>
      <ul>
            
            {list.map((each) => {
                  const {idDrink, strDrinkThumb, strDrink} = each
                  return <li key = {idDrink}>
                          
                           <img  src = {strDrinkThumb} alt = {strDrink} />
                           <h1>{strDrink}</h1>
                       </li>
            })}
      </ul>
    </div>
  )
}

export default App3
