import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

var videoPlayerProps = () => {};

var videoPlayerDispatchToProps = () => {};

var VideoPlayerContainer = connect(videoPlayerProps, videoPlayerDispatchToProps)(VideoPlayer);
//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;