import Header from "../ui/Header";
import SearchBar from "../ui/SearchBar";
import HomeMenuList from "../ui/HomeMenuList";

function Home() {
  return (
    <div className="h-screen">
      <Header />
      <div className="h-[40vh] bg-red-100 flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl">
          Which menu do you want to know ?
        </h1>
        <SearchBar />
      </div>
      <HomeMenuList />
    </div>
  );
}

export default Home;
