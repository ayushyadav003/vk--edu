import { height } from '@mui/system';
import React from 'react';
import './Course.css'

function Courses() {

  const data = [
    {
      // image : "assets/service/ship.png",
      text : "Bachelor's Courses",
      subtext : "BA/BEd/BCOM/BCOM.H/BE/BBA/BCA",
      icon:""
    },
    {
      // image : "assets/service/support.png",
      text : "Master's Courses",
      subtext : "MA/MEd/MCOM//B/MCA/MBA",
      
    },
    {
      // image : "assets/service/piggy.png",
      text : "Diploma Courses",
      subtext : "MA/MEd/MCOM//B/MCA/MBA",

    },
    {
      // image : "assets/service/badge.png",
      text : "Government Job Prepration",
      subtext : "CSC/CTET/BANK PO//SSC/Railxays",

    },    
    
  ]

  return (
    <div id='courses'>
      <div style={{marginTop:"1rem"}}>
        <img src='assets/banner2.png' height="180px" width="700px" alt='education'/>
        <img src='assets/banner.jpg' height="180px" width="700px" alt='education'/>
      </div>
       <div className='services__card__container'>
        {
          data.map(item=>
            <div className='services__card' >
              <div style={{display:"flex",justifyContent:'center'}}>
                <div className='grad_icon'>&#127891;</div>
                <div>
                  <h3>{item.text}</h3>
                  <span>{item.subtext}</span>
                  <p>&#x2192;</p>
                </div>
              </div>
            </div>
          )
        }
    </div>

    </div>
  )
}

export default Courses