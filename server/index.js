const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config({ path: '.env.local' });

const app = express();

app.use(cors());

app.get('/meus-filmes', async (req, res) => {
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
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy rodando em http://localhost:${PORT}`));