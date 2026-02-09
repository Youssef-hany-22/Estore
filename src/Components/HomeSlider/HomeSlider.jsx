import React, { useEffect, useState } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import axios from 'axios';

function HomeSlider() {
      var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows :false
    };
    let [sliderImg , setSlider] = useState([])

      
    useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((response) => {
        setSlider(response.data.products.slice(0,5))
      });
  }, []);

console.log(sliderImg);

    return (
   
      <>
            <div className="container slider-container my-5 ">

                        <Slider { ...settings }>
                            {sliderImg?.map((item)=>

                                <div key={item.id}  style={{width:"100px" , height:"1px"}} className='bg-light' >

                                    <img   src={item.images}  className='w-50'  alt="" />
                                </div>
                            


                            )}





                        </Slider>
                    </div>

         

        </>
         

  )
}

export default HomeSlider