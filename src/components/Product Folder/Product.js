import ProductDetails from './ProductDetails';
import { BsCart3 } from 'react-icons/bs';
import{ AiOutlineEye, AiOutlineHeart, AiOutlineClose } from 'react-icons/ai';
import './Product.css';
import React from 'react'

const Product = ({product, setProduct, detail, view, close, setClose}) => {
  
  const filterproduct = (product) => {
    const update = ProductDetails.filter((x) => {
      return x.Cat.toLowerCase() === product.toLowerCase();
    })
    setProduct(update);
  }

  const AllProducts = () => {
    setProduct(ProductDetails)
  }

  return (
    <>
    { close ? 
      <div className='product-details'>
        <div className='container'>
          <button onClick={() => setClose(false)} className='closebtn'><AiOutlineClose /></button>
          {
            detail.map((curElm) => {
              return (
                <div className='productbox'>
                  <div className='img-box'>
                    <img src={curElm.Img} alt={curElm.Title} className='productimg'/>
                  </div>
                  <div className='detail'>
                    <h4>{curElm.Cat}</h4>
                    <h2>{curElm.Title}</h2>
                    <p>Experience the greatness in your hands</p>
                    <h3>{curElm.Price}</h3>
                    <button>Add to Cart</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div> : null
    }
    
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
                            <li onClick={() => view(curElm)}> <AiOutlineEye /> </li>
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