// Note: no top-level imports of data files!
// This ensures they are not bundled into the main chunk.

export const themes = [
  {
    id: "core",
    title: "THE VOID",
    description: "Discover your digital soul.",
    loader: () => import("./themes/core.js"), // Returns a Promise
  },
  {
    id: "hp",
    title: "THE CASTLE",
    description: "Magic, Houses, and Secrets.",
    loader: () => import("./themes/hp.js"),
  },
  {
    id: "got",
    title: "THE KINGDOM",
    description: "Ice, Fire, and Power.",
    loader: () => import("./themes/got.js"),
  },
  {
    id: "galaxy",
    title: "THE GALAXY",
    description: "Light, Dark, and Stars.",
    loader: () => import("./themes/galaxy.js"),
  },
  {
    id: "wild",
    title: "THE WILD",
    description: "Instinct, Hunt, and Survival.",
    loader: () => import("./themes/wild.js"),
  },
  {
    id: "villain",
    title: "THE VILLAIN",
    description: "Ambition, Betrayal, and Chaos.",
    loader: () => import("./themes/villain.js"),
  },
  {
    id: "aesthetic",
    title: "THE AESTHETIC",
    description: "Vibe, Core, and Atmosphere.",
    loader: () => import("./themes/aesthetic.js"),
  },
  {
    id: "alignment",
    title: "THE ALIGNMENT",
    description: "Law, Chaos, and Morality.",
    loader: () => import("./themes/alignment.js"),
  },
  {
    id: "era",
    title: "THE ERA",
    description: "Sights, Sounds, and Formats.",
    loader: () => import("./themes/era.js"),
  },
];
