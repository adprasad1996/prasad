import React, {useState, useEffect} from 'react'
import './App.css'

export default function App() {
      const [count, setCount] = useState(0)
      const [toggel, setToggle] = useState(true)
      const [pageWidth, setPageWidth] = useState(window.innerWidth)

      useEffect(() => {
            const resizeHandelr  = () => {
                  setPageWidth(window.innerWidth)                  
            }
            window.addEventListener("resize", resizeHandelr)
             

            console.log("hello I am use effect, ", toggel)
            return () => {
                  console.log("ima revoveing")
                  window.removeEventListener("resize", resizeHandelr)

            };
      })

  return (
    <div className='container'>  
      <button onClick={() => setCount(count+ 1)}>+</button>
      <h1>{count}</h1>
      <p onClick={() => setToggle(!toggel)}>{toggel? "true": "false" }</p>
      <h1>{pageWidth}</h1>
    </div>
  )
}
