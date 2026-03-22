const BASE_URL = "http://localhost:3000/media";
const ONE_DAY_MS = 1000 * 60 * 60 * 24;

// Função utilitária para buscar com cache
const fetchWithCache = async (endpoint, cacheKey) => {
  const now = new Date().getTime();
  const cachedStr = localStorage.getItem(cacheKey);
  const fullUrl = `${BASE_URL}${endpoint}`;

  // 1. Verificar Cache
  if (cachedStr) {
    const { data, timestamp } = JSON.parse(cachedStr);
    if (now - timestamp < ONE_DAY_MS) {
      console.log(`🎬 Carregando ${cacheKey} do cache...`);
      return data;
    }
  }

  // 2. Buscar no Servidor
  try {
    console.log(`🌐 Buscando ${endpoint} do servidor...`);
    const response = await fetch(fullUrl);
    
    if (!response.ok) throw new Error("Erro na requisição");

    const data = await response.json();
    const results = data.results;

    // 3. Salvar no Cache
    localStorage.setItem(cacheKey, JSON.stringify({
      data: results,
      timestamp: now
    }));

    return results;
  } catch (error) {
    console.error(`Erro em ${endpoint}:`, error);
    
    // Fallback: retorna cache antigo se existir, ou array vazio
    if (cachedStr) {
      return JSON.parse(cachedStr).data;
    }
    return [];
  }
};

// Funções de exportação ficam muito mais simples:
export const getTrendingMovies = () => 
  fetchWithCache("/movieTrending", "cache_trending_movies");

export const getTrending = () => 
  fetchWithCache("/allTrending", "cache_all_trending");

export const getPopularMovies = () => 
  fetchWithCache("/popularMovies", "cache_popular_movies");

export const getTrendingShows = () => 
  fetchWithCache("/trendingShows", "cache_trending_shows");

export const getPopularShows = () => 
  fetchWithCache("/popularShows", "cache_popular_shows");