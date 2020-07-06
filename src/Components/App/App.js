import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [{ name: 'Muskurane', artist: 'Arijit Singh', album: 'City Lights', id: 1 },
      { name: 'Khamoshiyan', artist: 'Arijit Singh', album: 'Khamoshiya', id: 2 },
      { name: 'Samjhawan', artist: 'Arijit Singh', album: 'Badrinath ki Dulhaniya', id: 3 }],
      playlistName: 'Soulfull Songs',
      playlistTracks: [{ name: 'Shayad Kabhi', artist: 'Arijit Singh', album: 'Love Aaj Kal', id: 4 },
      { name: 'Tum Hi Hoo', artist: 'Arijit Singh', album: 'Aashiqui', id: 5 }]
    }

    this.addTrack = this.addTrack.bind(this);

    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    let newPlaylist = this.state.playlistTracks;
    newPlaylist.push(track);

    this.setState = { playlistTracks: newPlaylist };
  }

  removeTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      let newPlaylist = this.state.playlistTracks;
      newPlaylist.pop(track);

      this.setState = { playlistTracks: newPlaylist };
    }
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist 
              playlistName={this.state.playlistName} 
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}  />
          </div>
        </div>
      </div >
    )
  }
}

export default App;
