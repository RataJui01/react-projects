import { useState } from "react";
import { IoSearch } from "react-icons/io5";

function SearchBar() {
    const [ingredients, setIngredient] = useState("");

    return (
        <div className="border-black border-2 rounded-4xl flex justify-center items-center gap-1 px-4 py-2 mt-6 w-[50%] bg-white md:py-3 lg:w-[40%]">
            <IoSearch className="text-2xl"/>
            <input 
                type="text" 
                placeholder="What is on your mind ?" 
                className="w-full outline-0" 
                value={ingredients} 
                onChange={e => setIngredient(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;   