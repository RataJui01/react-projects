import { useEffect, useState } from "react";

import { getRandomRecipes } from "../../services/apiRecipes";

import MealCard from "./MealCard";

function Meal(){
    const [mealData, setMealData] = useState([]);

    useEffect(() => {
        const controller = new AbortController();
        async function getMeals(){
            try {
                const data = await getRandomRecipes();
                console.log(data);
                setMealData(data);
            } catch (error) {
                console.error(error);
            }
        }

        getMeals();

        return () => {
            controller.abort();
        }
    },[]);

    return <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
        {mealData.map((food) => <MealCard food={food} key={food.id}/>)}
    </ul>
}

export default Meal;