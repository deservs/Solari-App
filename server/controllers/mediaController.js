const axios = require("axios");

// Criamos um cliente configurado
const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_BEARER_TOKEN || process.env.VITE_TMDB_TOKEN}`,
  },
});

// Helper para evitar repetir try/catch e validação de token
const fetchTMDB = async (url, res) => {
  if (!tmdb.defaults.headers.Authorization.split(' ')[1]) {
    return res.status(500).json({ error: "Token TMDB não configurado" });
  }

  try {
    const { data } = await tmdb.get(url, { params: { language: "pt-BR" } });
    res.json(data);
  } catch (error) {
    console.error(`Erro ao acessar ${url}:`, error.message);
    res.status(500).json({ error: "Erro ao buscar dados no TMDB" });
  }
};

// Agora suas rotas viram apenas uma linha!
exports.getTrending = (req, res) => fetchTMDB("/trending/all/day", res);
exports.getTrendingMovies = (req, res) => fetchTMDB("/trending/movie/day", res);
exports.getPopularMovies = (req, res) => fetchTMDB("/movie/popular", res);
exports.getTrendingShows = (req, res) => fetchTMDB("/trending/tv/day", res);
exports.getPopularShows = (req, res) => fetchTMDB("/tv/popular", res);