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
      <div>
        <SearchBar searchHandler={searchHandler} />
      </div>
      <div>
        <div>
          <VideoDetail video={selectedVideo} />
        </div>
        <div>
          <VideoList videos={videos} setSelectedVideo={setSelectedVideo} />
        </div>
      </div>
    </div>
  );
}

export default App;
