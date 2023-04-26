import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";



const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  useEffect(() => {
    fetch(`http://makeup-api.herokuapp.com/api/v1/products/${id}.json`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="container mx-auto mt-12">
      <button className="mb-12 font-bold" onClick={handleClick}> &#8592;Back</button>
      <div className="flex">
        <img src={product.image_link} alt="icon" />
        <div className="ml-16">
          <h1 className="text-xl font-bold">{product.name}</h1>
          <div className="text-md"></div>
          <div className="block text-yellow-600 font-bold">${product.price}</div>
          <button className="bg-gray-900 py-1 px-8 text-white rounded-full font-bold mt-4">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
