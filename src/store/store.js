import { configureStore } from "@reduxjs/toolkit";

import AddTocCartReducer  from "../features/addToCartSlice.js";
import AddTocWishlistReducer  from "../features/addToWishlistSlice.js";



export const store =configureStore({
    reducer :{
     
        cartArray : AddTocCartReducer,
        wishlistArray : AddTocWishlistReducer
    }
})