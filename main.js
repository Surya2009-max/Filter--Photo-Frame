function preload(){
    
}

function setup(){
    canvas = createCanvas(500, 400);
    canvas.position(110, 250);
   Webcam = createCapture(VIDEO);
    Webcam.hide();
    tint_color = ""
}
function draw() {
  image(Webcam, 0,0, 500, 400);
    tint(tint_color);
     fill(0, 123, 0);
    rect(15, 50, 30, 300);
    rect(455, 50, 30, 300);
    rect(15, 15, 450, 30);
    rect(15, 360, 450, 30);  

       fill(200, 10, 20);
       circle(30, 30, 50);
    circle(470, 30, 50);
    circle(30, 370, 50);
    circle(470, 370, 50);
}

    
   
    
    


function take_snapshot(){
    save("picture_filter.png")
}

function filter_tint(){
  tint_color =  document.getElementById('tint_color').value;
}