import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';
import VideoListEntry from './../components/VideoListEntry.js';
import store from './../store/store.js';

var videoListProps = (VideoList) => {
};

var videoListDispatchToProps = (dispatch) => {
  return {
    handleVideoListEntryTitleClick () {
      dispatch();
    }
  };
};

var VideoListContainer = connect(videoListProps, videoListDispatchToProps)(VideoList); // maybe this should be delegating to VideoListEntry?

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;
