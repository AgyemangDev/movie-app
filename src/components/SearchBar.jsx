function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function SearchBar({ value, onChange, onSearch }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") onSearch();
  };

  return (
    <div className="relative flex items-center">
      {/* Input */}
      <input
        type="text"
        placeholder="Search for a movie, series, episode..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full bg-zinc-900 border border-zinc-700 focus:border-amber-400/60 text-white placeholder-zinc-500 rounded-2xl pl-6 pr-36 py-4 text-sm outline-none transition-all duration-200 focus:shadow-[0_0_0_3px_rgba(251,191,36,0.1)]"
      />

      {/* Search button */}
      <button
        onClick={onSearch}
        disabled={!value.trim()}
        className="absolute right-2 flex items-center gap-2 bg-amber-400 hover:bg-amber-300 disabled:opacity-40 disabled:cursor-not-allowed text-black font-semibold text-sm rounded-xl px-5 py-2.5 transition-all duration-200 active:scale-95"
      >
        <SearchIcon />
        Search
      </button>
    </div>
  );
}

export default SearchBar;
