import './nav.css';


function Navbar() {

  return (
    <>
      <div className='nav_container'>
        <div className='nav__logo'>
          VKEdu
        </div>
        <div>
          <a href='#about1'>About</a>
          <a href='#courses'>Courses</a>
          <a href="#contact">Contact Us</a>
        </div>
      </div>
    </>
  )
}

export default Navbar;
