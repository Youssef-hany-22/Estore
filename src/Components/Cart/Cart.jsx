import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router'
import { deleteToCart, toggleSelect } from '@/features/addToCartSlice'
import { addToWishlist } from '@/features/addToWishlistSlice'
import Wishlist from '@/Components/wishlist/Wishlist'
import { toast } from "react-toastify"

const Cart = () => {
      const dispatch = useDispatch()
        let navigate = useNavigate()
    

    const cart  = useSelector((state) => state.cartArray.value)
    const wishlistArray  = useSelector((state) => state.wishlistArray.value)
console.log(wishlistArray);

    console.log(cart);

    function deleteProduct(id) {
        dispatch( deleteToCart(id))
        WishlistToasterDelete()
        
        
    }


    
      function add(item) {
    
        let cartArr = wishlistArray.some((cart)=> cart.id == item.id)     
       
        
        
    
        if (  cartArr ){
productExistInWishlist()    
      
        }else{
     
        
      
          dispatch(addToWishlist(item))
          WishlistToaster()
        
        }
        
        
      }
          const WishlistToaster = () =>toast.success("added to wishlist  ", {
        position: "top-right",
        autoClose: 2000,
      });
      
          const WishlistToasterDelete = () =>toast.success("delete to wishlist  ", {
        position: "top-right",
        autoClose: 2000,
      });
      
          const productExistInWishlist = () =>toast.info("product exist in wishlist  ", {
        position: "top-right",
        autoClose: 2000,
      });
      
    

  return (
    <>
    <div>
        {cart.length !== 0 ?  
        <div className="container my-5 bg-light ">
        <h1 className='h1 my-4'> cart product : </h1>
        <div className="row">
                {cart?.map((item)=>

                <div key={item.id} className="col-md-12">
                    <div className="row">
                        <div className="col-md-3 ">
                            <img src={item.images} className='w-100' alt="" />                  
                        </div>
                        <div className="col-md-9">
                            <h2>{item.title}</h2>
                            <p> price : <span style={{color:"#0aad0a"}}>{item.price}</span> </p>
                            <p> Rating : <span style={{color:"#0aad0a"}}>{item.rating}</span> </p>
                 <button  onClick={()=>dispatch(add(item)) } className='btn  text-main-light  btn-sm mx-2    text-muted  '> <i className='fa fa-heart ' ></i> </button>

                   <button style={{backgroundColor:"#ad330a"}} className='btn w-25 btn-sm   text-light mt-2' onClick={()=> deleteProduct(item.id)}>delete</button>
                   <label htmlFor="checkout" className='ms-2'>add to checkout</label>
<input
id='checkout'
  type="checkbox"
  checked={item.selected}
  className="mx-4"
  onChange={() => dispatch(toggleSelect(item.id))}
/>
                            
                        </div>
                    </div>
                </div>
                )}
                <button onClick={()=>navigate("/checkout")}  style={{backgroundColor:"#0aad0a"}} className="btn w-100 btn-sm  mx-2  text-light mt-2">Checkout</button>
                </div>
            </div>

           : 
                   <div className="container my-5 bg-light ">
<h1>no product in cart .....</h1>
    </div>
            }
    </div>
    </>
  )
}

export default Cart
