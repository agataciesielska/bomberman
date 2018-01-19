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

function showPacman(top, left) {
    var img = document.createElement("img");
    img.src = "player.png";
    img.setAttribute("style", "width: 35px; height: 35px; position: absolute; top: " + top + "px; left: " + left + "px");
    img.setAttribute("id", "player");

    display = document.body.appendChild(img);
}

var pacmanPosition = [];

if(document.getElementsByClassName("block00")[0]) {
		top22 = searchFirstTilePosition()[0];
    	left = searchFirstTilePosition()[1];	
		showPacman(top22, left);
		var pacmanPosition = [top22, left];
	}

function move() {

	document.addEventListener("keydown", function(event) {
  	var key = (event.keyCode);

	switch (key) {
		case 40:
		pacmanPosition[0] += 48;
		break;

		case 38:
		pacmanPosition[0] -= 48;
		break;

		case 37:
		pacmanPosition[1] -= 48;
		break;

		case 39:
		pacmanPosition[1] += 48;
		break;

		default:
		break;
	}})

};

move();
showPacman(pacmanPosition[0], pacmanPosition[1]);

