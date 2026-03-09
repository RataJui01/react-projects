import MovieItem from "./MovieItem";
import cover from "../assets/mock-movie-cover.png";

const mockMovies = [
  { id: 1, title: "Movie One", year: "2023", cover },
  { id: 2, title: "Movie Two", year: "2022", cover },
  { id: 3, title: "Movie Three", year: "2021", cover },
  { id: 4, title: "Movie Four", year: "2020", cover },
  { id: 5, title: "Movie Five", year: "2019", cover },
];

export default function MovieList() {
  return (
    <>
      <h1 className=" font-DmSerif text-3xl font-bold text-white mb-6">
        Movies list
      </h1>
      <div
        className="grid gap-4 grid-cols-1
      md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1"
      >
        {mockMovies.map((m) => (
          <MovieItem key={m.id} movie={m} />
        ))}
      </div>
    </>
  );
}
