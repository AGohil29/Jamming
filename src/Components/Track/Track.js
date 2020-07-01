import React from 'react';
import './Track.css';

class Track extends React.Component {
    renderAction() {
        let buttonContent;
        if (this.props.isRemoval) {
            buttonContent = '-';
        } else {
            buttonContent = '+';
        }
        return (
            <button className="Track-action">{buttonContent}</button>
        )
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                <button className="Track-action">-</button>
            </div>
        )
    }
}

export default Track;