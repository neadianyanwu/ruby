import React from 'react';
import Nav from './components/Nav Folder/Nav';
import { BrowserRouter  } from 'react-router-dom';
import Rout from './rout';


const App = () => {
  return (
    <>
     <BrowserRouter>
      <Nav />
      <Rout />
     </BrowserRouter>
    </>
  )
}

export default App