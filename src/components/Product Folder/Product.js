import ProductDetails from './ProductDetails';
import { BsCart3 } from 'react-icons/bs';
import{ AiOutlineEye, AiOutlineHeart } from 'react-icons/ai';
import React from 'react'

const Product = () => {
  return (
    <>
      <h3># Products</h3>
      <p>Home . Products</p>
      <div className='products'>
        <div className='container'>
          <div className='filter'>
            <div className='categories'>
              <h3>Categories</h3>
              <ul>
                <li>Apple iPhones</li>
                <li>Camera</li>
                <li>Wireless Charger</li>
                <li>Gaming Console</li>
                <li>Chandelier Light</li>
                <li>Smart Watch</li>
                <li>Headphone</li>
                <li>VR Headset</li>
                <li>Samsung Galaxy</li>
                <li>Living Room Chair</li>
              </ul>
            </div>
          </div>
          <div className='productbox'>
            <div className='container'>
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