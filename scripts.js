window.addEventListener("load", function(){

  let statusNode = document.getElementById("flightStatus");
  let bgNode = document.getElementById("shuttleBackground");
  let heightDisplayNode = document.getElementById("spaceShuttleHeight");
  let rocketNode = document.getElementById("rocket");

  let takeoffBtn = document.getElementById("takeoff");
  takeoffBtn.addEventListener("click", function() {
    let confirmed = window.confirm("Confirm that the shuttle is ready for takeoff");

    if (confirmed) {
    
      statusNode.innerHTML = "Shuttle in flight.";
      bgNode.style.backgroundColor = "blue";

      let currentHeight = Number(heightDisplayNode.innerHTML);
      currentHeight += 10000;
      heightDisplayNode.innerHTML = currentHeight;

      let currentImgHeight = parseInt(rocketNode.style.bottom);
      rocketNode.style.bottom = (currentImgHeight + 10) + "px";
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



});