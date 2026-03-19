function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="text-6xl mb-6">🎬</div>
      <h2 className="text-2xl font-bold text-zinc-300 mb-2">
        No movies found
      </h2>
      <p className="text-zinc-500 max-w-sm">
        Try a different title or check your spelling. Great films are out
        there waiting.
      </p>
    </div>
  );
}

export default EmptyState;
