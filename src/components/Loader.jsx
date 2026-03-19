function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-4">
      <div className="w-10 h-10 rounded-full border-2 border-zinc-700 border-t-amber-400 animate-spin" />
      <p className="text-zinc-500 text-sm font-mono tracking-widest uppercase">
        Searching...
      </p>
    </div>
  );
}

export default Loader;
