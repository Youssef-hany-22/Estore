import { useState } from 'react'

// import viteLogo from '/vite.svg'
import './App.css'
import MyNav from './Components/Navbar/MyNav.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/home/home.jsx'
import AllProduct from './pages/product/AllProduct.jsx'
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import Cart from './Components/Cart/Cart.jsx'
import Wishlist from './Components/wishlist/Wishlist.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Checkout from './Components/Checkout/Checkout.jsx'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<div className="app-container">
      <Provider store={ store }>

        <BrowserRouter>
          <MyNav />

          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/home" element={ <Home /> } />
            <Route path="/product" element={ <AllProduct /> } />
            <Route path="/product/:id" element={ <ProductDetails /> } />
            <Route path="/cart" element={ <Cart /> } />
            <Route path="/wishlist" element={ <Wishlist /> } />
            <Route path="/checkout" element={ <Checkout /> } />
          </Routes>

        </BrowserRouter>
      </Provider>
          <ToastContainer />
</div>
          <Footer/>
  
    </>
  )
}

export default App
