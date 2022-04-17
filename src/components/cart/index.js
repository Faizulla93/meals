import { useSelector, useDispatch } from 'react-redux';
import { decr, incr, decrCart, incrCart, removeCart } from '../../store/actionCreators';

const Cart = ()=> {
    const data = useSelector(state=> state.cart);
    const dispatch = useDispatch();
    const hanldeDecrement = (item)=>{
        dispatch(decr(item.id));
        dispatch(decrCart(item));
    }
    const handleIncrement = (item)=>{
        dispatch(incr(item.id));
        dispatch(incrCart(item));
    }
    const handleDelete = (item) => {
        dispatch(removeCart(item))
    }
    return(
        (data.length === 0)? (<><div className="container">
        <h3>The cart is empty!</h3></div></>): 
        <>
        <div className="title-wrap">
               </div>
        <ul className="list">
                {data.map(item => {
                    return (
                        <li key={item.id} className="list-item">
                            <img className="list-image" src={item.thumbNail} alt="images" />
                        <span className="list-item-title">{item.name}</span>
                        <div className="list-item-last-row">
                            <span className="list-item-price">
      {(item.quantity > 0) ? item.price*item.quantity : item.price} RUB
                            </span>
                    <div className="cart-add">
                        <div onClick={()=> hanldeDecrement(item)} className="square">-</div>
                        {item.quantity}
                        <div onClick={()=> handleIncrement(item)} className="square">+</div>
                    </div>
                        </div>
                        <button
                    onClick={()=> handleDelete(item)} className="btn btn-danger">Delete</button>  
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Cart;