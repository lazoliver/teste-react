import React from 'react';
import youtubeApi from '../../youtubeApi/youtubeApi'

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
      <h1>Hello World</h1>
    )
  }
};

export default App;