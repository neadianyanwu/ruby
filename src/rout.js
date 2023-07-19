import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home Folder/Home';
import Product from './components/Product Folder/Product';

const Rout = ({product, setProduct, detail, view, close, setClose}) => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Product product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose}/>} />
        </Routes>
    </>
  )
}

export default Rout;