import React from 'react';
import youtubeApi from '../youtubeApi/youtubeApi'
import SearchBar from './SearchBar';
import VideoList from './VideoList';

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
    })
    console.log(response);
  };
  handleVideoSelect = (video) => {
    this.setState({selectedVideo: video})
  }

  render() {
    return(
      <div>
        <SearchBar handleFormSubmit={this.handleSubmit} />
        <div>
          <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos} />
        </div>
      </div>
    )
  }
};

export default App;