import FavoriteItem from "./FavoriteItem";
import cover from "../assets/mock-movie-cover.png";

const mockFavs = [
  { id: 1, title: "Movie One", year: "2023", cover },
  { id: 2, title: "Movie Two", year: "2022", cover },
];

export default function FavoriteList() {
  return (
    <>
      <h1 className="font-DmSerif text-3xl font-bold text-white mb-6">
        Favorite Movies
      </h1>
      <div className="space-y-2">
        {mockFavs.map((m) => (
          <FavoriteItem key={m.id} movie={m} />
        ))}
      </div>
    </>
  );
}
