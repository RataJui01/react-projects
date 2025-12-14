// const API_KEY = import.meta.env.VITE_API_KEY;
// const API_URL = "https://api.spoonacular.com/recipes";
const API_URL = "https://dummyjson.com/recipes";

export async function getRandomRecipes(limit = 0) {
  const res = await fetch(`${API_URL}?limit=${limit}`);

  if (!res.ok) {
    throw new Error("Failed to fetch recipes");
  }

  const data = await res.json();
  return data.recipes;
}
