import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiClock, FiFilm, FiUser, FiGlobe } from "react-icons/fi";

export default function MovieItem({ movie }) {
  const {
    cover,
    title,
    time = "120 Minutes",
    genre = "Sci-fi",
    director = "Pathanin",
    star = "Impact",
    country = "USA",
    rating = 8.0,
    description = "Lorem ipsum dolor sit amet consectetur. Mi massa malesuada lorem cursus consectetur morbi cras habitasse purus. Bibendum ullamcorper scelerisque quam consectetur a.",
    liked = false,
  } = movie;

  return (
    <div className="bg-[#363939] rounded-lg shadow overflow-hidden flex flex-col lg:flex-row p-4 sm:p-6 h-full">
      {/* cover & overlay buttons */}
      <div className="w-full h-full relative mb-4 sm:w-full lg:h-full lg:w-fit lg:mb-0">
        <img
          src={cover}
          alt={title}
          className="rounded-md w-full h-full sm:w-full sm:max-h-107.5 md:w-full md:h-full object-cover lg:max-h-98.5 lg:max-w-73.75"
        />
        <button className="absolute top-2 left-2 text-black bg-white rounded-full p-2">
          {liked ? <AiFillHeart size={20} /> : <AiOutlineHeart size={20} />}
        </button>
      </div>

      {/* details */}
      <div className="p-4 flex-1 text-white flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <h3 className="font-bold mb-3 font-DmSerif text-2xl sm:text-3xl">
            {title}
          </h3>
          <div className="flex flex-col items-center gap-2">
            <div className="bg-[#1F2223] text-yellow-400 px-3 py-1 sm:px-4 border-2 border-[#EFD12A] rounded text-sm sm:text-base">
              <span className="font-semibold font-Poppins text-sm sm:text-base">
                {rating.toFixed(1)}
              </span>
            </div>
            <span className="text-sm ml-1 font-Poppins font-semibold text-[#EFD12A]">
              IMdb
            </span>
          </div>
        </div>

        <ul className="space-y-1 mb-3 text-xs sm:text-sm">
          <li className="flex items-center text-sm mb-4 font-Poppins">
            <FiClock className="mr-2 text-lg text-[#EFD12A]" /> {time}
          </li>
          <li className="flex items-center text-sm mb-4 font-Poppins">
            <FiFilm className="mr-2 text-lg text-[#EFD12A]" /> Genre : {genre}
          </li>
          <li className="flex items-center text-sm mb-4 font-Poppins">
            <FiUser className="mr-2 text-lg text-[#EFD12A]" /> Director :{" "}
            {director}
          </li>
          <li className="flex items-center text-sm mb-4 font-Poppins">
            <FiUser className="mr-2 text-lg text-[#EFD12A]" /> Star : {star}
          </li>
          <li className="flex items-center text-sm mb-4 font-Poppins">
            <FiGlobe className="mr-2 text-lg text-[#EFD12A]" /> Country :{" "}
            {country}
          </li>
        </ul>
        <p className="text-xs sm:text-sm leading-relaxed font-Poppins">
          {description}
        </p>
      </div>
    </div>
  );
}
