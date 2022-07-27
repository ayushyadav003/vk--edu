import React from 'react';
import './about.css'

function About() {
  return (
    <div className='about__container' id='about1'>
        <div className='border'></div>
        <div>
            <h2>ABOUT US
                <p>We make you winner</p>
            </h2>
            <p className='content'>Wekerle Business School - as a prestigious educational institution - considers
             its mission to provide outstanding education within the Bologna system. Its aim 
             is to create conditions for education that enhance the students’ academic and personal
             development by uniting high-level academic knowledge with practical education, based on
             corporate partnerships from outside the institution. In this global world, only by having 
             a highly professional and open-minded education that incorporates a strong sense of ethics 
             and responsibilities can one remain competitive. A WBS education while successfully integrating
             various cultures enables its students to rise to new challenges anywhere in the world, thus helping 
             them to fulfill their true potential.
            </p>
             </div>
        <div>
            <img src="assets/about.jpg" alt='institute' />
        </div>
    </div>
  )
}

export default About