import Products from "./Products";
import {Link} from 'react-router-dom'

const Home = () => {
return (
    <>
    <div className="hero py-16">
        <div className="container mx-auto flex items-center justify-between">
            <div className="w-1/2">
              <h6 className="text-lg"><em> If you're sad, add more lipstick and attack</em></h6> 
              <h1 className="text-3xl md:text-6xl font-bold">Don't Wait!</h1> 
              <button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-gray-900 hover:bg--950">Order now</button>
            </div>
            <div >
                <Link>
                <img className="w-4/5" src ='https://media.istockphoto.com/id/1408439145/photo/autumn-skincare-and-autumn-makeup-concept-with-beauty-products-on-table.jpg?s=1024x1024&w=is&k=20&c=UOOXsTxVaf3hGdht0032thVCpo2x8fZmttXLZzfAuKA=' alt="icon"/>
                </Link>
            </div>
        </div>
    </div>
    <div className="pb-24">
        <Products/>
    </div>
    </>
)
}
export default Home;