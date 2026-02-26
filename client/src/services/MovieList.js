const API_URL = "http://localhost:3000/trendingMovies";

export const getTrendingMovies = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Erro ao buscar filmes no servidor");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Erro:", error);
    return [];
  }
};
