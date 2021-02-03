import React from 'react'
import ReactPlayer from 'react-player'
import '../css/video.css'

const VideoHome = ({ url }) => {
    return (
        <div className="player-wrapper-home">
            <ReactPlayer
            className="react-player"
            url={url}
            width="100%"
            heigt="100%"
            controls={true}
            />
        </div>
    )
}

export default VideoHome;