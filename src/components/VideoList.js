import React from 'react';

import VideoItem from './VideoItem';

const VideoList = ({ videos, setSelectedVideo }) => {
  const videoList = videos.map((video, idx) => {
    if (video.id.kind !== 'youtube#channel') {
      return (
        <VideoItem
          key={idx}
          video={video}
          setSelectedVideo={setSelectedVideo}
        />
      );
    }
  });

  return <div>{videoList}</div>;
};

export default VideoList;
