import Redux from 'redux';

var currentVideoReducer = (state, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  if (action.type === 'CHANGE_VIDEO') {
    return {
      videoList: state.videoList.map((video) => (video)),
      currentVideo: action.video
    }
  } else {
    return state;
  }
};

export default currentVideoReducer;
