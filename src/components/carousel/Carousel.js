import React,{useId} from 'react';
import './banner.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from 'react-responsive-carousel';


function CustomCarousel() {

  const id = useId();

  const data = [
    {
      text : "Welcome to VKEdu",
      subtext: "Education is the process which aids learning, acquiring knowledge and skills to one's character.",
      image:  "assets/b1.jpg"
      
    },
    {
      text : "Your future starts with VKEdu",
      subtext: "Education is the process which aids learning, acquiring knowledge and skills to one's character.",
      image:  "assets/b2.jpg"

    },

  ]

  return (
    <div className='banner__container'>
      <Carousel interval="8000" transitionTime="1000"
       autoPlay showArrows={true} infiniteLoop showStatus={false} showThumbs={false} width="100vw">
        {
          data.map(item =>
            <div key={id} className='banner__content'>
              <h2>{item.text}</h2>
              <p>{item.subtext}</p>
              <button>Start a new Journey</button>
            </div>
            )
        }
      </Carousel>
    </div>
  )
}

export default CustomCarousel