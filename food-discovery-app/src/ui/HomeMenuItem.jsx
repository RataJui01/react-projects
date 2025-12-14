import { FaRegHeart } from "react-icons/fa";

function HomeMenuItem({ menu }) {
  return (
    <li className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden cursor-pointer">
      <img
        src={menu.image}
        alt={menu.name}
        className="w-full h-48 object-cover"
      />
      <div className="flex items-center justify-between p-4">
        <p className="text-sm font-medium text-gray-800">{menu.name}</p>
        <FaRegHeart className="text-gray-400 hover:text-red-500 cursor-pointer transition" />
      </div>
    </li>
  );
}

export default HomeMenuItem;
