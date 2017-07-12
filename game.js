var game = false;
var showText = function(target, message, index, interval) {
    var result = " ";
    var i = 0;
	if(message.length > i) {
  	result = message.substring(index, index + 1);
    document.getElementById(target).append(result);
  	setTimeout(function() {showText(target, message.substring(index - message.length), index + 1, interval);}, interval);
        
    }
    if (game === true && message.length <= i) {
            input();
    }
    
}

function intro() {
    setTimeout(function() {showText("intro1", "Welcome to",0,60);},900);
    setTimeout(function() {showText("intro2", "The Collapse of SONO Industries",0,60);},1700);
    setTimeout(function() {showText("intro3", "Story Written By Rachel A. Boal and Programmed by Emily Zimmerman",0,60);},3700);
}

function startGame() {
    game = true;
    document.getElementById("content1").style.opacity = "0";
    document.getElementById("content2").style.opacity = "1";
    setTimeout(function() {document.getElementById("content2").style.width = "100%";},1900);
    setTimeout(function() {document.getElementById("content1").style.width = "0";}, 1900);
    setTimeout(function() {showText("text", "You wake up. It is cold and dark. There is a computer in the corner. Its screen flickers gently, creating a soft glow. *ERROR* You crawl towards the light, and notice numbers on the screen. They are the same numbers scrawn hastily on the collar of your clothes. You realize it is a log made up of numerous entries dating back for months. The most recent entry is dated \"June 8th, 2017\" you must have been sleeping for a very long time.", 0, 60);}, 3000);

}

// add line break before the input

function input() {
    document.getElementById("text").appendChild(document.createElement("br"));
    document.getElementById("text").append("> ");
    var x = document.createElement("INPUT");
    x.setAttribute("id", "input-box");
    x.setAttribute("type", "text");
    x.setAttribute("autofocus", "true");
    x.setAttribute("onkeydown", "handleKeyPress(this)");
    document.getElementById("text").append(x);
}

function handleKeyPress(e){
    var text = e.value;
    var key=event.keyCode || e.which;
    if (key==13){
        alert("you typed: " + text);
        keyPressEvent(text);
    }
}

function keyPressEvent(input) {
    document.getElementById("text").append(" " + input);
    document.getElementById("input-box").style.display = "none";
    document.getElementById("text").appendChild(document.createElement("br"));
    if (input.toUpperCase() === "help".toUpperCase()) {
        showText("text","here is help",0,60);
    }
    else {
        
    }
    input();
}

// make intro text with JS
// make text fit in page ^
