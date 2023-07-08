import React from 'react';
import { FaTruckMoving } from 'react-icons/fa';
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import './Nav.css';

const Nav = () => {
  return (
   <>
     <div className='notice'>
      <p>
        <div className='icon'>
        <FaTruckMoving />
        </div>
        <span className='text'> Shipping is FREE on purchases up to #80,000.</span>
      </p>
    </div>

    <div className='main-header'>
      <div className='container'>
        <div className='logo'>
          <span>RUBY</span>
        </div>
        <div className='search-box'>
          <input type='text' value='' placeholder='Enter The Product Name' autoComplete='off'></input>
          <button>Search</button>
        </div>
        <div className='icon'>
          <div className='account'>
            <div className='user-icon'>
              <AiOutlineUser />
            </div>
            <p>Hello, User</p>
          </div>
            <AiOutlineHeart />
            <BsBagCheck />
        </div>
      </div>
    </div>
   </>
  )
}

export default Nav;