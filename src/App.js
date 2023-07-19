import React, { useState } from 'react';
import Nav from './components/Nav Folder/Nav';
import { BrowserRouter  } from 'react-router-dom';
import Rout from './rout';
import Footer from './components/Footer Folder/Footer';
import ProductDetails from './components/Product Folder/ProductDetails';


const App = () => {
  // product Detail
  const [close,setClose] = useState(false);
  const [detail, setDetail] = useState([]);
   // filtered product
  const [product, setProduct] = useState(ProductDetails);
  const searchbtn = (product) => {
      const change = ProductDetails.filter((x) => {
        return x.Cat.toLowerCase() === product.toLowerCase();
      })
      setProduct(change)
  }

  // Section: product detail
  const view = (product) => {
    setDetail([{...product}])
    setClose(true)
  }

  return (
    <>
     <BrowserRouter>
      <Nav searchbtn={searchbtn} />
      <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} />
      <Footer />
     </BrowserRouter>
    </>
  )
}

export default App