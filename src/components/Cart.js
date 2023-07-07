import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const Cart = ()=>{
    const cartItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    const strMeal = "";
    const handleRemoveItem = (strMeal)=>{
        dispatch(removeItem(strMeal));
    }
    
    return (
        <div className="mt-28">CartItems
        <ul>
        {cartItems.map((item,index)=>(
           <li key={item.idMeal}>{index+1}- {item.strMeal}- Rs.{item.price}
           <button className="m-2 text-sm h-8 p-1 bg-orange-200 cursor-pointer"
            onClick={()=>handleRemoveItem(item.strMeal)}
           >
            Remove Item
            </button>
           </li>
        ))}
        </ul>
        <div>Total Items - {cartItems.length}</div>
        <div>Total Price - {cartItems.reduce((acc,currval)=>acc+currval.price,0)}</div>
        </div>
    )
}

export default Cart;