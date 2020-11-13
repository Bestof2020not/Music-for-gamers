alert("Das ist eine Platfrom für gamer Musik")

//function onYouTubeIframeAPIReady() {

  var knopf = document.getElementById('knopf');
  var video1 = new YT.Player('video1');
  //var video2 = new YT.Player('video2');
  
  knopf.addEventListener('click', function () {
   video1.playVideo();
   
  });

  knopf.addEventListener('click', function () {
   video1.pauseVideo();
   
  });

  
}


//function onYouTubeIframeAPIReady() {

  var knopf2 = document.getElementById('knopf2');
  var video2 = new YT.Player('video2');
  //var video2 = new YT.Player('video2');
  
  knopf2.addEventListener('click', function () {
  
   video2.playVideo();
  });

  knopf2.addEventListener('click', function () {
  
   video2.pauseVideo();
  });

  
}


