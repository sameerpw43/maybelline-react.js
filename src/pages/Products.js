import { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import Product from './Product';
import { CartContext } from './CartContext';

const Products = () => {
  const [products, setProducts] = useState([]);

  const { cart, setCart } = useContext(CartContext);

  const addToCart = (e, product) => {
    e.preventDefault();
    let _cart = { ...cart };
    if (!_cart.items) {
      _cart.items = {};
    }
    if (_cart.items[product._id]) {
      _cart.items[product._id] += 1;
    } else {
      _cart.items[product._id] = 1;
    }
    if (!_cart.totalItems) {
      _cart.totalItems = 0;
    }
    _cart.totalItems += 1;
    setCart(_cart);
  };

  const [isAdding, setIsAdding] = useState({});

  const handleIsAdding = (id, value) => {
    setIsAdding((prev) => ({ ...prev, [id]: value }));
  };

  useEffect(() => {
    fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
    )
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
        console.log(products);
      });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-24">
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`}>
            <div className="flex justify-center">
              <img src={product.image_link} alt={product.name} />
            </div>
            <div className="text-center">
              <h2 className="text-lg font-bold">{product.name}</h2>
              <span className="block text-gray-500 text-sm">
                {product.category}
              </span>
              <div className="font-bold text-yellow-500 mt-2">
                ${product.price}
              </div>
            </div>
            <div className="flex items-center  justify-center">
              <button
                className={`${
                  isAdding[product.id]
                    ? "bg-green-500"
                    : "bg-slate-950"
                } py-1 px-4 text-white rounded-full font-bold`}
                disabled={isAdding[product.id]}
                onClick={(e) => {
                  addToCart(e, product);
                  handleIsAdding(product.id, true);
                  setTimeout(() => {
                    handleIsAdding(product.id, false);
                  }, 1000);
                }}
              >
                {isAdding[product.id] ? "ADDED" : "ADD"}
              </button>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
