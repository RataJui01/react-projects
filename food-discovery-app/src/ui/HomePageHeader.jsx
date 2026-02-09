import { BsBookmark } from "react-icons/bs";

function Header() {
  return (
    <header className="flex justify-between items-center p-6 md:p-10">
      <div className="brand-wrapper flex items-center gap-4">
        <h1 className="font-accent text-3xl md:text-4xl">TasteTrial</h1>
        <span className="font-primary bg-green-200 h-fit py-1 px-4 text-xs md:text-sm px-6">
          Food Discovery App
        </span>
      </div>

      <button className="flex justify-center items-center gap-1 cursor-pointer text-sm md:text-lg">
        <BsBookmark />
        Saved
      </button>
    </header>
  );
}

export default Header;
