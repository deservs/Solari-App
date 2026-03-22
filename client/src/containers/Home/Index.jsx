/* REACT */
import { useEffect, useState } from "react";

/* Biblioteca SWIPER */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Virtual } from "swiper/modules";

import {
  getTrendingMovies,
  getTrending,
  getPopularMovies,
  getPopularShows,
  getTrendingShows,
} from "../../services/MovieList";
import { Genres, TvGenres } from "../../services/GenreId.js";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer.jsx";
import "swiper/css";
import "swiper/css/navigation";

import "./style.css";
import {
  Info,
  Dot,
  Play,
  ChevronLeft,
  ChevronRight,
  Clapperboard,
  TvMinimalPlay,
} from "lucide-react";

import processarTexto from "./estilizandoTexto.js";

function Home() {
  return (
    <>
      <Header />
      <FirstMovie />
      <div id="media-container">

      <MovieSlider
        title="Em Alta"
        fetchFunction={getTrending}
        idNav="trending"
      />

      <MovieSlider
        title="Filmes em Alta"
        fetchFunction={getTrendingMovies}
        idNav="trending"
      />

      <MovieSlider
        title="Filmes Populares"
        fetchFunction={getPopularMovies}
        idNav="MoviePopular"
      />

      <MovieSlider
        title="Séries em Alta"
        fetchFunction={getTrendingShows}
        idNav="ShowTrending"
      />

      <MovieSlider
        title="Séries Populares"
        fetchFunction={getPopularShows}
        idNav="ShowPopular"
        />
        </div>
      <Footer />
    </>
  );
}

const FirstMovie = () => {
  const [filmes, setFilmes] = useState([]);
  const [corFundo, setCorFundo] = useState("#121212");

  useEffect(() => {
    const carregarDados = async () => {
      const listaDeFilmes = await getTrending();
      setFilmes(listaDeFilmes);
    };
    carregarDados();
  }, []);

  const tituloOriginal = filmes[0]?.title || "";
  const { parteBranca, parteAmarela } = processarTexto(tituloOriginal);
  let mapaGenerosSereis = {};
  if (filmes.length === 0) return null;
  if (filmes[0]?.media_type === "tv") {
    mapaGenerosSereis = { ...Genres, ...TvGenres };
  } else {
    mapaGenerosSereis = { ...Genres };
  }
  return (
    <div id="first-movie-container">
      <div id="movie-container">
        <img
          id="first-movie-img"
          src={
            filmes[0]?.backdrop_path
              ? `https://image.tmdb.org/t/p/original${filmes[0].backdrop_path}`
              : "fallback.jpg"
          }
          alt="Pôster do filme"
        />
      </div>
      <div id="movie-info">
        <div id="extra-info">
          <p id="movie-type">
            {filmes[0]?.media_type === "movie" ? "Filme" : "Série"}
            {filmes[0]?.media_type === "movie" ? (
              <Clapperboard strokeWidth={1.5} />
            ) : (
              <TvMinimalPlay strokeWidth={1.5} />
            )}
          </p>
          <ul id="movie-genres">
            {filmes[0]?.genre_ids.map((genreId) => (
              <div>
                {filmes[0].genre_ids.indexOf(genreId) === 0 ? null : (
                  <Dot id="ponto" strokeWidth={2.5} />
                )}
                <li key={genreId}>{mapaGenerosSereis[genreId] || genreId}</li>
              </div>
            ))}
          </ul>
        </div>
        <h1 id="Movie-Title">
          <span className="word-0">{parteBranca}</span>
          <br />
          <span className="yellow-part">{parteAmarela}</span>
        </h1>
        <h4 id="Movie-Sinopse">{filmes[0]?.overview}</h4>
        <div id="movie-Buttons">
          <button id="Watch-Now">
            <Play strokeWidth={1.5} />
            <p>Assistir Agora</p>
          </button>
          <button id="More-Info">
            <Info strokeWidth={1.5} />
            <p>Mais Informações</p>
          </button>
        </div>
      </div>
    </div>
  );
};

const MovieSlider = ({ title, fetchFunction, idNav }) => {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const carregar = async () => {
      const dados = await fetchFunction();
      setFilmes(dados);
    };
    carregar();
  }, [fetchFunction]); // Recarrega se a função mudar

  // IDs únicos para as setas não moverem todos os carrosséis ao mesmo tempo
  const prevClass = `prev-${idNav}`;
  const nextClass = `next-${idNav}`;

  return (
    <div className="category-section">
      <h2 className="slider-title">{title}</h2>

      <div className="slider-wrapper">
        {/* Botões Customizados com IDs únicos */}
        <div className="trending-navigation">
          <button className={`nav-btn ${prevClass}`}>
            <ChevronLeft />
          </button>
          <button className={`nav-btn ${nextClass}`}>
            <ChevronRight />
          </button>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{ prevEl: `.${prevClass}`, nextEl: `.${nextClass}` }}
          slidesPerView={7.5}
          spaceBetween={15}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 4.5, allowTouchMove: true },
            1024: { slidesPerView: 6.5, allowTouchMove: false },
          }}
        >
          {filmes.map((filme) => (
            <SwiperSlide key={filme.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
                alt={filme.title}
                className="movie-poster"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
