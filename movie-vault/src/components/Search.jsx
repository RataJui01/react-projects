import { FiSearch } from "react-icons/fi";

export default function Search() {
  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder="Search movies..."
        className="w-full pl-10 pr-4 py-2 bg-[#363939] border border-[#363939] rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
      <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
    </div>
  );
}
