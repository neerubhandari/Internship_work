
var context,x=250,y=150,a=90,b=90,dx=7,dy=5,da=10,db=5,A=100,B=100,X=370,Y=380,dA=7,dB=9,dX=5,dY=10;
function init(){
    context=myCanvas.getContext('2d');
    setInterval(draw,18);
}
function draw(){
    //clear the canvas
    context.clearRect(0,0,500,500);
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

    //draw a purple ball
    context.beginPath();
    context.fillStyle="purple";
    context.arc(A,B,20,0,Math.PI*2,true);
    context.closePath();
    context.fill();

    //draw a blue ball
    context.beginPath();
    context.fillStyle="blue";
    context.arc(X,Y,20,0,Math.PI*2,true);
    context.closePath();
    context.fill();
    //Ball movement
    ballMovement();
}
function ballMovement(){
    //green ball
    x +=dx;
    y +=dy;

    if(x>480 || x<13){
      dx=-dx;
  }
  if(y>480 || y<13){
    dy=-dy;
}
    //red ball
    a +=da;
    b +=db;

    if(a>480 || a<13){
      da=-da;
  }
  if(b>480 || b<13){
    db=-db;
}

    //purple ball
    A +=dA;
    B +=dB;

    if(A>480 || B<13){
      dA=-dA;
  }
  if(B>480 || B<13){
    dB=-dB;
}

    //blue ball
    X +=dX;
    Y +=dY;

    if(X>480 || X<13){
      dX=-dX;
  }
  if(Y>480 || Y<13){
    dY=-dY;
}
}
    