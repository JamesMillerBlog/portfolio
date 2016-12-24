
//** VIDEO LOGIC **//
//loop through each iframe and create a video player for it
function onYouTubeIframeAPIReady() {
  var iframes = document.querySelectorAll('.yPlayer')
  for(videoList = 0; videoList < iframes.length;videoList++) players[videoList] = createPortfolioPlayers(iframes[videoList], videoList);
  loadFullScreenVideoPlayer();
}
//create a player and call a function when its ready to play
function createPortfolioPlayers(playerInfo, idNumber) {
  var src = $("#"+playerInfo.id).attr('src');
  YouTubeGetID(src);
  playerYoutubeIds[idNumber]=ID;
  // console.log("player info "+ playerInfo.id+ " = " +idNumber);
  return new YT.Player(playerInfo.id, {
     events: {
        'onReady': onPortfolioPlayerReady,
        'onStateChange': onPortfolioPlayerStateChange      
     }
  });
}
function loadFullScreenVideoPlayer(){
  player = new YT.Player('fullscreenVideoPlayer', {
    height: '100%',
    width: '100%',
    // videoId: 'M7lc1UVf-VE',
    events: {
       'onReady': onFullScreenPlayerReady,
       'onStateChange': onFullScreenPlayerStateChange
    }
  });
}
function onFullScreenPlayerReady(event){
  // var playerID = YT.get('#player3');
  // alert(playerID)
}

//when its ready to be played make sure that all the other videos are loaded, and then allow users to play the videos
function onPortfolioPlayerReady(event){
  //bind events
  isLoaded++;
  // var id = players[isLoaded].getVideoData()['video_id'];
  // console.log("video id = "+id);
  var src = $('iframe',this).attr('src');
  // console.log("video id = "+playerInfoID);
  event.target.mute();
  if(isLoaded == videoList){
    // YouTubeGetID("https://www.youtube.com/embed/abU5I9Tj6ZU?enablejsapi=1&loop=1&modestbranding=1&playlist=abU5I9Tj6ZU&rel=0&showinfo=0");
    console.log("videos ready");
    isReady = true;
  } 
}
//loop through and pause all videos
function pauseAllVideos(){
  for(var x = 0; x < videoList; x++){
    players[x].pauseVideo();
  }
}

function onPortfolioPlayerStateChange(event) {
  myPlayerState = event.data;
  if (isHover!= 'container' && isReady == true) animateIn();
  //if video is played on mobile
  if(myPlayerState == 1) if(isMobile) players[lastVideo].seekTo(0).unMute();
  //if video is paused or stopped on mobile
  if(myPlayerState == 2 || myPlayerState == 0) if(isMobile) players[lastVideo].mute();
   
}

function onFullScreenPlayerStateChange(event){
  videoLoaderState = event.data;
  if(selectedVidLoader == 1 && videoLoaderState == 3) player.unMute().playVideo();
  if(videoLoaderState == 1) selectedVidLoader ++;
}

function YouTubeGetID(url){
  ID = '';
  url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  if(url[2] !== undefined) {
    ID = url[2].split(/[^0-9a-z_\-]/i);
    ID = ID[0];
  }
  else {
    ID = url;
  }
  return ID;
}

function fullScreenMobile(){
  players[lastVideo].playVideo();
  wasPlayed = lastVideo;
  staticHome();
}

function fullScreenVideoPlayer(portfolioSelection){
  console.log(portfolioSelection);
  console.log(player);
  console.log(playerYoutubeIds[portfolioSelection]);
  if(playerYoutubeIds[portfolioSelection] != wasPlayed) player.loadVideoById(playerYoutubeIds[portfolioSelection]);
  else player.unMute().playVideo();
  wasPlayed = playerYoutubeIds[portfolioSelection];
  //animate video
  $("#" + isHover + " .videoContainer").css({'height': '100%', 'width':'100%','bottom':0,'right':0,'left':0, 'top':'0'});
  $("#" + isHover ).css({'position':'fixed'});
  $("#" + isHover + " .content" ).css({'display':'none'});
  $("#" + isHover + " .videoPlayer").css({'overflow': 'visible','bottom':0,'right':0,'left':0, 'top':0});
  $("#" + isHover + " .videoPlayer iframe").css({'width': '100%', 'height': '100%','bottom':0,'right':0,'left':0, 'top':0});
  $("#" + isHover).stop().animate({'width':'100%', 'height':'100%', 'left':0, 'top':0, 'right':0, 'bottom':0, 'margin-top': 0, 'margin-left':0},{complete: function(){ 
        $("#" + isHover ).css({'z-index': '-1000'});
        $('#fullscreenVideoPlayer').css({'display':'block'});  
        $('#container, .animatingPage, iframe').css({'display':'none'}); 
        $('#fullscreenVideoPlayer, #videoExit').css({'display':'block'}); 
  }}); 
  $('#fullscreenVideoPlayer, #videoExit').stop().animate({'opacity':'1', 'background-color':"black"});

  // setTimeout(function(){
  //   $('#container, .animatingPage, iframe').css({'display':'none'}); 
  //   $('#fullscreenVideoPlayer, #videoExit').css({'display':'block'}); 
  // }, 3000);   

  players[portfolioSelection].pauseVideo().seekTo(0);
  if(selectedVidLoader == 0) {
    selectedVidLoader++;
  }
  // alert(playerYoutubeIds[portfolioSelection]);
}

function exitFullScreen(){
  clickedVideo = false; 
  player.mute().pauseVideo();
  $('#fullscreenVideoPlayer, #videoExit, #container, .animatingPage, #' + isHover + ' .videoContainer, #'+ isHover+', #'+isHover+' .content, #'+isHover+' .videoPlayer, #'+isHover+' .videoPlayer iframe, #container, .animatingPage, iframe').css({'height': '', 'width':'','bottom':'','right':'','left':'', 'top':'', 'display': '', 'opacity':'', 'overflow': '', 'position':'', 'z-index':''});
  // $("#" + isHover + " .videoContainer, #fullscreenVideoPlayer, #videoExit, #container, .animatingPage, #" + isHover + " .content", "#" + isHover + " .videoPlayer iframe, #" + isHover + " .videoPlayer").css({'height': '', 'width':'','bottom':'','right':'','left':'', 'top':'', 'display': '', 'opacity':'', 'overflow': '', 'position':''});
  checkPositions();
}
