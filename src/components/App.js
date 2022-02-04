import React from 'react';
import youtubeApi from '../youtubeApi/youtubeApi'
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import '../styles/styles.css';
class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  }
  handleSubmit = async(textFromSearchBar) => {
    const response = await youtubeApi.get('/search', {
      params: {
        q: textFromSearchBar
      }
    })

    this.setState({
      videos: response.data.items
    }, console.log(response));
  };
  handleVideoSelect = (video) => {
    this.setState({selectedVideo: video})
  }

  render() {
    return(
      <div className="home">
        <SearchBar handleFormSubmit={this.handleSubmit} />
        <div className="iframe">
          <VideoDetail video={this.state.selectedVideo} />
        </div>
        <div className='video-list-items'>
          <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos} />
        </div>
      </div>
    )
  }
};

export default App;