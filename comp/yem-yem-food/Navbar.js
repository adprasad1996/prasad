import React, {useState} from 'react'
import { IoIosMenu ,IoIosClose,IoIosSearch, IoMdCart, IoMdHelpCircle} from "react-icons/io";
import {FaTruckMoving, FaGoogleWallet} from "react-icons/fa6";
import {MdOutlineFavoriteBorder} from "react-icons/md";
import './Navbar.css'

function Navbar() {

  const [sideNav, setSideNav] = useState(false)
  console.log(sideNav)
  return (
    <div className='main-container d-flex'>
      <div className='menu-card d-flex'>
            <div onClick={() => setSideNav(!sideNav)}>
              <IoIosMenu size = {30}/>                         
                  
            </div>
            <div>
              <h1 className='icon-heading'>Yem<span className="font-weight-bold">Eats</span></h1>
            </div>
            <div className='d-flex delivery-card'>
              <p className='free-heading'>Free</p>
              <p className='delivery-heading'>Delivery</p>
            </div>
            
      </div>
      <div className='search-card'>
            <IoIosSearch size = {20}/>
            <input type = "search" placeholder='Enter Meal'></input>

      </div>
      <button className='card-btn'>
        <IoMdCart size={25}/>
        Cart
        </button>
        {sideNav? <div onClick={() => setSideNav(!sideNav)} className='content'></div>: ''}
        {sideNav? <div className='content-right'><IoIosClose className='close-icon' onClick={() => setSideNav(!sideNav)} size={35}/>
        <h4 className='text-2xl p-4'>Yem<span className='text-danger'>Eats</span></h4>
        <nav>
          <ul className='ul-card'>
            <li className='li-card'>
              <IoMdCart size={25}
              className='icon-card'/>
              My Account
            </li>
            <li className='li-card'>
              <FaTruckMoving size={25}
              className='icon-card'/>
              TruckMoving
            </li>
            <li className='li-card'>
              <MdOutlineFavoriteBorder size={25}
              className='icon-card'/>
              My Favorite
            </li>
            <li className='li-card'>
              <FaGoogleWallet size={25}
              className='icon-card'/>
              Wallet
            </li>
            <li className='li-card'>
              <IoMdHelpCircle size={25}
              className='icon-card'/>
              Help
            </li>
          </ul>
        </nav>
        </div>:
        <div className='content-left'>
        </div>}
        
    </div>
  )
}

export default Navbar