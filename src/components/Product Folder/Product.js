import ProductDetails from './ProductDetails';
import { BsCart3 } from 'react-icons/bs';
import{ AiOutlineEye, AiOutlineHeart } from 'react-icons/ai';
import './Product.css';
import React from 'react'

const Product = () => {
  return (
    <>
      
      <div className='products'>
        <h2># Products</h2>
        <p>Home .Products</p>
        <div className='container'>
          <div className='filter'>
            <div className='categories'>
              <h3>Categories</h3>
              <ul>
                <li>iPhones</li>
                <li>Camera</li>
                <li>Wireless-Charger</li>
                <li>Gaming</li>
                <li>Chandelier-Light</li>
                <li>Smart-Watch</li>
                <li>Headphone</li>
                <li>VR-Headset</li>
                <li>Samsung-Galaxy</li>
                <li>Living Room Chair</li>
                <li>Laptop-Bag</li>
                <li>Executive-Desk</li>
              </ul>
            </div>
          </div>
          <div className='productbox'>
            <div className='content'>
              {
                ProductDetails.map((curElm) => {
                  return (
                    <>
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
                    </>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product;