import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
          .then(() => {})
          .catch((error) => console.log(error));
      };

    const navOptions = <>

    <li><Link to="/">Home</Link></li>
    <li><Link to="/shops">Our Shops</Link></li>
    <li><Link to="/create-shop/book">Add to Cart</Link></li>
    <li><Link to="/"><button className="btn"><FaShoppingCart></FaShoppingCart><div className="badge badge-secondary">{cart.length}</div></button></Link></li>
    

    {
        user ? <>
         <span>{user?.displayName} </span>
          <img className="w-10 rounded-full mr-4"  src={user?.photoURL} alt="" />
         <button onClick={handleLogOut} className="btn btn-active btn-ghost">
        Logout
      </button></> : <><li><Link to="/login">Login</Link></li></>

    }
   
    </>


    return (
        <>
          <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl text-white bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navOptions}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">ShopHub</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
    <a href="https://www.youtube.com/watch?v=Q52Zcq09Hrg" target="_blank" rel="noopener noreferrer"  className="btn">Watch Demo</a>
  </div>
</div>  
        </>
    );
};

export default Navbar;