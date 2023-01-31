export function getRandomIndex(len = 0) {
  return Math.floor(Math.random() * len);
}

export function getShowsWithGenre(shows = []) {
  if (!shows.length) {
    return {
      genres: [],
      showsByGenre: {}
    };
  }

  const allGenres = [...new Set(shows.map((show) => show.genres).flat())];
  const showsByGenre = {};

  showsByGenre[GENRE_TYPE_POPULAR] = getPopularShows(shows);
  allGenres.forEach((genre) => {
    showsByGenre[genre] = getByGenre(shows, genre);
  });

  return {
    genres: [GENRE_TYPE_POPULAR, ...allGenres],
    showsByGenre
  };
}
const GENRE_TYPE_POPULAR = 'Popular';

function getByGenre(shows = [], genre = '') {
  return shows.filter(show => show.genres.includes(genre));
}

function getPopularShows(shows = [], limit = 15) {
  return shows.sort((show1, show2) => show1.rating.average - show2.rating.average).slice(0, limit);
}