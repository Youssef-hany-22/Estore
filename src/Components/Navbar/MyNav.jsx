import { Link } from "react-router"

import { FaFacebook ,FaInstagram, FaShoppingCart, FaTwitter } from "react-icons/fa";

import { IoMdHeart } from "react-icons/io";



import { useSelector } from 'react-redux'
import Checkout from './../Checkout/Checkout';

function MyNav() {
    const cart  = useSelector((state) => state.cartArray.value)
    const wishlistArray  = useSelector((state) => state.wishlistArray.value)

  return (
     <>
     <div className="container ">

<nav className="navbar navbar-expand-lg bg-body-tertiary   ">
 
    <Link className="navbar-brand h1" to="/"> Estore <span className="text-info">.</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav  ms-auto ">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/product">Product</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cart">Cart</Link>
        </li>
      
        <li className="nav-item">
          <Link className="nav-link" to="/wishlist">Wishlist</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Checkout">Checkout</Link>
        </li>
       
     
      </ul>
    </div>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav  w-50 ms-auto align-items-center ">
     <li className="nav-item  ">
          <Link className="nav-link badge h1 " to="/cart"> 
<div className="position-relative">
  <FaShoppingCart size={28} style={{color:"black"}} />
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
  </span>
</div>

 </Link>
        </li>
     <li className="nav-item  ">
          <Link className="nav-link badge h1 " to="/wishlist"> 
<div className="position-relative">
  <IoMdHeart  size={28} style={{color:"black"}} />
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {wishlistArray.length}
  </span>
</div>

 </Link>
        </li>
     
     <li className="nav-item ">
          <Link className="nav-link badge h1 " to="/contact"> <FaFacebook size={28} style={{color:"black"}} />

 </Link>
        </li>
     
     <li className="nav-item ">
          <Link className="nav-link badge h1 " to="/contact"> <FaInstagram size={28} style={{color:"black"}} />

 </Link>
        </li>
     <li className="nav-item ">
          <Link className="nav-link badge h1 " to="/contact"> <FaTwitter size={28} style={{color:"black"}} />

 </Link>
        </li>
     
      </ul>
    </div>

</nav>

     </div>
  
 
    </>
  )
}

export default MyNav