interface MovieProps {
  params: {
    id: string;
  };
}

export default async function MovieDetail({ params }: MovieProps) {
  const API_KEY = process.env.TMDB_API_KEY;
  const movieId = params.id;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );

  const movie = await res.json();

  return (
    <div className="text-white p-6 space-y-6">

      {/* Banner */}
      <div
        className="w-full h-80 md:h-96 bg-cover bg-center rounded-xl flex items-end p-6"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      >
        <div className="bg-black/50 p-4 rounded-lg">
          <h1 className="text-4xl font-bold">{movie.title}</h1>
        </div>
      </div>

      {/* Details Section */}
      <div className="flex flex-col md:flex-row gap-10">

        {/* Movie Poster */}
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-60 rounded-lg"
        />

        {/* Movie Info */}
        <div className="space-y-4">
          <p className="text-lg text-gray-300">{movie.overview}</p>

          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Rating:</strong> ⭐ {movie.vote_average}</p>
          <p><strong>Runtime:</strong> {movie.runtime} mins</p>

          <div>
            <strong>Genres:</strong>{" "}
            {movie.genres?.map((g: any) => g.name).join(", ")}
          </div>
        </div>
      </div>

    </div>
  );
}