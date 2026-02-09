
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MySlider from "../../Components/Slider/Slider.jsx";
import Product from "../../Components/Product/Product.jsx";
import HomeSlider from "../../Components/HomeSlider/HomeSlider.jsx";


const Home = () => {



  return (
    <>
  <MySlider/>
  <HomeSlider/>
  <Product/>
  
    </>
  )
}

export default Home
