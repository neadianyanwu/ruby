import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home Folder/Home';

const Rout = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    </>
  )
}

export default Rout;