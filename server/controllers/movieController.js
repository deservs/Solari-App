const axios = require('axios');
exports.getTrendingMovies = async (req, res) => {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/trending/movie/week?language=pt-BR', {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.VITE_TMDB_TOKEN}`
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar filmes' });
  }
};