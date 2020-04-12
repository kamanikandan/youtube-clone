import React from "react";

const Player = ({ video, playingVideo }) => {
  const videoId = video?.id?.videoId;
  const browserSize = {
    width: window.innerWidth || document.body.clientWidth,
    height: window.innerHeight || document.body.clientHeight,
  };
  if (!videoId) return null;
  return (
    <>
      <div className="overlay" onClick={() => playingVideo({})}></div>
      <div className="video-container">
        <div className="video-box">
          <span
            className="close"
            title="Close"
            onClick={() => playingVideo({})}
          >
            X
          </span>
          <iframe
            title={video.snippet.title}
            width={browserSize.width * 0.8}
            height={
              browserSize.height > browserSize.width
                ? browserSize.height * 0.5
                : browserSize.height * 0.75
            }
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Player;
