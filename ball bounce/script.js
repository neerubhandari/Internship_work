var context,x=250,y=150,a=90,b=90,dy=5,db=5,gravity = 0.7,bounce = 0.9;
function init(){
    context=myCanvas.getContext('2d');
    setInterval(draw,13);
}
function draw(){
    //clear the canvas
    context.clearRect(0,0,300,300);
    //draw a green ball
    context.beginPath();
    context.fillStyle="green";
    context.arc(x,y,20,0,Math.PI*2,true);
    context.closePath();
    context.fill();
    //draw a red ball
    context.beginPath();
    context.fillStyle="red";
    context.arc(a,b,20,0,Math.PI*2,true);
    context.closePath();
    context.fill();
    //Ball movement
    ballMovement();
}
function ballMovement(){
    //green ball
    y += dy;
    dy += gravity;
    if (y + (radius=20) > 200){  
       // Re-positioning on the base
       y = 170;
       //bounce the ball
       dy *= -bounce;
    }
    //red ball
    b += db;
    db += gravity;
    if (b + (radius=20) > 200){  
       // Re-positioning on the base
       b = 170;
       //bounce the ball
       db *= -bounce;
    }
}
    