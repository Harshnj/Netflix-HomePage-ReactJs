import React, { useEffect } from "react";
import "./Home.css";
import logo from "../Header/logo.webp";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const apiKey = "3bce413ae6489a480c68db1b750215a4";
const url = "https://api.themoviedb.org/3";
const imgurl = "https://image.tmdb.org/t/p/w500";

const Row = ({ title, arr = [] }) => (
  <div className="row">
    <h2>{title}</h2>
    <div className="overflow">
      {arr.map((item, index) => (
        <img key={index} src={`${imgurl}/${item.poster_path}`} alt="poster" />
      ))}
    </div>
  </div>
);

const Home = () => {
  const [topRated, setTopRatedMovies] = useState([]);
  const [discoverMovies, setDiscoverMovies] = useState([]); //https://api.themoviedb.org/3/discover/movie?api_key=3bce413ae6489a480c68db1b750215a4
  const [topRatedTv, seTopRatedTV] = useState([]); //https://api.themoviedb.org/3/tv/top_rated?api_key=3bce413ae6489a480c68db1b750215a4
  const [trendingTv, setTrendingTV] = useState([]);
  useEffect(() => {
    const fetchTopRatedMoviesS = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/top_rated?api_key=${apiKey}`);

      setTopRatedMovies(results);
    };
    const fetchDiscoverMovies = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/discover/movie?api_key=${apiKey}`);

      setDiscoverMovies(results);
    };
    const fetchTopRatedTV = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/tv/top_rated?api_key=${apiKey}`);

      seTopRatedTV(results);
    };
    const fetchTrendinTV = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/trending/tv/day?api_key=${apiKey}`);

      setTrendingTV(results);
    };
    fetchTopRatedMoviesS();
    fetchDiscoverMovies();
    fetchTopRatedTV();
    fetchTrendinTV();
  }, []);

  return (
    <section className="home">
      <div
        className="banner"
        style={{
          backgroundImage:
            topRatedTv && topRatedTv[11]
              ? `url(${imgurl}/${topRatedTv[11].poster_path})`
              : "",
        }}
      >
        {topRatedTv[11] && <h1>{topRatedTv[11].original_name}</h1>}
        {topRatedTv[11] && <p>{topRatedTv[11].overview}</p>}
      </div>

      <Row title="Popular on Netflix" arr={topRated} />
      <Row title="Recently viewed" arr={discoverMovies} />
      <Row title="TV series" arr={topRatedTv} />
      <Row title="Movies" arr={trendingTv} />
    </section>
  );
};

export default Home;
