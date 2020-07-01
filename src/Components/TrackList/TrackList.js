import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component {
    render() {
        const tracks = this.props.tracks;
        return (
            <div className="TrackList">
                {
                    tracks.map(track => {
                        return <Track key={track.id} track={track} />
                    })
                }
            </div>
        )
    }
}

export default TrackList;