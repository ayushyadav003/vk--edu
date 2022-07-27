import './nav.css';


function Navbar() {

  return (
    <>
      <div className='nav_container'>
        <div className='nav__logo'>
          VKEdu
        </div>
        <div>
          <a href=''>About</a>
          <a href=''>Courses</a>
          <a href="#contact">Contact Us</a>
        </div>
      </div>
    </>
  )
}

export default Navbar;
