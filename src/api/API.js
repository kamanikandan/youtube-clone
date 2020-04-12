import axios from "axios";
import { API_KEY } from "../config";
import localData from "./data.json";

export const getVideos = async (searchText) => {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          key: API_KEY,
          q: searchText,
          part: "snippet",
          maxResults: 50,
          type: "video",
          videoEmbeddable: true,
        },
      }
    );
    return response.data.items;
  } catch (err) {
    if (err?.response?.status > 400 || err.message === "Network Error") {
      let regEx = new RegExp(`${searchText}`, "gi");
      const filteredData = localData.items.filter(
        (video) =>
          video.snippet.title.match(regEx) ||
          video.snippet.channelTitle.match(regEx)
      );
      return filteredData;
    }
  }
};
