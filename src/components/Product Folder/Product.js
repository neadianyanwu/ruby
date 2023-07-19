import ProductDetails from './ProductDetails';
import { BsCart3 } from 'react-icons/bs';
import{ AiOutlineEye, AiOutlineHeart } from 'react-icons/ai';
import './Product.css';
import React, { useState } from 'react'

const Product = () => {
  const [product, setProduct] = useState(ProductDetails);
  const filterproduct = (product) => {
    const update = ProductDetails.filter((x) => {
      return x.Cat === product;
    })
    setProduct(update);
  }

  const AllProducts = () => {
    setProduct(ProductDetails)
  }

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
              <li onClick={() => AllProducts ()}>All Products</li>
                <li onClick={() => filterproduct ("iPhones")}>iPhones</li>
                <li onClick={() => filterproduct ("Camera")}>Camera</li>
                <li onClick={() => filterproduct ("Wireless-Charger")}>Wireless-Charger</li>
                <li onClick={() => filterproduct ("Gaming")}>Gaming</li>
                <li onClick={() => filterproduct ("Chandelier-Light")}>Chandelier-Light</li>
                <li onClick={() => filterproduct ("Smart-Watch")}>Smart-Watch</li>
                <li onClick={() => filterproduct ("Headphone")}>Headphone</li>
                <li onClick={() => filterproduct ("VR-Headset")}>VR-Headset</li>
                <li onClick={() => filterproduct ("Samsung-Galaxy")}>Samsung-Galaxy</li>
                <li onClick={() => filterproduct ("Living Room Chair")}>Living Room Chair</li>
                <li onClick={() => filterproduct ("Laptop-bag")}>Laptop-Bag</li>
                <li onClick={() => filterproduct ("Executive-Desk")}>Executive-Desk</li>
              </ul>
            </div>
          </div>
          <div className='productbox'>
            <div className='content'>
              {
                product.map((curElm) => {
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