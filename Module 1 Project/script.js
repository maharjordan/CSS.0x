var i = 1;
var j = 0;

var text_content = ['H','E','L','L','O',' ','B','E','A','U','T','I','F','U','L',' ','W','O','R','L','D'];

function image_loop(){
	setTimeout(function() {
		document.getElementById("world_image").style.opacity = i/10;
		i++;
		if(i < 10){
			image_loop();
		}
	}, 50)
}

function text_loop(){
	setTimeout(function() {
		document.getElementById("world_text").innerHTML = document.getElementById("world_text").innerHTML + text_content[j];
		j++;
		if(j < text_content.length){
			text_loop();
		}
	}, 100)
}

function load_page(){
	image_loop();
	text_loop();
}