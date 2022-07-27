import React from 'react';
import './contact.css';

function Contactus() {

    const onNewUserSubmit = ()=> {

    }
    const newUserHandler = ()=>{

    }

  return (
    <div className='contact__container'>
        <div className="form">
        <div className='contact__images'>
            <img src='assets/now2.jpg' alt="##" />
        </div>  
        <div className='form_container'>
          <h2>ENROLL NOW</h2>
          <form onSubmit={(e)=>onNewUserSubmit(e)}>
          <div>
            <input name='name' onChange={(e)=>newUserHandler(e)} required type='text' placeholder='First Name' />
            <input name='lastname' onChange={(e)=>newUserHandler(e)} required type='text' placeholder='Last Name' />
          </div>
          <input name='email' onChange={(e)=>newUserHandler(e)} required type='email' placeholder='Email' />
          <input name='phone' onChange={(e)=>newUserHandler(e)} type='number' placeholder='Phone' />
          <input name='phone' onChange={(e)=>newUserHandler(e)} type='text' placeholder='Course' />
    
        <input type='submit' />
        </form>
        </div>
    </div>
    </div>
  )
}

export default Contactus