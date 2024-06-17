import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export function MealInfo() {
    const { mealid } = useParams();
    // console.log(mealid);
    const [info, setInfo] = useState();

    const getInfo = async () => {
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
        const jsonData = await get.json();
        // console.log(jsonData.meals[0]);
        setInfo(jsonData.meals[0])
    }

    useEffect(() => {
        if (info !== "") { getInfo() }
    }, [])

    return (
        <div>
            {
                !info ? 'Data Not Found' :
                    <div className="mealInfo">
                        <img src={info.strMealThumb} alt="" />
                        <div className="info">
                            <h2>Recipe Details</h2>
                            <button>{info.strMeal}</button>
                            <h3>Instructions to Follow</h3>
                            <p>{info.strInstructions}</p>
                        </div>
                    </div>
            }
        </div>
    )
}