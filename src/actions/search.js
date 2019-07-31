import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {

  //TODO:  Write an asynchronous action to handle a video search!
  let options = {
    part: 'snippet',
    maxResults: 5,
    q: q,
    videoEmbeddable: true,
    key: YOUTUBE_API_KEY,
    type: 'video'
  };

  $.get('https://www.googleapis.com/youtube/v3/search', options, (data) => {
    changeVideo(data.items[0]);
    changeVideoList(data.items);
  });

};

export default handleVideoSearch;
