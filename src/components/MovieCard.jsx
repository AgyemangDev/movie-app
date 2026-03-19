const PLACEHOLDER_IMAGE =
  "https://via.placeholder.com/300x445/1a1a2e/amber?text=No+Poster";

function MovieCard({ movie }) {
  const { Title, Year, Type, Poster, imdbID } = movie;
  const posterSrc = Poster !== "N/A" ? Poster : PLACEHOLDER_IMAGE;

  return (
    <a
      href={`https://www.imdb.com/title/${imdbID}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-400/10"
    >
      {/* Poster */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={posterSrc}
          alt={`${Title} poster`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-80" />

        {/* Type badge */}
        <div className="absolute top-3 right-3">
          <span className="text-[10px] uppercase tracking-widest font-mono bg-black/60 backdrop-blur-sm text-amber-300 border border-amber-400/30 rounded-full px-2.5 py-1">
            {Type}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-bold text-white text-sm leading-snug line-clamp-2 group-hover:text-amber-300 transition-colors duration-200">
          {Title}
        </h3>
        <p className="text-zinc-500 text-xs mt-1 font-mono">{Year}</p>
      </div>

      {/* Hover glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-rose-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </a>
  );
}

export default MovieCard;
