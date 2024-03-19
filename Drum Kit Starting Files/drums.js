var numberOfDrums = document.querySelectorAll(".drum").length;

//Detecting Button Press

for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function respondToButton() {
    // console.log(this.style.color = "white");

    var buttonInnerHTML = this.innerHTML;         //OOP:the buttonInnerHTML variable will change take a value of one of the entities that possesses .drum class. This is achived using "this" 
                                                  //var i -> .drum[i] -> this -> buttonInnerHTML

    console.log(buttonInnerHTML);                 //the console.log only helps you in detecting which drum was played (eg.wasdjkl) using the touchpad
    makeSound(buttonInnerHTML);  
    
    buttonAnimation(buttonInnerHTML);

  });

}

//Detecting Keyboard Press

document.addEventListener("keydown", function respondToKey(event) {
  console.log(event);
  makeSound(event.key);                                 //key depends on which event has been pressed.The key is not the same variable 
                                                        //mentioned in makeSound function. It is a pre-defined word in JS. Event has been defined by you
  buttonAnimation(event.key);
});

//Produce Sound

function makeSound(key) {                               
    switch (key) {
        case "w":
          var audio = new Audio("sounds/tom-1.mp3");
          audio.play();
          break;
        case "a":
          var audio = new Audio("sounds/tom-2.mp3");
          audio.play();
          break;
        case "s":
          var audio = new Audio("sounds/tom-3.mp3");
          audio.play();
          break;
        case "d":
          var audio = new Audio("sounds/tom-4.mp3");
          audio.play();
          break;
        case "j":
          var audio = new Audio("sounds/snare.mp3");
          audio.play();
          break;
        case "k":
          var audio = new Audio("sounds/crash.mp3");
          audio.play();
          break;
        case "l":
          var audio = new Audio("sounds/kick-bass.mp3");
          audio.play();
          break;
      }
}


//Produce Animation 

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");                       //adds the animation by adding a shadow using the pressed class(present in css)


  setTimeout(function removeAnimation(){                       //setTimeout(pre defined function) takes 2 parameters-One a function and the other 
    activeButton.classList.remove("pressed");                  
  }
  ,100)                                                        //a time duration(1000 = 1s)
  
}