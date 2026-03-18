const base = import.meta.env.BASE_URL;

export const projects = [
  {
    slug: "disc-dryve",
    title: "Disc Dryve Dancer",
    role: "Character Designer",
    year: 2024,
    tools: ["Procreate", "Photoshop"],
    hero: "/images/art/2d/DiscDryve/DiscDryve.jpg",
    description:
      "Character concept for a 2000's inspired dance rhythm game. A fun and energetic character design with a retro vibe.",
    galleries: [
      {
        title: "Concept",
        images: [
          `${base}images/art/2d/DiscDryve/DiscDryve.jpg`,
          `${base}images/art/2d/DiscDryve/DiscDryve2.png`,
        ],
      },
    ],
  },
  {
    slug: "monster-girls",
    title: "Monster Girls",
    role: "Character Designer",
    year: 2025,
    tools: ["Procreate"],
    hero: "/images/art/2d/MonsterGirls/Zombae.png",
    description:
      "A collection of characters I've designed based on various popular monsters.",
    galleries: [
      {
        title: "",
        images: [
          `${base}images/art/2d/MonsterGirls/Zombae.png`,
          `${base}images/art/2d/MonsterGirls/SeaBabe.png`,
          `${base}images/art/2d/MonsterGirls/MothMommy.png`,
          `${base}images/art/2d/MonsterGirls/BatBitez.png`,
          `${base}images/art/2d/MonsterGirls/OniMania.png`,
        ],
      },
    ],
  },
  {
    slug: "the-witch",
    title: "The Witch",
    role: "Character Designer, Modeller & Texture Artist",
    year: 2025,
    tools: ["Blender", "Substance Painter", "Photoshop"],
    hero: "/images/art/2d/Witch/thumb/WitchModel.png",
    description:
      "The main character for my upcoming game 'Witch of Sugar Creek'.",
    galleries: [
      {
        title: "Textured",
        images: [
          `${base}images/art/3d/Witch/thumb/Witch360Tex0001.png`,
          `${base}images/art/3d/Witch/thumb/Witch360Tex0002.png`,
          `${base}images/art/3d/Witch/thumb/Witch360Tex0003.png`,
          `${base}images/art/3d/Witch/thumb/Witch360Tex0004.png`,
          `${base}images/art/3d/Witch/thumb/Witch360Tex0005.png`,
          `${base}images/art/3d/Witch/thumb/Witch360Tex0006.png`,
          `${base}images/art/3d/Witch/thumb/Witch360Tex0007.png`,
          `${base}images/art/3d/Witch/thumb/Witch360Tex0008.png`,
          `${base}images/art/3d/Witch/thumb/Witch360Tex0009.png`,
          `${base}images/art/3d/Witch/thumb/Witch360Tex0010.png`,
          `${base}images/art/3d/Witch/thumb/Witch360Tex0011.png`,
        ],
      },
      {
        title: "Wireframe",
        images: [
          `${base}images/art/3d/Witch/thumb/Witch360Wire0001.png`,
          `${base}images/art/3d/Witch/thumb/Witch360Wire0002.png`,
          `${base}images/art/3d/Witch/thumb/Witch360Wire0003.png`,
          `${base}images/art/3d/Witch/thumb/Witch360Wire0004.png`,
          `${base}images/art/3d/Witch/thumb/Witch360Wire0005.png`,
          `${base}images/art/3d/Witch/thumb/Witch360Wire0006.png`,
          `${base}images/art/3d/Witch/thumb/Witch360Wire0007.png`,
          `${base}images/art/3d/Witch/thumb/Witch360Wire0008.png`,
          `${base}images/art/3d/Witch/thumb/Witch360Wire0009.png`,
          `${base}images/art/3d/Witch/thumb/Witch360Wire0010.png`,
          `${base}images/art/3d/Witch/thumb/Witch360Wire0011.png`,
        ],
      },
    ],
  },
  {
    slug: "wosc",
    title: "The Witch of Sugar Creek",
    youtubeId: "Zn0Mi4UZCZA",
    role: "Character Designer, Modeller, Texture Artist, Animator & Game Developer",
    year: 2025,
    tools: ["Blender", "Substance Painter", "Photoshop", "Unreal Engine 5"],
    hero: "/images/art/2d/Witch/thumb/WitchModel.png",
    description:
      "The Witch of Sugar Creek is a 3D cozy rpg about a witch who finds a home in a small town, helping the townsfolk with their problems and learning about herself in the process. The game is currently in development with no release date set.",
    galleries: [
      {
        title: "Character Models",
        images: [`${base}images/art/3d/Witch/thumb/Witch360Tex0001.png`],
      },
    ],
  },
  {
    slug: "lso",
    title: "Last Seen Online",
    role: "Artist & Game Developer",
    year: 2026,
    tools: ["Aseprite", "Godot"],
    hero: "/images/art/2d/Witch/thumb/WitchModel.png",
    description:
      "Last Seen Online is an isometric pixel puzzle game. Your friend has gone missing, and it's up to you to search their room for clues and solve puzzles to find out what happened to them. The game is currently in development set to release in late 2026.",
    galleries: [
      {
        title: "Game Art",
        images: [
          `${base}images/art/2d/LastSeenOnline/Room.jpg`,
          `${base}images/art/2d/LastSeenOnline/Desktop.jpg`,
        ],
      },
    ],
  },
  {
    slug: "decoradial",
    title: "DecoraDial",
    links: [
      { label: "Itch.io", url: "https://batbitez.itch.io/decoradial" },
      {
        label: "Game Jam Page",
        url: "https://itch.io/jam/-girly-game-jam-3-1",
      },
    ],
    role: "Programmer",
    year: 2026,
    tools: ["Godot"],
    hero: "/images/art/2d/Witch/thumb/WitchModel.png",
    description:
      "DecoraDial is a cozy little customization game where you deck out your very own devices with stickers, charms, and plushies. Pick your favorites, place them just right, and make them totally yours. Inspired by the Frutiger Aero aesthetic of the early 2000s. Glossy icons, soft gradients, and that feeling like technology was something magical and new. If you grew up picking out flip phone charms or decorating your DS, this one's for you. Made with love for Girly Game Jam #3 as a first game jam project.",
    galleries: [
      {
        title: "Game Art",
        images: [
          `${base}images/art/2d/DecoraDial/Title.png`,
          `${base}images/art/2d/DecoraDial/Credits.png`,
          `${base}images/art/2d/DecoraDial/Gameplay.png`,
          `${base}images/art/2d/DecoraDial/HowTo.png`,
        ],
      },
    ],
  },
];
