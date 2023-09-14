import React from 'react'
import {topPicks} from './data'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


function TopPics() {
  return (
    <>
      <h1 className='top-pics-heading'>Top Pics</h1>
      <div className='top-pic-container'>
        <Splide options={{perPage: 4, gap: "1rem", grag:"free", arrows: false}}>
        {topPicks.map((item) => {
          return(
            <SplideSlide key={item.id}>
            <div className='top-pic-card'>
              <div className='top-pic-item'>
                <p>{item.title}</p>
                <p>{item.price}</p>
                <button>Add to Cart</button>
              </div>
                <img src = {item.img} alt = {item.title}/>
            </div>
            </SplideSlide>
          )

        })}
        </Splide>
      </div>
      
    </>
  )
}

export default TopPics