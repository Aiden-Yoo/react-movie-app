import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "854ff9f19da2b1facbd5ac1185e48973",
    language: "en-US",
  },
});

export const movieApi = {
  popular: (page = 1) =>
    api.get("movie/popular", {
      params: {
        page,
      },
    }),
  nowPlaying: (page = 1) =>
    api.get("movie/now_playing", {
      params: {
        page,
      },
    }),
  upcoming: (page = 1) =>
    api.get("movie/upcoming", {
      params: {
        page,
      },
    }),
  detail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
};

export const tvApi = {
  popular: (page = 1) =>
    api.get("tv/popular", {
      params: {
        page,
      },
    }),
  onAir: (page = 1) =>
    api.get("tv/on_the_air", {
      params: {
        page,
      },
    }),
  airingToday: (page = 1) =>
    api.get("tv/airing_today", {
      params: {
        page,
      },
    }),
  detail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
};
