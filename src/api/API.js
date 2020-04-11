import axios from "axios";
import { API_KEY } from "../config";

const getVideos = async (searchText) => {
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
    return err.response.status;
  }
};

export default getVideos;
