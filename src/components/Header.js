import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");
  const isOnline = useOnline();
  const {user,setUser} = useContext(UserContext);
  const cartItems = useSelector(store => store.cart.items);
  console.log(user);
    return(
        <div className="h-24 flex fixed top-0 left-0 right-0
        bg-orange-50 z-0 justify-around
        border border-solid border-amber-800 px-4">
          <div className="logo-container">
            <img className ="w-24"
              src= {LOGO_URL}
             /> 
          </div>
          <div className="nav-items">
           <ul className="text-xl flex">
            <Link to="/"><li className="p-3 m-5">Home</li></Link>
            <Link to="/about"><li className="p-3 m-5">About Us</li></Link>
            <Link to="/contact"><li className="p-3 m-5">Contact Us</li></Link>
            <Link to="/cart"><li className="p-3 m-5">Cart - {cartItems.length}</li></Link>
            <Link to="/instamart"><li className="p-3 m-5">Instamart</li></Link>
            <Link to="/todo"><li className="p-3 m-5">ToDo</li></Link>
            <h3 className="mt-9">{isOnline?"🟢":"🔘"}</h3>
            <h3 className="mt-9 txt-sm" >{user.name}-{user.email}</h3>
            <button className="w-20 h-10 m-5 p-3 text-xl"
            onClick={()=>{
              btnLogin == "Login"? setBtnLogin("Logout"): setBtnLogin("Login");
            }}
            >{btnLogin}</button>
           </ul>
          </div>
        </div>
    );
};

export default Header;