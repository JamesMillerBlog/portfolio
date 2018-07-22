/*eslint-env browser*/
import React, { Component } from 'react';
import YoutubePlayer from 'react-youtube-player';
import { connect } from 'react-redux';
import { fetchActiveItem } from './../../../../actions';
import videoConfig from './assets/config/videoConfig';
import './assets/scss/Video.scss';

class Video extends Component {
	constructor(props) {
		super(props);
		this.escFunction = this.escFunction.bind(this);
	}
	componentDidMount() {
		document.addEventListener('keydown', this.escFunction, false);
	}
	componentWillUnmount() {
		document.removeEventListener('keydown', this.escFunction, false);
	}

	getDeviceType() {
		if (this.props.deviceType === 'laptop') return 'playing';
		return 'paused';
	}

	escFunction(event) {
		if (event.keyCode === 27 && this.props.activeItem !== 'hidden') this.exitVideo();
	}

	playing() {
		// test
	}

	videoContent(selectedVideo, playerState) {
		if (selectedVideo === 'hidden') return null;
		return (
			<div className={`videoPlayer video${selectedVideo}`}>
			<div className="exitBtn" onClick={this.exitVideo} />
			<YoutubePlayer
				videoId={videoConfig[selectedVideo].videoID}
				// MAKE THIS DEPENDENT ON DEVICE TYPE
				// IF LAPTOP START PLAYING ELSE PAUSED
				playbackState={playerState}
				onPlay={this.playing}
				onEnd={this.exitVideo}
				configuration={{
					showinfo: 0,
					controls: 1,
					frameborder: 0,
					rel: 0,
					fs: 0,
					origin: 'https://www.youtube.com'
				}}
			/>
			</div>
		);
	}

	render() {
		const item = this.props.activeItem;

		this.exitVideo = () => {
			this.props.fetchActiveItem('hidden');
		};

		return (
			this.videoContent(item, this.getDeviceType())
		);
	}

}

// player.getPlayerState():Number

// map the state of data called from fetchUsers to users[state.users]
const mapStateToProps = (state) => ({
		activeItem: state.activeItem,
		deviceType: state.deviceType
	});

export default connect(mapStateToProps, { fetchActiveItem })(Video);