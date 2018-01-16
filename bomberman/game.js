var array = [[2, 2, 2, 2, 2, 2],
			[2, 0, 1, 1, 1, 2],
			[2, 0, 0, 1, 0, 2],
			[2, 0, 1 ,1, 0, 2],
			[2, 0, 0, 0, 0, 2],
			[2, 0, 1, 1, 1, 2],
			[2, 0, 0, 1, 0, 2],
			[2, 2, 2, 2, 2, 2]];

function createMap(array) {
	for (var x = 0; x < array.length; x++) {
		for (var y = 0; y < array[x].length; y++) {
			get = document.getElementById("game");
			create = document.createElement("div");
			var obj = get.appendChild(create);
			switch (array[x][y]) {
				case 0:
				obj.classList.add("block00");
				break;
				case 1:
				obj.classList.add("block11");
				break;
				case 2:
				obj.classList.add("block22");
				break;
			}
		}
var obj2 = get.appendChild(document.createElement("div")).className += "clearfix";
	}
}
createMap(array);

function searchFirstTilePosition(){
	var length = document.getElementsByClassName("block00").length;
	var randomTile = Math.floor((Math.random() * 14) + 1);
	var position = [];
	position.push(document.getElementsByClassName("block00")[randomTile].getBoundingClientRect().top + 5);
	position.push(document.getElementsByClassName("block00")[randomTile].getBoundingClientRect().left + 5);
	return position;
}

function showImage(src, width, height, top, left) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.setAttribute("style", "position: absolute; top: " + top + "px; left: " + left + "px");
    img.setAttribute("id", "player");

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}

if(document.getElementsByClassName("block00")[0]) {
		top = searchFirstTilePosition()[0];
    	left = searchFirstTilePosition()[1];	
		showImage("player.png", "35", "35", top, left);
	}

function move() {

	document.addEventListener("keydown", function(event) {
  	var key = (event.keyCode);
  	var currentPositionTop = document.getElementById("player").getBoundingClientRect().top;
	var currentPositionLeft = document.getElementById("player").getBoundingClientRect().left;

	switch (key) {
		case 40:
		showImage("player.png", "35", "35", currentPositionTop +48, currentPositionLeft);
		break;

		case 38:
		showImage("player.png", "35", "35", currentPositionTop -48, currentPositionLeft);
		break;

		case 37:
		showImage("player.png", "35", "35", currentPositionTop, currentPositionLeft -48);
		break;

		case 39:
		showImage("player.png", "35", "35", currentPositionTop, currentPositionLeft +48);
		break;

		default:
		break;
	}}
	)
};

move();