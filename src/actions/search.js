import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  // var keySearch = {
  //   key: YOUTUBE_API_KEY
  // };
  // var key = YOUTUBE_API_KEY;
  return dispatch => searchYouTube({YOUTUBE_API_KEY, q}, (videos) => {
    dispatch(changeVideo(videos[0]));
    dispatch(changeVideoList(videos));
  });
  // function search() {
  //   return {
  //     type: 'SEARCH_PARAMETER',
  //     videos: q
  //   };
  //TODO:  Write an asynchronous action to handle a video search!
};

export default handleVideoSearch;
