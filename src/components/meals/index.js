import './style.css';
import MealsList from './mealList';
import SearchPanel from '../search-panel';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
const Meals = ()=> {
    useEffect(()=>{
    const topBtn = document.querySelector('.top');
    topBtn.addEventListener('click', scrollTop);
    function scrollTop (){
        window.scrollTo({top: 0})
    }
    window.addEventListener('scroll', ()=> {
        if(window.pageYOffset >= 400) {
            topBtn.style.display = 'block';
        }
        else {
            topBtn.style.display = 'none';
        }
    })
    })
    const data = useSelector(state => state.meals);
    const hotDishes = data.filter(elem => (elem.category === "hotDishes"));
    const soups = data.filter(elem => (elem.category === "soups"));
    const salads = data.filter(elem => (elem.category === "salads"));
    const desserts = data.filter(elem => (elem.category === "desserts"));
    return (
        <>
        <div className="container">
            <SearchPanel />
            <div className="list-wrapper">
                {(data.length === 0) ? (<h2>Not found!</h2>):
            <><MealsList data={hotDishes} title="Hot dishes" />
            <MealsList data={soups} title="Soups" />
            <MealsList data={salads} title="Salads" />
            <MealsList data={desserts} title="Desserts" /></>}
            </div>
            <button className="btn btn-dark top">Top</button>
         </div>
         </>
    )
}

export default Meals;