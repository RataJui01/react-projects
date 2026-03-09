import MovieList from "./MovieList";
import FavoriteList from "./FavoriteList";

export default function Main() {
  return (
    <main className="p-4 flex flex-col lg:flex-row lg:space-x-6">
      <section className="flex-1">
        <MovieList />
      </section>
      <aside className="mt-6 lg:mt-0 lg:w-1/3">
        <FavoriteList />
      </aside>
    </main>
  );
}
