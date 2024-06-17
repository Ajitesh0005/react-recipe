import { useState } from "react";
import { MealCards } from "./mealcards";


export function MainPage() {

    const [search, setSearch] = useState('');
    const [msg, setMsg] = useState('');
    const [data, setData] = useState();

    function myFun() {
        if (search === '') { setMsg('Please Enter Something') }
        else {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
                .then(res => res.json())
                .then(data => setData(data.meals))
        }
        // console.log(data);
    }

    function handleInput(e) {
        setSearch(e.target.value)
    }

    return (
        <>
            <h1>Food Recipe App</h1>
            <div className="container">
                <div className="searchBar">
                    <input type="text" placeholder="Enter Dishe" onChange={handleInput} />
                    <button onClick={myFun}>Search</button>
                </div>
                <h4>{msg}</h4>
                <div>
                    <MealCards detail={data} />
                </div>
            </div>
        </>
    )
}