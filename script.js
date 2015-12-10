$(document).ready(function() {
	input = 20
	makeGrid(input);
	sizeGrid(input);
	changeColor();
	buttonClick();
	resetColor();
	trailClick();
});

var makeGrid = function(input) {
i = 0
while (i < input*input) {
	$(".grid").append('<div class="square"></div>');
	i = i + 1
	}
};

var sizeGrid = function(input){
	w = 600/input
	$( ".square" ).css( "width", w )
	$( ".square" ).css( "height", w )
};

var changeColor = function() {
	$( ".square" ).mouseenter(function() {
    $(this).css("background-color", "white");
    });
};

var buttonClick = function() {
	$(".myButton").click(function(){
		input = prompt("lll");
		$(".square").remove();
		makeGrid(input);
		sizeGrid(input);
		changeColor();

	})
};

var resetColor = function() {
	$(".resetButton").click(function() {
		$(".square").css("background-color","blue")
	})
};

function trails() {
	$(".square").mouseenter(function() {
		$(this).fadeTo('slow', 0);
	});

	$(".square").mouseleave(function() {
		$(this).fadeTo('slow', 1);
	});
	$( ".square" ).mouseleave(function() {
    	$(this).css("background-color", "gray");
	});
}

var trailClick = function() {
	$(".trail").click(function(){
		resetColor();
		trails();

	})
};


