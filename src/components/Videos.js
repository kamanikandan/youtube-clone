import React from "react";
import Card from "./Card";

const Videos = ({ videos, playingVideo }) => {
  return (
    <div className="container">
      <div className="videos-wrapper">
        {videos.length === 0 ? (
          <h2>No Videos found!</h2>
        ) : (
          videos?.map((video, index) => (
            <Card
              playingVideo={playingVideo}
              video={video}
              key={video.etag + index}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Videos;
