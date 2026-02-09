import { createSlice } from "@reduxjs/toolkit";




export const addToWishlistSlice = createSlice({
    name : "wishlistArray",
    initialState :{
        value: [],
    },
    reducers:{
        addToWishlist:(state , action) =>{
            state.value.push(action.payload)

},
        deleteToWishlist: (state , action) => {
                  state.value = state.value.filter(item => item.id !== action.payload);

            
     
    }
    
    }
})
export const{addToWishlist ,deleteToWishlist } = addToWishlistSlice.actions
export default addToWishlistSlice.reducer