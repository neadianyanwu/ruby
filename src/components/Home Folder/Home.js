import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight} from 'react-icons/bs';
import { FiTruck } from 'react-icons/fi';
import { BiDollar } from 'react-icons/bi';
import { TbFilePercent } from 'react-icons/tb';
import { FiHeadphones } from 'react-icons/fi'
import { BsCart3 } from 'react-icons/bs';
import{ AiOutlineEye, AiOutlineHeart } from 'react-icons/ai';
import Homeproducts from './HomeProducts';
import './Home.css';

const Home = () => {
  return (
    <>
    <div className='top-banner'>
      <div className='container'>
        <div className='detail'>
          <h2>The Online Market For Any Niche</h2>
          <Link to='/product' className='link'>Shop Now <BsArrowRight /></Link>
          </div>
          <div className='img_box'>
            <img src='./img/s23.jfif' alt='bannerimg' />
          </div>
      </div>
    </div>
    <div className='product-type'>
      <div className='container'>
        <div className='box'>
          <div className='img-box'>
            <img src='./img/pixel7pro.jpg' alt='mobile-phone' />
          </div>
          <div className='detail'>
            <p>20 products</p>
          </div>
        </div>
        <div className='box'>
          <div className='img-box'>
            <img src='./img/headphone.jpg' alt='headset' />
          </div>
          <div className='detail'>
            <p>23 products</p>
          </div>
        </div>
        <div className='box'>
          <div className='img-box'>
            <img src='./img/dsk.jpg' alt='desktop' />
          </div>
          <div className='detail'>
            <p>18 products</p>
          </div>
        </div>
        <div className='box'>
          <div className='img-box'>
            <img src='./img/charger.jfif' alt='charger' />
          </div>
          <div className='detail'>
            <p>10 products</p>
          </div>
        </div>
        <div className='box'>
          <div className='img-box'>
            <img src='./img/landline.jfif' alt='landline' />
          </div>
          <div className='detail'>
            <p>6 products</p>
          </div>
        </div>
        <div className='box'>
          <div className='img-box'>
            <img src='./img/macbook.jfif' alt='laptop' />
          </div>
          <div className='detail'>
            <p>50 products</p>
          </div>
        </div>
      </div>
    </div>
    <div className='about'>
      <div className='container'>
        <div className='box'>
          <div className='icon'>
            <FiTruck />
          </div>
          <div className='detail'>
            <h3>Free Shipping</h3>
            <p>Order above $1000</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon'>
            <BiDollar />
          </div>
          <div className='detail'>
            <h3>Return & Refund</h3>
            <p>Guarantee of Refund</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon'>
            <TbFilePercent/>
          </div>
          <div className='detail'>
            <h3>Member Discount</h3>
            <p>On every order</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon'>
            <FiHeadphones />
          </div>
          <div className='detail'>
            <h3>Customer Support</h3>
            <p>Request Assistance</p>
          </div>
        </div>
      </div>
    </div>
    <div class='product'>
      <h2>Top Products</h2>
      <div class='container'>
        {Homeproducts.map((curElm) => {
          return (
            <div class='box' key={curElm.id}>
              <div className='img-box'>
                <img src={curElm.Img} alt={curElm.Title} className='product-img' />
                <div className='icon'>
                  <li> <BsCart3 /> </li>
                  <li> <AiOutlineEye /> </li>
                  <li> <AiOutlineHeart /> </li>
                </div>
              </div>
              <div className='detail'>
                <p>{curElm.Cat}</p>
                <h3>{curElm.Title}</h3>
                <h4>{curElm.Price}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    <div className='banner'>
      <div className='detail'>
        <h4>Latest Technology Added</h4>
        <h3>Samsung Galaxy Z Fold4 5G Mobile Phone Sim Free Android Folding Smartphone 512GB</h3>
        <p><BiDollar />1556.91</p>
      </div>
      <div className='img-box'>
        <img src='./img/s23.jfif' alt='mobilephone'/>
      </div>
    </div>
    </>
  )
}

export default Home;