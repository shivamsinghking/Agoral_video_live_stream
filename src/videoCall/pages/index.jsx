import React from 'react';
import '../rtc-client'
import '../style.css'

const VideoCall = () => {

    return (
        <div>
            <h1>Video Call</h1>
            <div id="me"></div>
            <h1>Remote User</h1>
            <div id="remote-container"></div>
        </div>
    )
}

export default VideoCall;