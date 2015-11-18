"use strict"
var interval = 3000;
var numberOfBlocks = 9;
var numberOfTarget = 3;
var targetBlocks = [];
var selectedBlocks = [];
var timer;

document.observe('dom:loaded', function(){
	$("start").onclick = stopToStart;
	$("stop").onclick = stopGame;
});

function stopToStart(){
    stopGame();
    startToSetTarget();
}

function stopGame(){
	$("state").innerHTML = "Stop";
	$("answer").innerHTML = "0/0";
	clearTimeout(timer);
	for (var i=0; i<length; i++) {
		targetBlocks = [];
		selectedBlocks = [];
	}
}

function startToSetTarget(){
	$("state").innerHTML = "Ready!";
	$("answer").innerHTML = "0/0";
	timer = 0;
	targetBlocks = [];
	selectedBlocks = [];
	for (var i=0; i<3; i++) {
		var num = Math.floor(Math.random()*9);
		targetBlocks[i] = num;
		for(var j=0; j<i; j++) {
			if(targetBlocks[i] == targetBlocks[j]){
				i--;
			}
		}
	}
	timer = setInterval(setTargetToShow, interval);
}

function setTargetToShow(){
	$("state").innerHTML = "Memorize!";
	var index = $$(".block");
	for (var i=0; i<3; i++) {
		index[targetBlocks[i]].addClassName("target");
	}
	timer = setInterval(showToSelect, interval);
}

function showToSelect(){
	$("state").innerHTML = "Select!";
	var index = $$(".block");
	for (var i=0; i<3; i++) {
		index[targetBlocks[i]].removeClassName("target");	
	}
	for (var i=0; i<index.length; i++) {
		index[i].observe("click",function() {
			if(selectedBlocks.length < numberOfTarget && !this.hasClassName("selected")) {
				this.addClassName("selected");
				selectedBlocks.push(parseInt(this.getAttribute("data-index")));
			}
		});
	}
	timer = setInterval(selectToResult, interval);
}

function selectToResult(){
	$("state").innerHTML = "Checking";
	var index = $$(".block");
	for(var i=0; i<index.length; i++) {
		index[i].removeClassName("selected");
		index[i].stopObserving("click");
	}
	timer = setInterval(startToSetTarget, interval);
}
