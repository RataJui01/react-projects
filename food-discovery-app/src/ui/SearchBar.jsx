import { IoSearch } from "react-icons/io5";

function SearchBar({
  inputValue,
  onSetInputValue,
  searchIngredients,
  setSearchIngredients,
}) {
  function handleAddIngredient() {
    const ingredientArray = inputValue.split(",").map((item) => item.trim());
    setSearchIngredients(ingredientArray);
  }

  console.log(searchIngredients);

  return (
    <div className="border-black border-2 rounded-4xl flex justify-center items-center gap-1 px-4 py-2 mt-6 w-[50%] bg-white md:py-3 lg:w-[40%]">
      <IoSearch className="text-2xl" />
      <input
        type="text"
        placeholder="Ex. mushroom, tomato, cheese, flour"
        className="w-full outline-0"
        value={inputValue}
        onChange={(e) => onSetInputValue(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleAddIngredient()}
      />
    </div>
  );
}

export default SearchBar;
