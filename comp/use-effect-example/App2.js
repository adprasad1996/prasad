import React, {useState, useEffect} from 'react'
import './App.css'

const URL = "https://jsonplaceholder.typicode.com/users";

export default function App2() { 
  const [userData, setUserData] = useState([])
  const [isLoding, setIsLoding] = useState(false) 
  const [isError, setIsError] = useState({status: false, msg: ''})
    const fetchUserData = async (apiURL) => {
      setIsLoding(true)
      setIsError({status: false, msg: ''})
      try{
        const response = await fetch(apiURL)
        const data = await response.json()
        console.log(data)
        setIsLoding(false)
        setUserData(data)
        setIsError({status: false, msg: ''})

        if (response.status === 404){
          throw Error("data not fount");
        }
        }catch (error){
          setIsError({status: true, msg: 'something went wrong plese try again'})
          setIsLoding(false)
          console.log(error.message)
  }    
 };
      

      useEffect(() => {
        fetchUserData(URL)
       
      }, [])

  return (
    <div className='container' >
      <h1>    {isLoding? "...Loding": ""}
      {isError.status? isError.msg: ''}
      </h1>
  
      
      <ul>
        {userData.map((each)=> {
          return(
          <li key = {each.id}>
            <p>{each.name}</p>
            <p>{each.username}</p>
            <p>{each.email}</p>
          </li>)

        })}
      </ul>
    </div>
  )
}
