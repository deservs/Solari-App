const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: '.env.local' });

const moviesRouter = require('./routes/movies');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/trendingMovies', moviesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy rodando em http://localhost:${PORT}`));