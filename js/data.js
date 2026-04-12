/* =========================
   SHOW DATA (MAIN DATABASE)
========================= */
const shows = [
  {
    id: 1,
    title: "Game of Thrones",
    category: "Drama",
    episodes: 73,
    rating: 9.5,
    image: "/assets/Games -of-Thrones.avif",
    time: "Sunday 9:00 PM on HBO",
    description: "Seven noble families fight for control of Westeros.",
    nextEpisodeDays: 60,
    episodesList: [
      { title: "Inside Game of Thrones", season: 8, episode: 1 },
      { title: "15-Minute Preview", season: 8, episode: 2 },
      { title: "The Final Battle", season: 8, episode: 3 }
    ]
  },
  {
    id: 2,
    title: "Breaking Bad",
    category: "Crime",
    episodes: 62,
    rating: 9.7,
    image: "/assets/Breaking-Bad.jpg",
    time: "Friday 10:00 PM",
    description: "A chemistry teacher turns into a drug kingpin.",
    nextEpisodeDays: 0,
    episodesList: []
  },
  {
    id: 3,
    title: "Dexter",
    category: "Crime",
    episodes: 96,
    rating: 8.7,
    image: "/assets/Dexter.jpg",
    time: "Monday 9:00 PM",
    description: "A serial killer who targets criminals.",
    nextEpisodeDays: 30,
    episodesList: []
  },
  {
    id: 4,
    title: "How I Met Your Mother",
    category: "Comedy",
    episodes: 208,
    rating: 8.3,
    image: "/assets/how-i-met-your-mother.webp",
    time: "Tuesday 8:00 PM",
    description: "Ted tells the story of how he met his wife.",
    nextEpisodeDays: 15,
    episodesList: []
  },
  {
    id: 5,
    title: "Dragonheart",
    category: "Fantasy",
    episodes: 50,
    rating: 7.5,
    image: "/assets/Dragonheart.jpg",
    time: "Saturday 7:00 PM",
    description: "A knight bonds with a dragon.",
    nextEpisodeDays: 10,
    episodesList: []
  }
];


/* =========================
   HELPER FUNCTIONS
========================= */

// Get all shows
function getAllShows() {
  return shows;
}

// Get show by ID
function getShowById(id) {
  return shows.find(show => show.id == id);
}

// Search shows
function searchShows(keyword) {
  return shows.filter(show =>
    show.title.toLowerCase().includes(keyword.toLowerCase())
  );
}

// Filter by category
function filterByCategory(category) {
  return shows.filter(show =>
    show.category.toLowerCase() === category.toLowerCase()
  );
}