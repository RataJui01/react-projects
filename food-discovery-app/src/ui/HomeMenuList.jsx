import { useState, useEffect } from "react";

import { getRandomRecipes } from "../services/apiRecipes";

import HomeMenuItem from "./HomeMenuItem";

function HomeMenuList() {
  const [starterMenu, setStarterMenus] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    async function getRecipes(limit) {
      try {
        const data = await getRandomRecipes(limit);
        setStarterMenus(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }

    getRecipes(6);

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <ul className="list-none grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 pt-12 pb-12">
      {starterMenu.map((menu) => (
        <HomeMenuItem key={menu.id} menu={menu} />
      ))}
    </ul>
  );
}

export default HomeMenuList;
