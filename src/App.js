import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Meals from './components/meals';
import MealsList from './components/meals/mealList';
import Cart from './components/cart';
import MealInfo from './components/meals/mealInfo';
const App = () => {
   const data = useSelector(state=> state.meals);
   const desc = useSelector(state=> state.desc);
   const hotDishes = data.filter(elem => (elem.category === "hotDishes"));
   const soups = data.filter(elem => (elem.category === "soups"));
   const salads = data.filter(elem => (elem.category === "salads"));
   const desserts = data.filter(elem => (elem.category === "desserts"));
    return(
        <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/hot-dishes" element={<MealsList data={hotDishes} title={"Hot Dishes"} />}/>
                <Route path="/soups" element={<MealsList data={soups} title={"Soups"} />}/>
                <Route path="/salads" element={<MealsList data={salads} title={"Salads"} />}/>
                <Route path="/desserts" element={<MealsList data={desserts} title={"Desserts"} />}/>
                <Route path="/cart" element={<Cart />}/>
                <Route path="/desc" element={<MealInfo item={desc} />}/>
                <Route path="/" element={<Meals />} />
                </Routes>
               </BrowserRouter>
       </>
        
    )
}

export default App;