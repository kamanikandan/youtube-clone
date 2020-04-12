import React from "react";

const Card = ({ video, playingVideo }) => {
  const openVideo = (video) => {
    playingVideo(video);
  };

  return (
    <div
      className="card"
      onClick={() => openVideo(video)}
      title={video.snippet.title}
    >
      <div className="card-image">
        <img
          src={video.snippet.thumbnails.high.url}
          alt={video.snippet.title}
          className="card-img"
        />
      </div>
      <div className="card-content">
        <h4>{video.snippet.title}</h4>
        <h6>{new Date(video.snippet.publishedAt).toDateString()}</h6>
        <a
          rel="noopener noreferrer"
          target="_blank"
          title={video.snippet.channelTitle}
          onClick={(e) => e.stopPropagation()}
          href={`https://www.youtube.com/channel/${video.snippet.channelId}`}
        >
          {video.snippet.channelTitle}
          <span aria-label="External Link" role="img">
            🔗
          </span>
        </a>
      </div>
    </div>
  );
};

export default Card;
