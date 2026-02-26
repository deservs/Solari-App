import { useEffect, useState } from "react";

import { getTrendingMovies } from "../../services/MovieList";

import Header from "../../components/Header/Header";

import "./style.css";
function Home() {
  const [filmes, setFilmes] = useState([]);
  useEffect(() => {
    const carregarDados = async () => {
      const listaDeFilmes = await getTrendingMovies();
      setFilmes(listaDeFilmes);
    };

    carregarDados();
  }, []);

  return (
  <>
  <Header />
    <div>
      <ul>
        {filmes.map((filme) => (
          <li key={filme.id}><img src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`} alt={filme.title} /></li>
        ))}
      </ul>
    </div>
  </>
  );
}
export default Home;
