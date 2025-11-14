// components/Hero.tsx

interface HeroProps {
  movie: any;
}

export default function Hero({ movie }: HeroProps) {
  return (
    <div
      className="w-full h-80 md:h-96 bg-cover bg-center rounded-xl flex items-end p-6"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <div className="bg-black/50 p-4 rounded-lg max-w-xl">
        <h1 className="text-3xl font-bold">{movie.title}</h1>
        <p className="text-sm mt-2">{movie.overview}</p>
      </div>
    </div>
  );
}