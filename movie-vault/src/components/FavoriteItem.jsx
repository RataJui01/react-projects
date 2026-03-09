export default function FavoriteItem({ movie }) {
  return (
    <div className="flex items-center space-x-2 p-2 bg-white rounded shadow">
      <img
        src={movie.cover}
        alt={movie.title}
        className="w-12 h-16 object-cover rounded"
      />
      <div>
        <h4 className="text-sm font-medium">{movie.title}</h4>
        <p className="text-xs text-gray-500">{movie.year}</p>
      </div>
    </div>
  );
}
