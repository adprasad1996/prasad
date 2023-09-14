import React,{useState} from 'react'
import './Navbar.css'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'

function Feachred() {
      const sliders = [
      {
                  url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg'
                },
                {
                  url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'
                },
                {
                  url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
                },
            
                  
            
      ]
      const [currentIndex, setCurrentIndex] = useState(0)

      const prevSlider = () => {
      const isFirstSlider = currentIndex===0
      const newIndex = isFirstSlider? sliders.length-1: currentIndex-1
      setCurrentIndex(newIndex)
      }

      const nextSlider = () => {
        const isLastSlider = currentIndex=== sliders.length-1
        const newIndex = isLastSlider? 0: currentIndex+1
        setCurrentIndex(newIndex)
        }
  return (
    <div className='bg-container'>
      <div className='img-container' style={{backgroundImage:`url(${sliders[currentIndex].url})`}}>          

      </div>
      <div className='left-arrow'>
        <BsChevronLeft size={30} onClick={prevSlider}/>
      </div>
      <div className='right-arrow'>
        <BsChevronRight size={30} onClick={nextSlider}/>
      </div>
    
     
      

    </div>
  )
}

export default Feachred