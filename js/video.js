var videoplayer = document.getElementById("videoplayer");
var myvideo = document.getElementById("myvideo");

function stopvideo() {
  videoplayer.style.display = "none";
}
function playvideo(file) {
  myvideo.href = file;
  videoplayer.style.display = "block";
}
