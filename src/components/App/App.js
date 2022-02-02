import React from 'react';
import youtubeApi from '../../youtubeApi/youtubeApi'
import SearchBar from '../SearchBar/SearchBar';

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

  render() {
    return(
      <div>
        <h1>Hello World</h1>
        <SearchBar />
      </div>
    )
  }
};

export default App;