import React from 'react';

const VideoItem = ({video, setSelectedVideo}) => {
  return (
    <div onClick={() => setSelectedVideo(video)}>
      <img src={video.snippet.thumbnails.medium.url} />
      <div>
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoItem;