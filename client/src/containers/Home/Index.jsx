import { useEffect, useState } from "react";

import { Navigation, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { getTrendingMovies } from "../../services/MovieList";

import Header from "../../components/Header/Header";
import "swiper/css";
import "swiper/css/navigation";

import "./style.css";

function Home() {
  return (
    <>
      <Header />
      <MyTrending />
    </>
  );
}

const MyTrending = () => {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const carregarDados = async () => {
      const listaDeFilmes = await getTrendingMovies();
      setFilmes(listaDeFilmes);
    };
    carregarDados();
  }, []);

  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Virtual]}
        navigation={true}
        spaceBetween={20}
        slidesPerView={7.5}
        allowTouchMove={false}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 4.5, allowTouchMove: true },
          1024: { slidesPerView: 5.5, allowTouchMove: false  },
        }}
      >
        {/* O .map deve envolver o SwiperSlide! */}
        {filmes.map((filme, index) => (
          <SwiperSlide key={filme.id} virtualIndex={index}>
            <div className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`}
                alt={filme.title}
                className="movie-poster"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Home;
