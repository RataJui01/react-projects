const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = "https://api.spoonacular.com/recipes";

export async function getRandomRecipes() {
    const res = await fetch(`${API_URL}/random?apiKey=${API_KEY}&number=2`);

    if(!res.ok) {
        throw new Error("Failed to fetch recipes");
    }

    const data = await res.json();
    return data.recipes
}