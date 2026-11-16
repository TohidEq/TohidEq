export type Project = {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  url: string;
  demo?: string;
};

export type ProjectGroup = {
  id: string;
  number: string;
  title: string;
  description: string;
  projects: Project[];
};

export const projectGroups: ProjectGroup[] = [
  {
    id: "linux",
    number: "01",
    title: "Linux & Desktop",
    description:
      "Personal Linux configurations, Wayland utilities and desktop customization.",
    projects: [
      {
        id: "dotfiles",
        name: "dotfiles",
        description:
          "My personal Arch Linux configuration built around dwl and a minimal Wayland desktop. It includes window manager settings, application shortcuts, terminal configurations, themes, fonts, status bars and desktop utilities, bringing together the tools and visual choices that shape my daily Linux environment.",
        technologies: ["Arch Linux", "dwl", "Wayland", "Shell"],
        url: "https://github.com/TohidEq/dotfiles",
      },
      {
        id: "dotfiles-old",
        name: "dotfiles-old",
        description:
          "An earlier version of my personal Linux setup, built around Arch Linux and Hyprland. It documents a highly customized desktop environment featuring Waybar, Eww widgets, Rofi, Kitty, Fish, Starship and a collection of carefully configured applications, themes and keyboard shortcuts.",
        technologies: ["Arch Linux", "Hyprland", "Wayland", "Fish"],
        url: "https://github.com/TohidEq/dotfiles-old",
      },
      {
        id: "someblocks",
        name: "my-someblocks-dwlb",
        description:
          "A customized fork of dwlb with asynchronous block execution and improved status output handling. It avoids unnecessary separators when a block returns empty output, adds compatibility with somebar and includes personally customized status bar blocks for a lightweight Wayland desktop.",
        technologies: ["C", "dwlb", "Wayland", "Shell"],
        url: "https://github.com/TohidEq/my-someblocks-dwlb",
      },
      {
        id: "wmoji",
        name: "wmoji",
        description:
          "A minimal emoji picker for Wayland that uses wmenu to search, select and copy emojis directly to the clipboard. It supports custom searchable items, configurable appearance, case-insensitive matching and Arch Linux package installation, making emoji selection fit naturally into a keyboard-driven desktop workflow.",
        technologies: ["Shell", "wmenu", "Wayland", "jq"],
        url: "https://github.com/TohidEq/wmoji",
      },
    ],
  },

  {
    id: "games",
    number: "02",
    title: "Games & Puzzles",
    description:
      "Classic games, procedural generation and algorithmic challenges.",
    projects: [
      {
        id: "tetris",
        name: "rust-game-tetris",
        description:
          "A terminal-based implementation of the classic Tetris game, written in Rust. It recreates the familiar block-stacking gameplay with keyboard controls for horizontal movement, faster downward movement and changing block direction. Game speed can also be customized through a configuration constant.",
        technologies: ["Rust", "Cargo", "Terminal"],
        url: "https://github.com/TohidEq/rust-game-tetris",
      },
      {
        id: "snake",
        name: "rust-game-snake",
        description:
          "A terminal-based Snake game written in Rust. Control the snake using WASD, collect coins to grow longer and avoid losing control as the game progresses. A small project exploring game loops, keyboard input and classic grid-based gameplay.",
        technologies: ["Rust", "Cargo", "Terminal"],
        url: "https://github.com/TohidEq/rust-game-snake",
      },
      {
        id: "minesweeper",
        name: "rust-game-minesweeper",
        description:
          "A terminal-based Minesweeper game implemented in Rust. Navigate the board, defuse cells and mark suspected mines using keyboard controls. It also includes a forgiving first-move mechanic that automatically flags a bomb if the first defuse action lands on one.",
        technologies: ["Rust", "Cargo", "Terminal"],
        url: "https://github.com/TohidEq/rust-game-minesweeper",
      },
      {
        id: "riverride",
        name: "rust-game-riverride",
        description:
          "A small terminal action game written in Rust. Play as the main character, navigate the river, shoot approaching enemies and collect gold. The game uses keyboard-based movement inspired by Vim navigation, with Space for shooting and Q to exit.",
        technologies: ["Rust", "Cargo", "Terminal"],
        url: "https://github.com/TohidEq/rust-game-riverride",
      },
      {
        id: "godot-maze-3d",
        name: "gd-game-3d-maze",
        description:
          "A 3D maze (6 Ways: Right, Left, Fowrard, Backward, Up, Down) game developed with Godot, featuring procedurally generated mazes with different difficulty levels. Explore DFS-generated easy mazes or take on harder mazes generated using Prim's algorithm. The game also includes adjustable X, Y and Z dimensions, camera controls and mobile-friendly joystick and button controls.",
        technologies: ["Godot", "GDScript", "3D", "DFS", "Prim's Algorithm"],
        url: "https://github.com/TohidEq/gd-game-3d-maze",
      },
      {
        id: "maze-3d",
        name: "js-3d-maze-generator",
        description:
          "A JavaScript project exploring procedural 3D maze generation through multiple algorithm variations. It includes three generation modes: EZ, slowHard and fastHard, experimenting with different approaches to creating maze structures.",
        technologies: ["JavaScript", "Algorithms", "Procedural Generation", "3D"],
        url: "https://github.com/TohidEq/js-3d-maze-generator",
      },
      {
        id: "maze",
        name: "js-maze-generator",
        description:
          "A JavaScript maze generation algorithm experiment focused on procedurally creating maze structures. A small algorithm-oriented project exploring how randomly generated paths and layouts can be constructed programmatically.",
        technologies: ["JavaScript", "Algorithms"],
        url: "https://github.com/TohidEq/js-maze-generator",
      },
      {
        id: "2048",
        name: "py-2048-cli",
        description:
          "A terminal-based version of the popular 2048 puzzle game, built with Python and Blessed. It features keyboard navigation using both WASD and Vim-style HJKL controls, along with shortcuts for restarting or exiting the game. The terminal interface provides a playable grid without requiring a graphical window.",
        technologies: ["Python", "Blessed", "CLI"],
        url: "https://github.com/TohidEq/py-2048-cli",
      },
      {
        id: "xo",
        name: "x-and-o-c",
        description:
          "A C implementation of the classic Tic-Tac-Toe game, also known as X and O. A small terminal-based programming project that brings the familiar two-player board game to the command line.",
        technologies: ["C", "GCC", "Terminal"],
        url: "https://github.com/TohidEq/x-and-o-c",
      },
      {
        id: "knights-tour",
        name: "knights-tour",
        description:
          "A repository dedicated to the Knight's Tour chess puzzle, a classic problem involving finding a sequence of knight moves that visits every square on a chessboard exactly once.",
        technologies: ["Algorithms", "Chess"],
        url: "https://github.com/TohidEq/knights-tour",
      },
      {
        id: "memory-game",
        name: "memory-game",
        description:
          "A simple and interactive memory card game where players flip over hidden cards to find matching pairs. Test your memory, improve your concentration, and try to match all pairs using as few moves as possible.",
        technologies: ["React", "JavaScript", "Create React App"],
        url: "https://github.com/TohidEq/memory-game",
      },
    ],
  },

  {
    id: "web",
    number: "03",
    title: "Web & Applications",
    description:
      "Web applications, interfaces, personal websites and interactive projects.",
    projects: [
      {
        id: "kar-vamej",
        name: "uni-kar-vamej",
        description:
          "A Persian-language job and freelance opportunity aggregator built to make finding work easier. It collects listings from platforms such as Karlancer, Ponisha, Jobinja and JobVision using Puppeteer-based web scraping. Users can search, filter and sort opportunities by factors such as salary, location and job type, as well as save their favorite listings. The application is built with Next.js, React and Tailwind CSS, with Docker support for deployment.",
        technologies: ["Next.js", "React", "Tailwind CSS", "Puppeteer", "Docker"],
        url: "https://github.com/TohidEq/uni-kar-vamej",
      },
      {
        id: "gc-partners",
        name: "gc-partners-landingpage",
        description:
          "A landing page project developed with React and TypeScript. It explores building a structured web landing page with a modern frontend stack and includes a deployed Vercel demonstration.",
        technologies: ["React", "TypeScript", "CSS"],
        url: "https://github.com/TohidEq/gc-partners-landingpage",
        demo: "https://new-test-landing-react-ts.vercel.app/",
      },
      {
        id: "next-counter",
        name: "next-counter",
        description:
          "A customizable multi-counter web app where the URL determines the grid layout. Set the number of rows and columns directly in the URL to create multiple independent counters, each of which increments with a simple click. A minimal and flexible way to manage multiple counters in one view.",
        technologies: ["Next.js", "React", "JavaScript"],
        url: "https://github.com/TohidEq/next-counter",
      },
      {
        id: "personal-website",
        name: "personal_website",
        description:
          "An earlier personal website built with Tailwind CSS. The project explores presenting personal information through a custom website and includes a deployed Netlify version.",
        technologies: ["HTML", "CSS", "Tailwind CSS"],
        url: "https://github.com/TohidEq/personal_website",
        demo: "https://verdant-piroshki-de0372.netlify.app/public/",
      },
      {
        id: "simple-blog",
        name: "simple-blog",
        description:
          "A blog website project built with React and Create React App. It provides a starting point for exploring component-based frontend development, development workflows and production builds.",
        technologies: ["React", "JavaScript", "Create React App"],
        url: "https://github.com/TohidEq/simple-blog",
      },
      {
        id: "joke-maker",
        name: "joke-maker-site",
        description:
          "Generates jokes with your name (or any name)",
        technologies: ["React", "JavaScript", "Create React App"],
        url: "https://github.com/TohidEq/joke-maker-site",
      },
      {
        id: "chat-app",
        name: "chat-app-1",
        description:
          "A repository for a chat application experiment.",
        technologies: ["Web Development"],
        url: "https://github.com/TohidEq/chat-app-1",
      },
      {
        id: "cooking-bro",
        name: "cooking-bro",
        description:
          "A simple recipe manager for creating, saving, and exploring your favorite recipes.",
        technologies: ["React", "JavaScript", "Create React App"],
        url: "https://github.com/TohidEq/cooking-bro",
      },
      {
        id: "resume",
        name: "G2Tech-Exercise-1-resume",
        description:
          "A simple resume website developed using HTML and CSS only, without relying on a JavaScript framework. Created as a G2Tech exercise, it focuses on structuring and styling a personal resume with a deployed Netlify demonstration.",
        technologies: ["HTML", "CSS"],
        url: "https://github.com/TohidEq/G2Tech-Exercise-1-resume",
        demo: "https://cool-frangipane-c44858.netlify.app/",
      },
      {
        id: "calculator",
        name: "G2Tech-Exercise-2-Calculator",
        description:
          "A simple calculator application developed with TypeScript as part of the G2Tech exercise series. A focused project exploring calculator functionality and typed application logic.",
        technologies: ["TypeScript"],
        url: "https://github.com/TohidEq/G2Tech-Exercise-2-Calculator",
      },
      {
        id: "iran-car-plate",
        name: "iran-car-plate-city-yooz",
        description:
          "A small Iranian vehicle registration plate lookup project. Its purpose is to identify the city associated with an Iranian car plate, offering a practical example of using a programming language for a localized lookup tool.",
        technologies: ["Yooz","JavaScript"],
        url: "https://github.com/TohidEq/iran-car-plate-city-yooz",
      },
      {
        id: "100-hour-clock",
        name: "100-hour-clock",
        description:
          "Why should a day have only 24 hours? A different way to experience time. This clock transforms your regular 24-hour day into a 100-hour system, giving you a new perspective on daily planning and time management",
        technologies: ["React", "JavaScript", "Create React App"],
        url: "https://github.com/TohidEq/100-hour-clock",
      },
      {
        id: "wiki-cher",
        name: "wiki-cher",
        description:
          "Search in WikiPedia",
        technologies: ["Next.js", "React", "JavaScript"],
        url: "https://github.com/TohidEq/wiki-cher",
      },
    ],
  },

  {
    id: "cli",
    number: "04",
    title: "CLI & Developer Tools",
    description:
      "Command-line utilities, desktop helpers and programming experiments.",
    projects: [
      {
        id: "atreepp",
        name: "atreepp",
        description:
          "A modern C++ implementation of the familiar tree command, enhanced with Nerd Font icons and support for displaying hidden files. It provides a visually richer way to inspect directory structures directly from the terminal, with CMake-based build and installation support.",
        technologies: ["C++", "CMake", "Nerd Fonts", "CLI"],
        url: "https://github.com/TohidEq/atreepp",
      },
      {
        id: "clock-maker",
        name: "py-clock-maker",
        description:
          "A customizable desktop tool built with Python, Tkinter and Pillow for generating clock pointer images. It renders 61 individual frames representing positions from 00 to 60, with configurable size, shape, thickness and colors. The exported images can be used to create custom clocks in Eww and other desktop setups.",
        technologies: ["Python", "Tkinter", "Pillow"],
        url: "https://github.com/TohidEq/py-clock-maker",
      },
      {
        id: "img-to-ascii",
        name: "py-img-to-ascii",
        description:
          "A Python utility that converts PNG images into ASCII art. Using Pillow for image processing, it maps visual brightness to configurable character sets and supports adjustable output dimensions, scaling modes and optional terminal previews.",
        technologies: ["Python", "Pillow", "ASCII Art"],
        url: "https://github.com/TohidEq/py-img-to-ascii",
      },
      {
        id: "chat-ai-cli",
        name: "py-chat-ai-cli",
        description:
          "A terminal-based AI chat application that connects to language models through the OpenRouter API. Built with Python, it uses Rich for styled terminal output, keyboard for input handling, Requests for HTTP communication and dotenv for API key configuration. It also provides an option to disable Markdown styling.",
        technologies: ["Python", "OpenRouter API", "Rich", "Requests", "dotenv"],
        url: "https://github.com/TohidEq/py-chat-ai-cli",
      },
      {
        id: "soroban",
        name: "js-soroban-cli",
        description:
          "A Node.js command-line package created with Ink, the React-based terminal interface framework. Its published-style CLI interface demonstrates argument handling, command usage information and a simple personalized greeting example.",
        technologies: ["JavaScript", "Node.js", "Ink"],
        url: "https://github.com/TohidEq/js-soroban-cli",
      },
    ],
  },

  {
    id: "academic",
    number: "05",
    title: "Academic & Engineering",
    description:
      "University projects, digital systems and engineering-related data.",
    projects: [
      {
        id: "kar-vamej-data",
        name: "uni-kar-vamej-data",
        description:
          "A companion data repository for the KarVamej project, focused on collecting and processing job-market information from Iranian employment platforms. It retrieves data through the KarVamej scraping project, stores structured records in JSON, normalizes keywords and removes duplicate entries to prepare job-related data for further use and analysis.",
        technologies: ["Python", "JSON", "Data Processing", "Web Scraping"],
        url: "https://github.com/TohidEq/uni-kar-vamej-data",
      },
      {
        id: "uni-vhdl",
        name: "uni-vhdl",
        description:
          "A collection of university work related to digital systems design at Chamran University. It includes helper scripts for generating VHDL testbenches and running simulation workflows, making it easier to prepare and execute digital design assignments.",
        technologies: ["VHDL", "Python", "Digital Logic", "Testbenches"],
        url: "https://github.com/TohidEq/uni-vhdl",
      },
    ],
  },

  {
    id: "experiments",
    number: "06",
    title: "Experiments & Gaming",
    description:
      "Visual customization, gaming utilities and smaller experimental projects.",
    projects: [
      {
        id: "finger-gridshot",
        name: "finger-gridshot-aimlab",
        description:
          "A React-based repository associated with Aim Lab's Gridshot training mode.",
        technologies: ["React", "JavaScript", "Create React App", "Aim Lab"],
        url: "https://github.com/TohidEq/finger-gridshot-aimlab",
      },
      {
        id: "bubble-bars",
        name: "bubble-bars-wotlk-wa",
        description:
          "A custom WeakAuras project for World of Warcraft: Wrath of the Lich King that displays health and resources such as mana and rage as bubble-style visual elements. It includes custom aura assets, importable configuration text and instructions for integrating the interface into WeakAuras on WotLK.",
        technologies: ["WeakAuras", "World of Warcraft", "WotLK"],
        url: "https://github.com/TohidEq/bubble-bars-wotlk-wa",
      },
      {
        id: "space-isolation",
        name: "space-isolation-mono",
        description:
          "A monochrome GRUB2 bootloader theme inspired by the main menu of the 2014 survival horror game Alien: Isolation. It provides a customized boot menu appearance with a dark, minimal visual style and installation instructions for several Linux distributions. The supplied theme targets a 1920×1080 display resolution.",
        technologies: ["GRUB2", "Linux", "Bootloader Theming"],
        url: "https://github.com/TohidEq/space-isolation-mono",
      },
      {
        id: "sha256-guess",
        name: "sha256-guess",
        description:
          "A repository named around experimenting with SHA-256 hash guessing.",
        technologies: ["Next.js", "React", "JavaScript", "SHA-256"],
        url: "https://github.com/TohidEq/sha256-guess",
      },
    ],
  },
];
