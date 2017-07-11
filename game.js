var showText = function(target, message, index, interval) {
    var result = " ";
    var i = 0;
	if(message.length > i) {
  	result = message.substring(index, index + 1);
    document.getElementById(target).append(result);
  	setTimeout(function() {showText(target, message.substring(index - message.length), index + 1, interval);}, interval);
    }
}

function intro() {
    setTimeout(function() {showText("intro1", "Welcome to",0,60);},900);
    setTimeout(function() {showText("intro2", "The Collapse of SONO Industries",0,60);},1700);
    setTimeout(function() {showText("intro3", "Story Written By Rachel A. Boal and Programmed by Emily Zimmerman",0,60);},3700);
}

function startGame() {
    document.getElementById("content1").style.opacity = "0";
    document.getElementById("content2").style.opacity = "1";
    setTimeout(function() {document.getElementById("content2").style.width = "100%";},1900);
    setTimeout(function() {document.getElementById("content1").style.width = "0";}, 1900);
    setTimeout(function() {showText("text", "You wake up. It is cold and dark. There is a computer in the corner. Its screen flickers gently, creating a soft glow. *ERROR* You crawl towards the light, and notice numbers on the screen. They are the same numbers scrawn hastily on the collar of your clothes. You realize it is a log made up of numerous entries dating back for months. The most recent entry is dated \"June 8th, 2017\" you must have been sleeping for a very long time.", 0, 60);}, 3000);
    setTimeout(function() {input();}, 29800);

}

function handleKeyPress(e){
    var text = e.value;
    var key=event.keyCode || e.which;
    if (key==13){
        alert("you typed: " + text);
  }
}

function input() {
    document.getElementById("content2").append("> ");
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("autofocus", "true");
    x.setAttribute("onkeydown", "handleKeyPress(this)");
    document.getElementById("content2").append(x);
}

// make intro text with JS
// make text fit in page ^
