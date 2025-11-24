import { useEffect } from "react";

import Header from "../ui/Header";
import SearchBar from "../ui/SearchBar";

import { getRandomRecipes } from "../services/apiRecipes";

function Home() {
  useEffect(() =>{
    const controller = new AbortController();
    async function getRecipes() {
      try {
        const data = await getRandomRecipes();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }

    getRecipes();

    return () => {
      controller.abort();
    }
  },[]);

  return <div className="h-screen">
    <Header />
    <div className="h-[40vh] bg-red-100 flex flex-col justify-center items-center">
      <h1 className="text-2xl md:text-4xl lg:text-5xl">Which menu do you want to know ?</h1>
      <SearchBar />
    </div>
  </div>;
}

export default Home;
