// Author: Tony Winters
// SCSC399 USC Upstate
// Robotic Arm Simulator



// Variables -------------------------
// -----------------------------------
// -----------------------------------

var surface;
var base;
var joint1;
var joint2;
var joint3;
var joint4;
var joint5;
var joint6;
var elbow;
var arm;
var angle2 = 0;
var angle3 = 0;
var angle5 = 0;
var myTimer;
var surfaceContext;
var mode = 0;

// Image Declarations ----------------
// -----------------------------------
// -----------------------------------

joint2 = new Image();
joint2.src = "./images/joint2.png";
joint3 = new Image();
joint3.src = "./images/joint3.png";
joint4 = new Image();
joint4.src = "./images/joint4.png";
joint5 = new Image();
joint5.src = "./images/joint5.png";
joint6 = new Image();
joint6.src = "./images/joint6.png";
joint1 = new Image();
joint1.src = "./images/joint1.png";
elbow = new Image();
elbow.src = "./images/elbow.png";
base = new Image();
base.src = "./images/base.png";
arm = new Image();
arm.src = "./images/arm.png";



// Canvas Declaration ------------------
// -------------------------------------
// -------------------------------------

function drawCanvas() {
    surface = document.getElementById("myCanvas");

    if (surface.getContext) {
       
        initializeAll();  
     
    }
}

function initializeAll() {
    // Draws the arm in initial state
    surfaceContext = surface.getContext('2d');
  
    drawJoint1();
    drawBase();
    drawArm();
    drawElbow();
    drawJoint6();
    drawJoint2();
    drawJoint3();
    drawJoint4();
    drawJoint5();
    

}

// Draw Joint Methods ------------------------
//--------------------------------------------
//--------------------------------------------

function drawJoint2(){
	
    surfaceContext.drawImage(joint2, 25, 125);
}

function drawJoint3(){

	surfaceContext.drawImage(joint3, 115, 45);
}

function drawJoint4(){

	surfaceContext.drawImage(joint4, 220, 61);
}

function drawJoint5(){

    surfaceContext.drawImage(joint5, 235, 52);
}

function drawJoint6(){
   
    surfaceContext.drawImage(joint6, 260, 65);
}

function drawJoint1(){
	
	surfaceContext.drawImage(joint1, 30, 200);
}


function drawElbow(){
    
	surfaceContext.drawImage(elbow, 150, 60);
}

function drawBase(){

	surfaceContext.drawImage(base, 15, 300);
}

function drawArm(){

	surfaceContext.drawImage(arm, 40, 60);
}


// Rotate Joint Methods -----------------------------
//---------------------------------------------------
//---------------------------------------------------

function rotate2() {
   
	
     // Clear the canvas to White
    surfaceContext.fillStyle = "#999999";
    surfaceContext.fillRect(0, 0, surface.width, surface.height);

  	drawJoint1();
  	drawBase();
    surfaceContext.save();
    surfaceContext.translate((joint2.width * 0.5)+25, (joint2.height * 0.5)+125);
    surfaceContext.rotate(DegToRad(angle2));
    surfaceContext.translate((-joint2.width * 0.5)-25, (-joint2.height * 0.5)-125);  
    drawArm();
    drawJoint2();
    
    surfaceContext.translate((joint3.width * 0.5)+115, (joint3.height * 0.5)+45);
    surfaceContext.rotate(DegToRad(angle3));
    surfaceContext.translate((-joint3.width * 0.5)-115, (-joint3.height * 0.5)-45);
    drawElbow();
    drawJoint3();
    drawJoint4();
    
    surfaceContext.translate((joint5.width * 0.5)+235, (joint5.height * 0.5)+52);
    surfaceContext.rotate(DegToRad(angle5));
    surfaceContext.translate((-joint5.width * 0.5)-235, (-joint5.height * 0.5)-52);
    
    drawJoint6();
    drawJoint5();
    surfaceContext.restore();
    angle2++;

    
}

