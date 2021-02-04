// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null, 
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    // handle methods 
    handleBitClick = () => {
        this.setState(previousState => {
            return{
                settings: {
                    ...previousState.settings,
                    bitrate: 12
                }
            }
        })
    }

    handleResolution = () => {
        this.setState(previousState => {
            return {
                settings: {
                    ...previousState.settings,
                    video: {
                        resolution: '720p'
                    }
                }
            }
        })
    }

    // render 
    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.handleBitClick}></button>
                <button className="resolution" onClick={this.handleResolution}></button>
            </div>
        )
    }
}