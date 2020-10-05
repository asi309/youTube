import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <h2>Search for a video</h2>;
  }
  const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div>
        <iframe width="512" height="288" src={videoUrl} />
      </div>
      <div>
        <h3>{video.snippet.title}</h3>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
