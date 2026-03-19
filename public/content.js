const CONTENT = {
  name: "AgyemangDev",
  title: "Senior Frontend Developer",
  tagline: "I build interfaces people remember.",
  bio: `I'm a senior frontend engineer with a passion for crafting fast, 
    accessible, and visually compelling web experiences. I care deeply about 
    clean architecture, thoughtful UI decisions, and code that other developers 
    actually enjoy working with.`,
  location: "Based in Accra, Ghana · Available worldwide",
  email: "hello@agyemangdev.com",
  links: {
    github:   "https://github.com/agyemang166",
    linktree: "https://linktr.ee/agyemang166",
  },

  skills: [
    { category: "Frontend",   items: ["React", "JavaScript (ES2024+)", "HTML5 & CSS3", "CSS Modules", "Responsive Design"] },
    { category: "Tooling",    items: ["Vite", "Webpack", "ESLint + Prettier", "Git & GitHub", "npm / yarn"] },
    { category: "Patterns",   items: ["Custom Hooks", "Context API", "Component Architecture", "REST APIs", "Performance Optimisation"] },
    { category: "Currently Learning", items: ["TypeScript", "Next.js", "Testing (Vitest)", "Node.js"] },
  ],

  projects: [
    {
      id: "raina-movies",
      title: "Raï'na Movies",
      description: "A full-featured movie discovery app built on the OMDb REST API. Features paginated search, full detail modals with multi-source ratings (IMDb / Rotten Tomatoes / Metacritic), a localStorage-backed watchlist, and type + year filters — all wired through a clean custom-hook architecture.",
      tags: ["React", "Custom Hooks", "Context API", "CSS Modules", "OMDb API", "localStorage"],
      highlights: [
        "API layer fully isolated in a single module — swap data sources without touching components",
        "useSearch + useWatchlist hooks keep components pure views",
        "Skeleton shimmer loaders, lazy images, and keyboard navigation",
        "Responsive down to 320px",
      ],
      link: "#",
      featured: true,
    },
    {
      id: "project-2",
      title: "Coming Soon",
      description: "Next project in the works. Check back shortly.",
      tags: ["React", "TypeScript"],
      highlights: [],
      link: "#",
      featured: false,
    },
  ],
};