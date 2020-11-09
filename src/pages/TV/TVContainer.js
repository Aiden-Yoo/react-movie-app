import React, { useState, useEffect } from "react";
import { tvApi } from "../../api";
import useInfiniteScroll from "../../Hooks/useInfiniteScroll";
import TVPresenter from "./TVPresenter";

const TVContainer = ({}) => {
  const [loadingPop, setLoadingPop] = useState(true);
  const [loadingOn, setLoadingOn] = useState(true);
  const [loadingToday, setLoadingToday] = useState(true);
  const [popular, setPopular] = useState([]);
  const [onAir, setOnAir] = useState([]);
  const [airingToday, setAiringToday] = useState([]);
  const page = useInfiniteScroll();

  const popularTV = async () => {
    try {
      const {
        data: { results: popular },
      } = await tvApi.popular(page);
      setPopular(popular);
    } catch (e) {
      console.log(`Load fail: ${e}`);
    } finally {
      setLoadingPop(false);
    }
  };

  const morePopularTV = async () => {
    try {
      const {
        data: { results: newMovies },
      } = await tvApi.popular(page);
      const updatedMovies = [...popular, ...newMovies];
      setPopular(updatedMovies);
    } catch (e) {
      console.log(`Load fail: ${e}`);
    } finally {
      setLoadingPop(false);
    }
  };

  const onAirTV = async () => {
    try {
      const {
        data: { results: onAir },
      } = await tvApi.onAir();
      setOnAir(onAir);
    } catch (e) {
      console.log(`Load fail: ${e}`);
    } finally {
      setLoadingOn(false);
    }
  };

  const moreOnAirTV = async () => {
    try {
      const {
        data: { results: newMovies },
      } = await tvApi.onAir(page);
      const updatedMovies = [...onAir, ...newMovies];
      setOnAir(updatedMovies);
    } catch (e) {
      console.log(`Load fail: ${e}`);
    } finally {
      setLoadingOn(false);
    }
  };

  const airingTodayTV = async () => {
    try {
      const {
        data: { results: airingToday },
      } = await tvApi.airingToday();
      setAiringToday(airingToday);
    } catch (e) {
      console.log(`Load fail: ${e}`);
    } finally {
      setLoadingToday(false);
    }
  };

  const moreAiringTodayTV = async () => {
    try {
      const {
        data: { results: newMovies },
      } = await tvApi.airingToday(page);
      const updatedMovies = [...airingToday, ...newMovies];
      setAiringToday(updatedMovies);
    } catch (e) {
      console.log(`Load fail: ${e}`);
    } finally {
      setLoadingToday(false);
    }
  };

  useEffect(() => {
    popularTV();
    onAirTV();
    airingTodayTV();
  }, []);

  useEffect(() => {
    morePopularTV();
    moreOnAirTV();
    moreAiringTodayTV();
  }, [page]);

  return (
    <TVPresenter
      loadingPop={loadingPop}
      loadingOn={loadingOn}
      loadingToday={loadingToday}
      popular={popular}
      onAir={onAir}
      airingToday={airingToday}
    />
  );
};

export default TVContainer;