function rotate3(){

	surfaceContext.save();
    surfaceContext.fillStyle = "#999999";
    surfaceContext.fillRect(0, 0, surface.width, surface.height);

    drawJoint1();
  	drawBase();
  	
  	surfaceContext.translate((joint2.width * 0.5)+25, (joint2.height * 0.5)+125)
  	surfaceContext.rotate(DegToRad(angle2));
  	surfaceContext.translate((-joint2.width * 0.5)-25, (-joint2.height * 0.5)-125);
  	
	drawArm();
    drawJoint2();
    drawJoint3();
    
    surfaceContext.translate((joint3.width * 0.5)+115, (joint3.height * 0.5)+45);
    surfaceContext.rotate(DegToRad(angle3));
    surfaceContext.translate((-joint3.width * 0.5)-115, (-joint3.height * 0.5)-45);
    drawElbow();
    drawJoint4();
    drawJoint3();
    
    surfaceContext.translate((joint5.width * 0.5)+235, (joint5.height * 0.5)+52);
    surfaceContext.rotate(DegToRad(angle5));
    surfaceContext.translate((-joint5.width * 0.5)-235, (-joint5.height * 0.5)-52);
    
    drawJoint6();
    drawJoint5();
    
	//surfaceContext.drawImage(joint3, 115, 45);
	
    surfaceContext.restore();
    
    angle3++;
   

}

function rotate5(){

	surfaceContext.save();
    surfaceContext.fillStyle = "#999999";
    surfaceContext.fillRect(0, 0, surface.width, surface.height);

    drawJoint1();
  	drawBase();
  	
  	surfaceContext.translate((joint2.width * 0.5)+25, (joint2.height * 0.5)+125)
  	surfaceContext.rotate(DegToRad(angle2));
  	surfaceContext.translate((-joint2.width * 0.5)-25, (-joint2.height * 0.5)-125);
  	
	drawArm();
    drawJoint2();
    drawJoint3();
    
    surfaceContext.translate((joint3.width * 0.5)+115, (joint3.height * 0.5)+45);
    surfaceContext.rotate(DegToRad(angle3));
    surfaceContext.translate((-joint3.width * 0.5)-115, (-joint3.height * 0.5)-45);
    drawElbow();
    drawJoint4();
    drawJoint3();
    
    
    surfaceContext.translate((joint5.width * 0.5)+235, (joint5.height * 0.5)+52);
    surfaceContext.rotate(DegToRad(angle5));
    surfaceContext.translate((-joint5.width * 0.5)-235, (-joint5.height * 0.5)-52);
    drawJoint6();
    drawJoint5();
    
	drawJoint5();
	
    surfaceContext.restore();
    
    angle5++;
   

}

function rotate2Reverse() {
   
	
     // Clear the canvas to White
    surfaceContext.fillStyle = "#999999";
    surfaceContext.fillRect(0, 0, surface.width, surface.height);

  	drawJoint1();
  	drawBase();
    surfaceContext.save();
    surfaceContext.translate((joint2.width * 0.5)+25, (joint2.height * 0.5)+125);
    surfaceContext.rotate(DegToRad(angle2));
    surfaceContext.translate((-joint2.width * 0.5)-25, (-joint2.height * 0.5)-125);  
    drawArm();
    drawJoint2();
    
    surfaceContext.translate((joint3.width * 0.5)+115, (joint3.height * 0.5)+45);
    surfaceContext.rotate(DegToRad(angle3));
    surfaceContext.translate((-joint3.width * 0.5)-115, (-joint3.height * 0.5)-45);
    drawElbow();
    drawJoint3();
    drawJoint4();
    
    surfaceContext.translate((joint5.width * 0.5)+235, (joint5.height * 0.5)+52);
    surfaceContext.rotate(DegToRad(angle5));
    surfaceContext.translate((-joint5.width * 0.5)-235, (-joint5.height * 0.5)-52);
    
    drawJoint6();
    drawJoint5();
    surfaceContext.restore();
    angle2--;

    
}

function rotate3Reverse(){

	surfaceContext.save();
    surfaceContext.fillStyle = "#999999";
    surfaceContext.fillRect(0, 0, surface.width, surface.height);

    drawJoint1();
  	drawBase();
  	
  	surfaceContext.translate((joint2.width * 0.5)+25, (joint2.height * 0.5)+125)
  	surfaceContext.rotate(DegToRad(angle2));
  	surfaceContext.translate((-joint2.width * 0.5)-25, (-joint2.height * 0.5)-125);
  	
	drawArm();
    drawJoint2();
    drawJoint3();
    
    surfaceContext.translate((joint3.width * 0.5)+115, (joint3.height * 0.5)+45);
    surfaceContext.rotate(DegToRad(angle3));
    surfaceContext.translate((-joint3.width * 0.5)-115, (-joint3.height * 0.5)-45);
    drawElbow();
    drawJoint4();
    drawJoint3();
    
    surfaceContext.translate((joint5.width * 0.5)+235, (joint5.height * 0.5)+52);
    surfaceContext.rotate(DegToRad(angle5));
    surfaceContext.translate((-joint5.width * 0.5)-235, (-joint5.height * 0.5)-52);
    
    drawJoint6();
    drawJoint5();
    
	//surfaceContext.drawImage(joint3, 115, 45);
	
    surfaceContext.restore();
    
    angle3--;
   

}

