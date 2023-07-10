import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight} from 'react-icons/bs';
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
            <img src='./img/tag.jfif' alt='bannerimg' />
          </div>
      </div>
    </div>
    <div className='product-type'>
      <div className='container'>
        <div className='box'>
          <div className='img-box'>
            <img src='./img/s23.jfif' alt='mobile-phone' />
          </div>
          <div className='detail'>
            <p>20 products</p>
          </div>
        </div>
        <div className='box'>
          <div className='img-box'>
            <img src='./img/airpod.jfif' alt='headset' />
          </div>
          <div className='detail'>
            <p>23 products</p>
          </div>
        </div>
        <div className='box'>
          <div className='img-box'>
            <img src='./img/xdr.jfif' alt='desktop' />
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
    </>
  )
}

export default Home;