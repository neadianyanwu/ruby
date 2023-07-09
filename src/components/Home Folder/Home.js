import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight} from 'react-icons/bs';

const Home = () => {
  return (
    <>
        <div className='top-banner'>
            <div className='container'>
                <div className='detail'>
                <h2>The Online Market For Any Niche</h2>
                    <Link to='/product'>Shop Now <BsArrowRight /></Link>
                </div>
                <div className='img-box'>
                  <img src='./img/rolls.png' alt='bannerimg' />
                </div>
            </div>
        </div>
    </>
  )
}

export default Home;