import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'

import { addToCart, deleteToCart } from '@/features/addToCartSlice.js'
import { addToWishlist } from '@/features/addToWishlistSlice.js'
import { toast } from "react-toastify"




const ProductDetails = () => {
    const cart  = useSelector((state) => state.cartArray.value)
    const wishlistArray  = useSelector((state) => state.wishlistArray.value)
    
    console.log(cart);
    
    
  const dispatch = useDispatch()
    
    let [data , setData] = useState([])
    let [productDetails , setProductDEtails] = useState([])
    let ProductId  = useParams()

    
useEffect(() => {
    axios.get(`https://dummyjson.com/products/${ProductId.id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);




  function add(id) {

    let cartArr = cart.some((cart)=> cart.id == id)     
   
    
    

    if (  cartArr ){

productExist()
  
    }else{
    let newData = data
      console.log(newData);
      
   
  
      dispatch(addToCart(newData))
      console.log(data.id);
      notifyCart()
    }
    
    
  }

  console.log(wishlistArray);
  
  function addWishlist(id) {

    let wishlist = wishlistArray.some((element)=> element.id == id)     
   
    console.log(wishlist);
    
    

    if (  wishlist ){
productExistInWishlist()

  
    }else{
    let newData = data
   
     
  
      dispatch(addToWishlist(newData))
      WishlistToaster()
      
    }
    
    
  }

    const notifyCart = () => toast.success("added to cart  ", {
  position: "top-right",
  autoClose: 2000,
});

    const productExist = () =>toast.info("product exist in cart  ", {
  position: "top-right",
  autoClose: 2000,
});
    const productExistInWishlist = () =>toast.info("product exist in wishlist  ", {
  position: "top-right",
  autoClose: 2000,
});



    const WishlistToaster = () =>toast.success("added to wishlist  ", {
  position: "top-right",
  autoClose: 2000,
});

  return (
    <div>
        <div className="container mt-5 ">
            <div className="row ">
                <div className="col-md-4">
                    <img src={data.images} className='w-100' alt="" />
                </div>
                <div className="col-md-8  d-flex align-items-center">
                  <div>

                    <h2 className='h2' >{data.title}</h2>
                    <p className='text-main font-sm' >{data.description}</p>
                    <p className='text-main font-sm ' style={{color:"#0aad0a"}} >{data.brand}</p>
                   <div className="d-flex justify-content-between align-items-center" >
                      <p>price : {data.price} EGP</p>
                    <p><i className='fas fa-star text-warning me-1' ></i>rating :  {data.rating}</p>
                   </div>
                  
                     <div className='d-flex justify-content-around mt-4'>
                      <div className='w-75 '>  
             <button onClick={()=> add(data.id)}  className='btn  w-100 btn-sm text-light mt-2 ' style={{backgroundColor:"#0aad0a"}}> Add To Cart </button>

  
                      </div>
<div>

             <button onClick={()=> addWishlist(data.id)}  className='btn  text-main-light  btn-sm mt-2    text-muted  '> <i className='fa fa-heart ' ></i> </button>


</div>

             </div>
                  </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default ProductDetails
