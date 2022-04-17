import { useDispatch } from 'react-redux';
import { incr, decr, addCart } from '../../store/actionCreators';
import { Link } from 'react-router-dom';
const MealsList = ({ data, title })=> {
    const dispatch = useDispatch();
    const handleAddCart = (item) => {
        if(item.quantity === 0) return;
        dispatch(addCart(item));
    }
    const handleInfo = (item)=> {
        dispatch({type: "DESC", element: item});
    }
    
    return (
        (data.length === 0)? null: 
        <>
        <div className="title-wrap">
        <h3>{ title }</h3></div>
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
                        <div onClick={()=> dispatch(decr(item.id))} className="square">-</div>
                        {item.quantity}
                        <div onClick={()=> dispatch(incr(item.id))} className="square">+</div>
                    </div>
                        </div>
                       <Link to="/desc" onClick={()=> handleInfo(item)} className="btn btn-info info">More</Link>
                    <button
                    onClick={()=> handleAddCart(item)} className="btn btn-secondary">Add to cart</button>
                      
                        </li>
                    )
                })}
            </ul> 
        </>
    )
}
export default MealsList;