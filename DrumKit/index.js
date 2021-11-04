// var drumName = document.querySelectorAll(".drum");
//
// for (i = 0; i < drumName.length; i++) {
//   drumName[i].addEventListener("click", function() {
//
//     var drumLabel = this.innerHTML;
//     makeSound(drumLabel);
//     activeButton(drumLabel);
//
//   });
// }

$(".drum").on("click", function() {
  makeSound(this.innerHTML);
  activeButton(this.innerHTML);
});


// document.addEventListener("keydown", function(event) {
//   makeSound(event.key);
//   activeButton(event.key);
// });

$(document).on("keydown", function(event){
    makeSound(event.key);
    activeButton(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(key);
  }
}

// function activeButton(state) {
//   var selectiveButton = document.querySelector("." + state);
//   selectiveButton.classList.add("pressed");
//   setTimeout(function() {
//     selectiveButton.classList.remove("pressed");
//   }, 100);
// }

function activeButton(state){
  $("." + state).addClass("pressed");
  setTimeout(function(){
    $("." + state).removeClass("pressed");
  }, 100)
}
