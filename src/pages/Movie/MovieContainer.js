import React, { useState, useEffect } from "react";
import { movieApi } from "../../api";
import useInfiniteScroll from "../../Hooks/useInfiniteScroll";
import MoviePresenter from "./MoviePresenter";

const MovieContainer = ({}) => {
  const [loadingPop, setLoadingPop] = useState(true);
  const [loadingNow, setLoadingNow] = useState(true);
  const [loadingUp, setLoadingUp] = useState(true);
  const [popular, setPopular] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const page = useInfiniteScroll();

  const popularMovie = async () => {
    try {
      const {
        data: { results: popular },
      } = await movieApi.popular(page);
      setPopular(popular);
    } catch (e) {
      console.log(`Load fail: ${e}`);
    } finally {
      setLoadingPop(false);
    }
  };

  const morePopularMovie = async () => {
    try {
      const {
        data: { results: newMovies },
      } = await movieApi.popular(page);
      const updatedMovies = [...popular, ...newMovies];
      setPopular(updatedMovies);
    } catch (e) {
      console.log(`Load fail: ${e}`);
    } finally {
      setLoadingPop(false);
    }
  };

  const nowPlayingMovie = async () => {
    try {
      const {
        data: { results: nowPlaying },
      } = await movieApi.nowPlaying();
      setNowPlaying(nowPlaying);
    } catch (e) {
      console.log(`Load fail: ${e}`);
    } finally {
      setLoadingNow(false);
    }
  };

  const moreNowPlayingMovie = async () => {
    try {
      const {
        data: { results: newMovies },
      } = await movieApi.nowPlaying(page);
      const updatedMovies = [...nowPlaying, ...newMovies];
      setNowPlaying(updatedMovies);
    } catch (e) {
      console.log(`Load fail: ${e}`);
    } finally {
      setLoadingNow(false);
    }
  };

  const upcomingMovie = async () => {
    try {
      const {
        data: { results: upcoming },
      } = await movieApi.upcoming();
      setUpcoming(upcoming);
    } catch (e) {
      console.log(`Load fail: ${e}`);
    } finally {
      setLoadingUp(false);
    }
  };

  const moreUpcomingMovie = async () => {
    try {
      const {
        data: { results: newMovies },
      } = await movieApi.upcoming(page);
      const updatedMovies = [...upcoming, ...newMovies];
      setUpcoming(updatedMovies);
    } catch (e) {
      console.log(`Load fail: ${e}`);
    } finally {
      setLoadingUp(false);
    }
  };

  useEffect(() => {
    popularMovie();
    nowPlayingMovie();
    upcomingMovie();
  }, []);

  useEffect(() => {
    morePopularMovie();
    moreNowPlayingMovie();
    moreUpcomingMovie();
  }, [page]);

  return (
    <MoviePresenter
      loadingPop={loadingPop}
      loadingNow={loadingNow}
      loadingUp={loadingUp}
      popular={popular}
      nowPlaying={nowPlaying}
      upcoming={upcoming}
    />
  );
};

export default MovieContainer;
