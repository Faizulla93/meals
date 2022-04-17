import { Link } from "react-router-dom";

const MealInfo = ({item})=> {
    return (
        <>
        <div className="container">
        <div className="list-wrap">
        <img className="list-image-small" src={item.thumbNail} alt="images" />
        <div className="list-info-desc">
        {item.description}</div>
        <Link to="/"><button className="btn btn-close close"></button></Link>
        </div>
        </div>
        </>
    )
}

export default MealInfo;