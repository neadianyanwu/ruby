import React from 'react';
import Nav from './components/Nav Folder/Nav';
import { BrowserRouter  } from 'react-router-dom';
import Rout from './rout';
import Footer from './components/Footer Folder/Footer';


const App = () => {
  return (
    <>
     <BrowserRouter>
      <Nav />
      <Rout />
      <Footer />
     </BrowserRouter>
    </>
  )
}

export default App