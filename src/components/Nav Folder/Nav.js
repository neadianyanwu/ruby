import React, { useState } from 'react';
import { FaTruckMoving } from 'react-icons/fa';
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { CiLogin, CiLogout } from 'react-icons/ci';
import { useAuth0 } from "@auth0/auth0-react";
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = ({searchbtn}) => {
 
  const [search, setSearch] = useState();
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
   <>
     <div className='notice'>
      <p>
        <div className='icon'>
        <FaTruckMoving />
        </div>
        <span className='text'> Shipping is FREE on purchases up to $1000.</span>
      </p>
      </div>

      <div className='main-header'>
        <div className='container'>
          <div className='logo'>
            <span>RUBY</span>
          </div>
          <div className='search-box'>
            <input type='text' value={search} placeholder='Search Your Product...' autoComplete='off' onChange={(e) => setSearch(e.target.value)}></input>
            <button onClick={() => searchbtn(search)}>Search</button>
          </div>
          <div className='icon'>
            {
              isAuthenticated && 
              (
                <div className='account'>
                <div className='user-icon'>
                  <AiOutlineUser />
                </div>
                <p>Hello, {user.name}</p>
              </div>
              )
            }
            
            <div className='second-icon'>
              <Link to="/" className='link'>
                <AiOutlineHeart />
              </Link>
              <Link to="/cart" className='link'>
                <BsBagCheck />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='header'>
        <div className='container'>
          <div className='nav'>
            <ul>
              <li>
                <Link className='link' to="/">Home</Link>
              </li>
              <li>
                <Link className='link' to="/products">Products</Link>
              </li>
              <li>
                <Link className='link' to="/about">About</Link>
              </li>
              <li>
                <Link className='link' to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className='auth'>
            {
              isAuthenticated ? 
              <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><CiLogout /></button>
              :
              <button onClick={() => loginWithRedirect()}><CiLogin /></button>
            }
          </div>
        </div>
      </div>
   </>
  )
}

export default Nav;