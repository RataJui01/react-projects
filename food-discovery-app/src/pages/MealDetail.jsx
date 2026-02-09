import { useEffect, useState } from "react";

import { getSingleRecipe } from "../services/apiRecipes";
import Header from "../ui/Header";

function MealDetail() {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    async function getRecipe(mealName) {
      try {
        const data = await getSingleRecipe(mealName);
        setRecipe(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }

    getRecipe("Chicken Alfredo Pasta");

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
}

export default MealDetail;
