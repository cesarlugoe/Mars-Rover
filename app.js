// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  y: 0,
  x: 0,
  travelLog : ["x=0,y=0"]
}
// ======================

function turnLeft(){
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
    rover.direction = "W";
    console.log("Mars Rover is now facing West");
    break;
    case "E":
    rover.direction = "N";
    console.log("Mars Rover is now facing North");
    break;
    case "S":
    rover.direction = "E";
    console.log("Mars Rover is now facing East");
    break;
    case "W":
    rover.diretion = "S";
    console.log("Mars Rover is now facing South");
    break;
  

  }
}

function turnRight(){
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      console.log("Mars Rover is now facing East");
      break;
    case "E":
      rover.direction = "S";
      console.log("Mars Rover is now facing South");
      break;
    case "S":
      rover.direction = "W";
      console.log("Mars Rover is now facing West");
      break;
    case "W":
      rover.diretion = "N";
      console.log("Mars Rover is now facing North");
      break;

  }
}

function moveForward(){
  console.log("moveForward was called")
  switch (rover.direction) {
    case "N":
        if (rover.x >= 1){
            rover.x -= 1;  
        } else {
          console.log("The Rover can't move further North");
        }
        break;
    case "W":
        if (rover.y >=1) {
          rover.y -= 1;
        } else {
          console.log("The Rover can't move further West");
        }
        break;
    case "S":
        if (rover.x <=8){
          rover.x += 1;
        } else {
          console.log("The Rover can't move further South");
        }
        break;
    case "E":
        if (rover.y <=8){
          rover.y +=1;
        } else {
          console.log("The rover can't move further East");
        }
        break;
  }
  console.log("The new position is x=" + rover.x + " y=" + rover.y);
}

function comands(sequence){
   for (var i =0; i<= sequence.length-1;i++){
     switch (sequence[i]) {
       case "f":
          moveForward(rover);
          rover.travelLog.push("x="+ rover.x + ",y=" + rover.y);       
          break;
       case "l":
          turnLeft(rover);
          break;
       case "r":
          turnRight(rover);
          break;
       default:
          console.log("Invalid command");
     }
   }
}

comands("rfffffrffffrffffw");
console.log("The travel Log of today's mission:" + rover.travelLog);


