import React from 'react';

const VideoDetail = ({ video }) => {
  const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <>
      <div>
        <iframe width="512" height="288" src={videoUrl} title={video.snippet.title} />
      </div>
      <div>
        <h3>{video.snippet.title}</h3>
        <p>{video.snippet.description}</p>
      </div>
    </>
  );
};

export default VideoDetail;
