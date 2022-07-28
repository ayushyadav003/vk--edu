import React from 'react';
import './faculty.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function Faculty() {

    const data = [
        {
            image:"assets/faculty/t1.jpg",
            name : "Rajeev Singh",
            sub : "GS Faculty"
        },
        {
            image:"assets/faculty/t1.jpg",
            name : "Rajeev Singh",
            sub : "GS Faculty"
        },
        {
            image:"assets/faculty/t1.jpg",
            name : "Rajeev Singh",
            sub : "GS Faculty"
        },
        {
            image:"assets/faculty/t1.jpg",
            name : "Rajeev Singh",
            sub : "GS Faculty"
        },
        {
            image:"assets/faculty/t1.jpg",
            name : "Rajeev Singh",
            sub : "GS Faculty"
        },
    ]
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3.2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
        breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <div>
     <Carousel responsive={responsive} swipeable={true} >
        {
            data.map((item, i) => 
                <div key={i} className='faculty__card'>
                    <img src={item.image} alt={item.name} width="400px" loading='lazy' />
                    <h3>{item.name}</h3>
                    <p>{item.sub}</p>
                </div>
            )
        }      
     </Carousel>
    </div>
  )
}

export default Faculty