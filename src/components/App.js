import React from 'react';
import youtubeApi from '../youtubeApi/youtubeApi'
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import '../styles/styles.css';
class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null 
  }
  handleSubmit = async(textFromSearchBar) => {
    const response = await youtubeApi.get('/search', {
      params: {
        q: textFromSearchBar
      }
    })

    this.setState({
      videos: response.data.items
    });
  };
  handleVideoSelect = (video) => {
    this.setState({selectedVideo: video})
  }

  render() {
    return(
      <div>
        <SearchBar handleFormSubmit={this.handleSubmit} />
        <div>
          <VideoDetail video={this.state.selectedVideo} />
        </div>
        <div>
          <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos} />
        </div>
      </div>
    )
  }
};

export default App;