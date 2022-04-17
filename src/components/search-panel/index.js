import './search.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { search } from '../../store/actionCreators';
import getData from '../../store/data';
const SearchPanel = () => {
    const data = getData();
    const [term, setTerm] = useState("");
    const dispatch = useDispatch();
  
    const handleChange = (e)=> {
        const value = e.target.value;
        setTerm({ term: value });      
    }
    const handleSearch = ()=> {
            let result;
            if(term === "") return result = data;
            result = data.filter(item => (item.name.toLowerCase().includes(term.term.toLowerCase())) ? item : null);
            if(result.length === 0){
                result = [];
            }
            dispatch(search(result))
    }
    return (
        <>
        <div className="container">
        <div className="search-panel-wrapper">
            <span className="search-title">
            Eastern kitchen the most delicious meals
            </span>
            <div className="search-form">
                <input type="text" className="input-field"
                onChange={(e)=> handleChange(e)} >
                </input><button onClick={handleSearch} className="btn-search">Search</button>
            </div>
            </div>  
        </div>
        </>
    )
}

export default SearchPanel;