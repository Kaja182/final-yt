import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCWdrwxk4u3WCrpvdO0R5RZ974Cfm2oMbA';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.onVideoSelect = this.onVideoSelect.bind(this);
    this.videoSearch = this.videoSearch.bind(this);
    this.videoSearch('slovenia');
  }

  onVideoSelect(video) {
    this.setState({
      selectedVideo: video
    })
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (data) => {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }

  render() {
    return(
      <div>
        <SearchBar videoSearch={this.videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.onVideoSelect} //selectedVideo:selectedVideo
          videos={this.state.videos} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
