function Footer() {
  return (
    <footer className="relative z-10 text-center py-8 border-t border-zinc-800/60 mt-16">
      <p className="text-zinc-600 text-sm">
        Created by{" "}
        <a
          href="https://linktr.ee/agyemang166"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-400 hover:text-amber-300 transition-colors duration-200 font-medium"
        >
          AgyemangDev
        </a>{" "}
        · Powered by{" "}
        <a
          href="https://www.omdbapi.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-zinc-300 transition-colors duration-200"
        >
          OMDb API
        </a>
      </p>
    </footer>
  );
}

export default Footer;