function rotate5Reverse(){

	surfaceContext.save();
    surfaceContext.fillStyle = "#999999";
    surfaceContext.fillRect(0, 0, surface.width, surface.height);

    drawJoint1();
  	drawBase();
  	
  	surfaceContext.translate((joint2.width * 0.5)+25, (joint2.height * 0.5)+125)
  	surfaceContext.rotate(DegToRad(angle2));
  	surfaceContext.translate((-joint2.width * 0.5)-25, (-joint2.height * 0.5)-125);
  	
	drawArm();
    drawJoint2();
    drawJoint3();
    
    surfaceContext.translate((joint3.width * 0.5)+115, (joint3.height * 0.5)+45);
    surfaceContext.rotate(DegToRad(angle3));
    surfaceContext.translate((-joint3.width * 0.5)-115, (-joint3.height * 0.5)-45);
    drawElbow();
    drawJoint4();
    drawJoint3();
    
    
    surfaceContext.translate((joint5.width * 0.5)+235, (joint5.height * 0.5)+52);
    surfaceContext.rotate(DegToRad(angle5));
    surfaceContext.translate((-joint5.width * 0.5)-235, (-joint5.height * 0.5)-52);
    drawJoint6();
    drawJoint5();
    
	drawJoint5();
	
    surfaceContext.restore();
    
    angle5--;
   

}




// Converts Degrees to Radians ----------------
// --------------------------------------------
// --------------------------------------------

function DegToRad(d) {
    return d * 0.0174532925199432957;
}



// Action Listerners --------------------------
//---------------------------------------------
//---------------------------------------------

function buttonClicked(){
	myTimer = setInterval(rotate2, 50);

}

function buttonClickedBack(){
	myTimer = setInterval(rotate2Reverse, 50);

}

function joint3Clicked(){
	myTimer = setInterval(rotate3, 50);
}

function joint3ClickedBack(){
	myTimer = setInterval(rotate3Reverse, 50);
}

function joint5Clicked(){
	myTimer = setInterval(rotate5, 50);
}

function joint5ClickedBack(){
	myTimer = setInterval(rotate5Reverse, 50);
}

function buttonReleased(){
	clearInterval(myTimer);
}

// Button Selection Methods --------------------
// ---------------------------------------------
// ---------------------------------------------

function selectMe(whichClass){
	$(".functionButton").removeClass("selected");
	
	if (whichClass == 'x1') {
			$("#x1Button").addClass("selected");
	}else if(whichClass == 'y2'){
			$("#y2Button").addClass("selected");
	}else if(whichClass == 'z3'){
			$("#z3Button").addClass("selected");
	}else if(whichClass == 'rx'){
			$("#rx4Button").addClass("selected");
	}else if(whichClass == 'ry'){
			$("#ry5Button").addClass("selected");
	}else if(whichClass == 'rz'){
			$("#rz6Button").addClass("selected");
	}else if(whichClass == 't1'){
			$("#t1Button").addClass("selected");
	}else if(whichClass == 'step'){
			$("#stepButton").addClass("selected");
	}
	
}

// Drive Methods -------------------------------
// ---------------------------------------------
// ---------------------------------------------

