import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Navbar from "./pages/Navbar";
import SingleProduct from "./pages/SingleProduct";
import { CartContext } from "./pages/CartContext";

import { useContext, useEffect, useState } from "react";

const App = () => {
  const [cart,setCart] = useState([]);
  //const {cart,setCart} = useContext(CartContext);
  useEffect (() => {
    const cart = window.localStorage.getItem('cart');
    setCart(JSON.parse(cart));
  },[])
  useEffect(() => {
    window.localStorage.setItem('cart',JSON.stringify(cart));
  },[cart]);
  
  return (
    <>
      <Router>
        <CartContext.Provider value={{cart,setCart}}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route exact path="/products/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartContext.Provider>
      </Router>
    </>
  );
};

export default App;