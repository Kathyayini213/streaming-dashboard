// components/MovieRow.tsx
import Link from "next/link";

interface MovieRowProps {
  title: string;
  movies: any[];
}

export default function MovieRow({ title, movies }: MovieRowProps) {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-semibold">{title}</h2>

      <div className="flex overflow-x-auto space-x-4 scrollbar-hide py-2">
        {movies.map((movie) => (
          <Link key={movie.id} href={`/movie/${movie.id}`}>
            <div
              className="min-w-[150px] bg-gray-800 p-2 rounded-lg hover:scale-105 transition cursor-pointer"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full rounded-md"
              />
              <p className="text-sm mt-2">{movie.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}