function forward(speed){


	
	if($('#y2Button').hasClass('selected') && speed == '1'){
		myTimer = setInterval(rotate2, 90);
	}else if($('#y2Button').hasClass('selected') && speed == '2'){
		myTimer = setInterval(rotate2, 70);
	}else if($('#y2Button').hasClass('selected') && speed == '3'){
		myTimer = setInterval(rotate2, 50);
	}else if($('#y2Button').hasClass('selected') && speed == '4'){
		myTimer = setInterval(rotate2, 30);
	}else if($('#y2Button').hasClass('selected') && speed == '5'){
		myTimer = setInterval(rotate2, 10);
	}else if($('#z3Button').hasClass('selected') && speed == '1'){
		myTimer = setInterval(rotate3, 90);
	}else if($('#z3Button').hasClass('selected') && speed == '2'){
		myTimer = setInterval(rotate3, 70);
	}else if($('#z3Button').hasClass('selected') && speed == '3'){
		myTimer = setInterval(rotate3, 50);
	}else if($('#z3Button').hasClass('selected') && speed == '4'){
		myTimer = setInterval(rotate3, 30);
	}else if($('#z3Button').hasClass('selected') && speed == '5'){
		myTimer = setInterval(rotate3, 5);
	}else if($('#ry5Button').hasClass('selected') && speed == '1'){
		myTimer = setInterval(rotate5, 90);
	}else if($('#ry5Button').hasClass('selected') && speed == '2'){
		myTimer = setInterval(rotate5, 70);
	}else if($('#ry5Button').hasClass('selected') && speed == '3'){
		myTimer = setInterval(rotate5, 50);
	}else if($('#ry5Button').hasClass('selected') && speed == '4'){
		myTimer = setInterval(rotate5, 30);
	}else if($('#ry5Button').hasClass('selected') && speed == '5'){
		myTimer = setInterval(rotate5, 10);
	}
	

}

function reverse(speed){
	if($('#y2Button').hasClass('selected') && speed == '5'){
		myTimer = setInterval(rotate2Reverse, 90);
	}else if($('#y2Button').hasClass('selected') && speed == '4'){
		myTimer = setInterval(rotate2Reverse, 70);
	}else if($('#y2Button').hasClass('selected') && speed == '3'){
		myTimer = setInterval(rotate2Reverse, 50);
	}else if($('#y2Button').hasClass('selected') && speed == '2'){
		myTimer = setInterval(rotate2Reverse, 30);
	}else if($('#y2Button').hasClass('selected') && speed == '1'){
		myTimer = setInterval(rotate2Reverse, 10);
	}else if($('#z3Button').hasClass('selected') && speed == '5'){
		myTimer = setInterval(rotate3Reverse, 90);
	}else if($('#z3Button').hasClass('selected') && speed == '4'){
		myTimer = setInterval(rotate3Reverse, 70);
	}else if($('#z3Button').hasClass('selected') && speed == '3'){
		myTimer = setInterval(rotate3Reverse, 50);
	}else if($('#z3Button').hasClass('selected') && speed == '2'){
		myTimer = setInterval(rotate3Reverse, 30);
	}else if($('#z3Button').hasClass('selected') && speed == '1'){
		myTimer = setInterval(rotate3Reverse, 5);
	}else if($('#ry5Button').hasClass('selected') && speed == '5'){
		myTimer = setInterval(rotate5Reverse, 90);
	}else if($('#ry5Button').hasClass('selected') && speed == '4'){
		myTimer = setInterval(rotate5Reverse, 70);
	}else if($('#ry5Button').hasClass('selected') && speed == '3'){
		myTimer = setInterval(rotate5Reverse, 50);
	}else if($('#ry5Button').hasClass('selected') && speed == '2'){
		myTimer = setInterval(rotate5Reverse, 30);
	}else if($('#ry5Button').hasClass('selected') && speed == '1'){
		myTimer = setInterval(rotate5Reverse, 10);
	}
}


// Switches Between Modes (Joint, World, Tool) -------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------

function nextMode(){
	$(".ledLight").removeClass('on');
	
	if(mode == 3){
		mode = 0;
	}
	
	if(mode == 0){
			$("#jointModeLight").addClass('on');
	}else if(mode == 1){
			$("#worldModeLight").addClass('on');
	}else if(mode == 2){
			$("#toolModeLight").addClass('on');
	}
	
	mode++;
	
	
}

// LCD Display Function ----------------
// -------------------------------------
// -------------------------------------
function lcdDisplay(){
		$("#lcdContent").html('');
		
		if($("#x1Button").hasClass('selected')){
			$("#lcdContent").html('Joint 1 Selected');
		}else if($("#y2Button").hasClass('selected')){
			$("#lcdContent").html('Joint 2 Selected');
		}else if($("#z3Button").hasClass('selected')){
			$("#lcdContent").html('Joint 3 Selected');
		}else if($("#rx4Button").hasClass('selected')){
			$("#lcdContent").html('Joint 4 Selected');
		}else if($("#ry5Button").hasClass('selected')){
			$("#lcdContent").html('Joint 5 Selected');
		}else if($("#rz6Button").hasClass('selected')){
			$("#lcdContent").html('Joint 6 Selected');
		}
}


