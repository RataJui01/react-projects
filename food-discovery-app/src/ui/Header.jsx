import { BsArrowLeft, BsBookmark } from "react-icons/bs";

function Header({ headerText, numberOfElement = 3 }) {
  return (
    <header
      className={`flex justify-between items-center p-6 gap-4 md:p-10 ${numberOfElement === 3 || "relative justify-center"}`}
    >
      <button
        className={`${numberOfElement === 3 || "absolute"} left-5 sm:left-7 md:left-10 flex justify-center items-center gap-2 text-sm cursor-pointer md:text-lg`}
      >
        <BsArrowLeft />
        Back
      </button>
      <h1
        className={`${numberOfElement === 3 || "relative left-6"} text-wrap text-center text-2xl md:text-4xl md:left-0 xl:text-5xl`}
      >
        Vegan Saucy Ramen Noodles
      </h1>

      {numberOfElement === 3 && (
        <button className="flex justify-center items-center gap-2 text-sm border-2 p-1 rounded-md cursor-pointer md:text-lg md:px-4">
          <BsBookmark />
          Saved
        </button>
      )}

      {/* {numberOfElement === 3 && <button>Add to Saved</button>} */}
    </header>
  );
}

export default Header;
