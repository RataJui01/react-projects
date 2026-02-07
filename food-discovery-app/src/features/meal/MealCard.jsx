import { FaRegHeart } from "react-icons/fa";

function MealCard({food}){
    return <li className="cursor-pointer">
        <img className="rounded-2xl w-full" src={food.image} alt={food.title}/>
        <div className="flex justify-between items-baseline mt-3">
            <h3>{food.title}</h3>
            <FaRegHeart className="cursor-pointer"/>
        </div>
    </li>
}

export default MealCard;