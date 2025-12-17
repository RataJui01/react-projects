import { useState, useEffect } from "react";

import { getRandomRecipes } from "../services/apiRecipes";

import HomeMenuItem from "./HomeMenuItem";

function HomeMenuList({ searchIngredients }) {
  const [outputData, setOutputData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    async function getStarterFoods(limit = 0) {
      try {
        const data = await getRandomRecipes(limit);
        setOutputData(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }

    async function getFilteredData() {
      try {
        const data = await getRandomRecipes();
        const filteredData = data.filter((food) =>
          searchIngredients.some((searchIng) =>
            food.ingredients.some((foodIng) =>
              foodIng.toLowerCase().includes(searchIng.toLowerCase()),
            ),
          ),
        );
        setOutputData(filteredData);
      } catch (error) {
        console.log(error);
      }
    }

    if (searchIngredients.length === 0 || searchIngredients[0] === "") {
      getStarterFoods(10);
    } else {
      getFilteredData();
    }

    return () => {
      controller.abort();
    };
  }, [searchIngredients]);

  return (
    <ul className="list-none grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 pt-12 pb-12">
      {outputData.map((menu) => (
        <HomeMenuItem key={menu.id} menu={menu} />
      ))}
    </ul>
  );
}

export default HomeMenuList;
