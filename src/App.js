import React, { useState } from 'react';
import api, { key } from './services/api';

import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';

import './App.css';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const searchHandler = async (query) => {
    const response = await api.get('/search', {
      params: {
        q: query,
        part: 'snippet',
        maxResults: 6,
        key,
      },
    });
    const videos = response.data.items;
    const video = videos[0].kind === 'youtube#channel' ? videos[1] : videos[0];
    setVideos(videos);
    setSelectedVideo(video);
  };

  return (
    <div className="App">
      <div id="searchbar">
        <SearchBar searchHandler={searchHandler} />
      </div>
      {!selectedVideo ? (
        <h2 style={{ textAlign: 'center', paddingTop: '20px' }}>Search for a video</h2>
      ) : (
        <div id="video-container">
          <div id="main-video">
            <VideoDetail video={selectedVideo} />
          </div>
          <div id="video-list">
            <VideoList videos={videos} setSelectedVideo={setSelectedVideo} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
