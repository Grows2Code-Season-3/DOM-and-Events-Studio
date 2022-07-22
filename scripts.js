window.addEventListener("load", function(){

  let statusNode = document.getElementById("flightStatus");
  let bgNode = document.getElementById("shuttleBackground");
  let heightDisplayNode = document.getElementById("spaceShuttleHeight");
  let rocketNode = document.getElementById("rocket");

  // direction is either "up" or "down"
  function moveVertical(direction) {

    let displayHeightChange = 10000;
    let imgHeightChange = 10;

    if (direction === 'down') {
      displayHeightChange = -displayHeightChange;
      imgHeightChange = -imgHeightChange;
    }

    let currentHeight = Number(heightDisplayNode.innerHTML);
    currentHeight += displayHeightChange;
    heightDisplayNode.innerHTML = currentHeight;

    let currentImgHeight = parseInt(rocketNode.style.bottom);
    rocketNode.style.bottom = (currentImgHeight + imgHeightChange) + "px";
  }

  // TODO 1: create a moveHorizontal function that takes "left" or "right" as a param

  let takeoffBtn = document.getElementById("takeoff");
  takeoffBtn.addEventListener("click", function() {
    let confirmed = window.confirm("Confirm that the shuttle is ready for takeoff");

    if (confirmed) {
      statusNode.innerHTML = "Shuttle in flight.";
      bgNode.style.backgroundColor = "blue";
      moveVertical("up");
    } 
  });

  let landBtn = document.getElementById("landing");
  landBtn.addEventListener("click", function(){
    window.alert("The shuttle is landing. Landing gear engaged.");

    statusNode.innerHTML = "The shuttle has landed.";
    bgNode.style.backgroundColor = "green";
    heightDisplayNode.innerHTML = "0";
    rocketNode.style.bottom = "0px";
  });

  let abortBtn = document.getElementById("missionAbort");
  abortBtn.addEventListener("click", function(){
    let confirmed = window.confirm("Confirm that you want to abort the mission.");

    if (confirmed) {
      statusNode.innerHTML = "Mission aborted.";
      bgNode.style.backgroundColor = "green";
      rocketNode.style.bottom = "0px";
      heightDisplayNode.innerHTML = "0";
    }

  });

  let upBtn = document.getElementById("up");
  upBtn.addEventListener("click", function() {
    moveVertical("up");
  });

  let downBtn = document.getElementById("down");
  downBtn.addEventListener("click", function(){
    moveVertical("down");
  });

  // TODO 2: get the left button, and call moveHorizontal

});