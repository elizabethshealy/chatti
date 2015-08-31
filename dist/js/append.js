function talkOutput(x) {
  $('.list-all').prepend("<li class='bubble-left'><span>"+x+"</span></li>");
}

function formatBubbleLeft() {
  $(".bubble-left:contains(@)").css("font-style", "italic");
  $(".bubble-left:contains(@)").css("font-family", "Open Sans Condensed");
}

function stayVisible(){
var objDiv1 = document.getElementById("stayVisible");
objDiv1.scrollTop = objDiv1.scrollHeight;
}
