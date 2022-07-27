import './nav.css';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { SwipeableDrawer } from '@mui/material';
import { useState } from 'react';

function Navbar() {

  const[drawer, setDrawer] = useState(false)

  return (
    <>
      <div className='nav_container'>
        <div className='nav__logo'>
          VKEdu
        </div>
        <div className='nav__options'>
          <a href='#about1'>About</a>
          <a href='#courses'>Courses</a>
          <a href="#contact">Contact Us</a>
        </div>
        <div className='hamburger'>
        <MenuOpenIcon onClick={()=>{setDrawer(true)}} />
        <SwipeableDrawer
          anchor='right'
          open={drawer}
          onOpen={()=>{setDrawer(true)}}
          onClose={()=>{setDrawer(false)}}
        >
          <div className='list'>
            <p href='#about1'>About</p>
            <p href='#courses'>Courses</p>
            <p href="#contact">Contact Us</p>
          </div>
        
        </SwipeableDrawer>
        </div>

      </div>
    </>
  )
}

export default Navbar;
