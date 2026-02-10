import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, toggleSelect } from '@/features/addToCartSlice'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
const Checkout = () => {
    let navigate = useNavigate()
    const cartItems = useSelector((state) => state.cartArray.value);
    console.log(cartItems);
    

const selectedItems = cartItems.filter(item => item.selected);
console.log(selectedItems);

let dispatch = useDispatch()

  const totalPrice = selectedItems.reduce(
    (acc, item) => acc + item.price,
    0
  );

  const handleOrder = () => {
  success()
  dispatch(clearCart());
  navigate("/");
};
const handleSubmit = (e) => {
  e.preventDefault();   
  
};
  const success = () =>toast.success("Order placed successfully", {
                    position: "top-right",
                    autoClose: 2000,
                  });
  return (
       <div className="container mt-5">
      <h2>Checkout</h2>


{selectedItems.length != 0? <div>



          {selectedItems?.map((item, index) => (
        <div key={item.id} className="card p-2 mb-2">
          <h5>{item.title}</h5>
          <p>{item.price} EGP</p>
          <button style={{backgroundColor:"#ad330a"}} className='btn w-25 btn-sm   text-light mt-2' onClick={() => dispatch(toggleSelect(item.id))} >delete</button>

        </div>
      ))}
 <h3>Total: {totalPrice} EGP</h3>
 </div>       

 :<h1>no product selected</h1>
}

      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Name" />
        <input className="form-control mb-2" placeholder="Address" />
        <input className="form-control mb-2" placeholder="Phone" />

        <button type="button" onClick={()=>handleOrder()} className="btn btn-primary">Confirm Order</button>
      </form>
    </div>
  )
}

export default Checkout
