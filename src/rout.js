import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home Folder/Home';
import Product from './components/Product Folder/Product';

const Rout = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Product />} />
        </Routes>
    </>
  )
}

export default Rout;