import { createSlice } from "@reduxjs/toolkit";




export const addToCardSlicer = createSlice({
    name : "cartArray",
    initialState :{
        value: [],
    },
    reducers:{
        addToCart:(state , action) =>{
            state.value.push({ ...action.payload, selected: false })

},
        deleteToCart: (state , action) => {
                  state.value = state.value.filter(item => item.id !== action.payload);

            
     
    },clearCart :(state) =>{
        state.value=[]
    },toggleSelect: (state, action) => {
  const product = state.value.find(
    (item) => item.id === action.payload
  );

  if (product) {
    product.selected = !product.selected;
  }
}
    
    }
})
export const{addToCart ,deleteToCart  , clearCart , toggleSelect} = addToCardSlicer.actions
export default addToCardSlicer.reducer