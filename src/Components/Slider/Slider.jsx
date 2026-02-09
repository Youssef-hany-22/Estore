import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "/Assets/images/grocery-banner-2.jpeg"
import img2 from "/Assets/images/grocery-banner.png"
const MySlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows :false
    };

    

    return (
        <>
            <div className="container my-5 ">

                <div className="row gap-0">
                    <div className="col-md-9">
                        <Slider { ...settings }>

                            <img src="Assets\images\slider-image-1.jpeg" height={ 400 }  alt="" />


                            <img src="Assets\images\slider-image-2.jpeg" height={ 400 }  alt="" />



                            <img src="Assets\images\slider-image-3.jpeg" height={ 400 } alt="" />



                        </Slider>
                    </div>

                    <div className="col-md-3">
                        <div className="images">
                            <img src={ img1 } height={ 200 } className="w-100" alt="" />
                            <img src={ img2 } height={ 200 }  className="w-100" alt="" />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default MySlider