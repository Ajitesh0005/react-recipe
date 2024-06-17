import { NavLink } from "react-router-dom";

export function MealCards({ detail }) {
    // console.log(detail);

    return (
        <div className="meals">
            {
                !detail ? "" : detail.map((curItem) => {
                    // console.log(curItem);
                    return (
                        <div className="mealImg" key={curItem.idMeal}>
                            <img src={curItem.strMealThumb} alt="" />
                            <p>{curItem.strMeal}</p>
                            <NavLink to={`/${curItem.idMeal}`}><button>Recipe</button></NavLink>
                        </div>
                    )
                })
            }
        </div>
    )
}