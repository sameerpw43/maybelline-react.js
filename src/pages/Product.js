import { Link } from "react-router-dom";

const Product = (props) => {
  const { product } = props;
  return (
    <Link to={`/products/${product.id}`}>

    <div className="flex flex-col items-center justify-center space-y-4">
      <img src={product.image_link} alt="image-icon" className="rounded-lg"/>
      <div className="text-center">
        <h2 className="text-lg font-bold">{product.name}</h2>
        <span className="block text-gray-500 text-sm">{product.category}</span>
        <span className="block text-yellow-600 font-bold">{product.price}$</span>
      </div>
      <div className="flex items-center">
        <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold">ADD</button>
      </div>
    </div>
    </Link>
  );
};





export default Product;
