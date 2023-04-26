import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useContext(CartContext);
  console.log(cart);

  useEffect(() => {
    if (!cart.items) {
      return;
    }
    fetch('/api/v1/products.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cart.items)
    })
    .then(res => res.json())
    .then(product => {
      setProducts(product);
      console.log(product);
    })
  }, [cart]);

  const increment = (productId) => {
    const oldQty = cart.items[productId];
    const newQty = oldQty + 1;
    const newItems = { ...cart.items, [productId]: newQty };
    const newTotalItems = cart.totalItems + 1;
    const newCart = { items: newItems, totalItems: newTotalItems };
    setCart(newCart);
  }

  const decrement = (productId) => {
    const oldQty = cart.items[productId];
    if (oldQty === 1) {
      return;
    }
    const newQty = oldQty - 1;
    const newItems = { ...cart.items, [productId]: newQty };
    const newTotalItems = cart.totalItems - 1;
    const newCart = { items: newItems, totalItems: newTotalItems };
    setCart(newCart);
  }

  const getQty = (productId) => {
    return cart.items[productId];
  }

  return (
    <div className="container mx-auto lg:w-1/2 w-full pb-24">
      <div className="my-12 font-bold">Cart items</div>
      <ul>
        {
          products.map(product => (
            <li key={product.id}>
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <img className='h-16' src={product.image_link} />
                  <span className='font-bold ml-4 w-48'>{product.name}</span>
                </div>
                <div>
                  <button onClick={() => decrement(product.id)} className='bg-slate-950 px-4 py-2 rounded-full text-white leading-none'>-</button>
                  <b className='px-4'>{getQty(product.id)}</b>
                  <button onClick={() => increment(product.id)} className='bg-slate-950 px-4 py-2 rounded-full text-white leading-none'>+</button>
                </div>
                <span>${product.price}</span>
                <button className="bg-red-500 px-4 py-2 rounded-full leading-none text-white">Delete</button>
              </div>
            </li>
          ))
        }
      </ul>
      <hr className='py-6' />
      <div className='text-right'>
        <b> Grand Total:</b>
      </div>
      <div className='text-right mt-6'>
        <button className='bg-slate-950 text-white px-4 py-2 rounded-full leading-none'>Order now</button>
      </div>
    </div>
  )
}

export default Cart;
