import { useContext } from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from './CartContext';

const Navbar = () => {
    const cartStyle = {
        backgroundColor:	'black',
        display:'flex',
        height:35,
        borderRadius: '50px',
        padding:'6px 22px',
       
       


    }
const {cart} = useContext(CartContext);
  return (
   
    <>
      <nav className='container mx-auto flex items-center items-top justify-between flex-row  py-4'>

  <Link to='/'>
    <img style={{height:65}} src='https://scontent.fhyd14-1.fna.fbcdn.net/v/t1.6435-9/46171524_2412089695472186_4464094097275092992_n.png?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HmjFEXkY22kAX-4g7SQ&_nc_ht=scontent.fhyd14-1.fna&oh=00_AfCi-vijH9GmLx8q7UJfyidBOyzyFmIwEFUIQUp9E_AGWg&oe=646A2637' alt='logo'/>
    </Link>  
<ul className='flex items-center'>
    <li className='ml-6'><Link to='/'>Home</Link></li>
    <li className='ml-6'><Link to='/products'>products</Link></li>
    <li className='ml-80 bg-slate-950 text-white rounded-full px-20'>No's items added {cart.totalItems}</li>
    <li className='mr-45'>

        <Link to='/cart'>
            <div className='place-self-auto ml-14'>
             
             
           <img style={cartStyle} src='data:image/png;base64,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' alt='cart-icon'/>
           
           </div>
           
        </Link>
    </li>
</ul>
      </nav>
    </>
  )
}

export default Navbar;

