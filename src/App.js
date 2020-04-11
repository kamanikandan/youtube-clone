import React, { useState, useEffect } from "react";
import getVideos from "./api/API";
import Header from "./components/Header";
import SearchHeader from "./components/SearchHeader";
import Videos from "./components/Videos";
import Player from "./components/Player";
import Loader from "./components/Loader";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);
  const [searchText, setSearchText] = useState("javascript");
  const [playingVideo, setPlayingVideo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (searchKey) => {
      try {
        const data = await getVideos(searchKey);
        setIsLoading(false);
        data?.length === 0 ? setVideos([]) : setVideos(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData(searchText);
  }, [searchText]);

  if (isLoading) return <Loader />;
  return (
    <>
      <Player
        playingVideo={(video) => setPlayingVideo(video)}
        video={playingVideo}
      />
      <Header getsearchText={(text) => setSearchText(text)} />
      <SearchHeader searchText={searchText} />
      <Videos
        playingVideo={(video) => setPlayingVideo(video)}
        videos={videos}
      />
      <Footer />
    </>
  );
}

export default App;
