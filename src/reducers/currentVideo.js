import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  switch (action.type) {
  case 'CHANGE_VIDEO':
    return action.video;
  default:
    return state;
  }
  //TODO: define a reducer for the currentVideo field of our state.
};

export default currentVideoReducer;
