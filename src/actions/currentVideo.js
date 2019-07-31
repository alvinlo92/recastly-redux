var changeVideo = (video) => ({
  //TODO:  Return some action object to change the currently playing video.
  //type is updateCurrentVideo
  //payload is video
  //return action object
  type: 'CHANGE_VIDEO',
  video: video
});

export default changeVideo;
