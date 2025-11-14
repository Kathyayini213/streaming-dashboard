import Hero from "./components/Hero";
import MovieRow from "./components/MovieRow";

export default async function Home() {
  const API_KEY = process.env.TMDB_API_KEY;
  console.log("API Key:", API_KEY);
  

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
    { next: { revalidate: 3600 } }
  );

  const data = await res.json();
  const movies = data.results;

  const heroMovie = movies[0];          // First movie → Hero
  const restMovies = movies.slice(1);   // Remaining movies → Movie rows

  return (
    <div className="text-white p-6 space-y-10">

      {/* ⭐ HERO BANNER */}
      <Hero movie={heroMovie} />

      {/* ⭐ HORIZONTAL MOVIE ROWS */}
      <MovieRow title="Trending Now" movies={restMovies} />

      <MovieRow title="Top Picks for You" movies={restMovies.slice(0, 10)} />

      <MovieRow title="New Releases" movies={restMovies.slice(10, 20)} />

    </div>
  );
}