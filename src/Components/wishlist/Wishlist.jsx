import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist, deleteToWishlist } from '@/features/addToWishlistSlice'
import { addToCart } from '@/features/addToCartSlice'
import { toast } from 'react-toastify'

const Wishlist = () => {
    const cart  = useSelector((state) => state.cartArray.value)
    const wishlistArray  = useSelector((state) => state.wishlistArray.value)
  const dispatch = useDispatch()


    function deleteProduct(id) {
        dispatch( deleteToWishlist(id))
        // dispatch( decrement(    ))
        
    }
        function deleteProduct(id) {
            dispatch( deleteToWishlist(id))
            dispatch( decrementWishlist(    ))
            
        }
    
        function add(item) {
          
              let cartArr = cart.some((cart)=> cart.id == item.id)     
             
              
              
          
              if (  cartArr ){
  
    exist()
            
              }else{
           
              
            
                dispatch(addToCart(item))
                 cartToaster()
              
              }
              
    

            }


                      const cartToaster = () =>toast.success("added to wishlist  ", {
                    position: "top-right",
                    autoClose: 2000,
                  });

                      const exist  = () =>toast.info("product are already exist  ", {
                    position: "top-right",
                    autoClose: 2000,
                  });


    return (
  <>
    <div>
     {wishlistArray.length !== 0 ?  
        <div  className="container my-5 bg-light ">
        <h1 className='h1 my-4'> wishlist  product : </h1>
                {wishlistArray?.map((item)=>
            <div key={item.id} className="row">

                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-3 ">
                            <img src={item.images} className='w-100' alt="" />                  
                        </div>
                        <div className="col-md-9">
                            <h2>{item.title}</h2>
                            <p> price : <span style={{color:"#0aad0a"}}>{item.price}</span> </p>
      <p><i className='fas fa-star text-warning me-1' ></i>  :  {item.rating}</p>
                   </div>                            <button style={{backgroundColor:"#0aad0a"}} className='btn w-25 mx-2 btn-sm  text-light mt-2' onClick={()=>dispatch(add(item))}>cart </button>
                            <button style={{backgroundColor:"#ad330a"}} className='btn w-25 btn-sm   text-light mt-2' onClick={()=> deleteProduct(item.id)}>delete</button>

                        </div>
                    </div>
                </div>
                </div>
                )}
            </div>

      
           : 
                   <div className="container my-5 bg-light ">
<h1>no product in wishlist .....</h1>
    </div>
            }
    </div>
    </>
  )
}

export default Wishlist
