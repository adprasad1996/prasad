import React from 'react'

function Delivery() {
  return (
    <div className='pb-3 pt-3 pl-5  pt-2'>
      <h3 className='text-danger text-center delivery-text'>Quick Delivery App</h3>
      <div className='delivery-card-container'>
            <img className='delivery-img' alt="app"  src = "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"/>
            <div className='d-flex flex-column justify-content-start text-card'>
                  <p className='get-app-text'>Get the App</p>
                  <h1 className='app-heading'>Limitless convenience on-demand</h1>
                  <p className='app-description '>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatum molestiae delectus culpa hic assumenda,
            voluptate reprehenderit dolore autem cum ullam sed odit
            perspiciatis. Doloribus quos velit, eveniet ex deserunt fuga? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
                  </p>
                  <button className='btn btn-dark dark-btn'>Get Started</button>
            </div>
       </div>
       
    </div>
  )
}

export default Delivery