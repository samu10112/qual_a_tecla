var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var img_width = 300;
var img_height = 100;
var img_image;
var img_x = 100;
var img_y = 100;
var img_imgTag;

function add() {
	img_imgTag = new Image();
	img_imgTag.onload = uploadimg;
	img_imgTag.src = img_image;
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	var keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed <=122)||(keyPressed>=65 && keyPressed <=90)){
			aplhabetkey();
			document.getElementById("d1").innerHTML="você pressionou uma tecla do alfabeto";
			console.log("alphabet key");
		}
		else if((keyPressed >=45 && keyPressed <=57)){
			numberkey();
			document.getElementById("d1").innerHTML="você pressionou uma tecla de número";
			console.log("number key"); 
		}
		else if((keyPressed >=37 && keyPressed <=40)){
			arrowkey();
			document.getElementById("d1").innerHTML="você pressionou uma tecla do direcional";
			console.log("arrow key");
		}
		else if(keyPressed ==17 || keyPressed ==18 ||keyPressed ==27){
			specialkey();
			document.getElementById("d1").innerHTML="você pressionou uma tecla especial";
			console.log("special key");
		}
		else{
			otherkey();
			document.getElementById("d1").innerHTML="você pressionou uma outra tecla";
			console.log("other key");
		}
	
}

function aplhabetkey()
{
		img_image="alfabeto.png"
	add();

}
function numberkey()
{
		img_image="número.png";
	add();
}
function arrowkey()
{
		img_image="direcional.png";
	add();
}
function specialkey()
{
		img_image="especial.png";
	add();
}
function otherkey()
{
		img_image="outras.png";
	add();
}