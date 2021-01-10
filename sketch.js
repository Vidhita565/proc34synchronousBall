var ball;
var database;
var positon;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
  
    console.log(database)
   var positionX= database.ref("ball/position")
   positionX.on("value",readPosition,ShowError)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref("ball/position").set({
        'x' : position.x + x,
        'y' : position.y + y
    })
   
}
function readPosition(data){
    position=data.val()
    console.log(position.x) 
    ball.x=position.x
    ball.y=position.y 
}
function ShowError(){
    console.log("print message for error")
}
  
