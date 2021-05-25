alert("Instructions:\n\nOn Mobile: You can click on the letters to use the drum kit.\n\nOn Computer: You can either click on the letters directly to enjoy the drum kit or use your keyboard and press the respective keys.")
var numberOfDrumButtons = document.querySelectorAll('.key-sound').length;

for(var i=0;i<numberOfDrumButtons;i++){
    document.querySelectorAll('.key-sound')[i].addEventListener('click',function (){
        var buttonHTML  = this.innerHTML;
        makeSound(buttonHTML.toLowerCase());
        doAnimation(buttonHTML.toLowerCase());
    })
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  doAnimation(event.key);

});

function makeSound(key){

    switch (key) {
        case "a":
          var boom = new Audio("sounds/boom.wav");
          boom.play();
          break;
    
        case "s":
          var clap = new Audio('sounds/clap.wav');
          clap.play();
          break;
    
        case "d":
          var hihat = new Audio('sounds/hihat.wav');
          hihat.play();
          break;
    
        case "f":
          var kick = new Audio('sounds/kick.wav');
          kick.play();
          break;
    
        case "g":
          var openhat = new Audio('sounds/openhat.wav');
          openhat.play();
          break;
    
        case "h":
          var ride = new Audio('sounds/ride.wav');
          ride.play();
          break;
    
        case "j":
          var snare = new Audio('sounds/snare.wav');
          snare.play();
          break;

        case "K","k":
          var tink = new Audio('sounds/tink.wav');
          tink.play();
          break;

        case "l":
          var tom = new Audio('sounds/tom.wav');
          tom.play();
          break;
    
        default: console.log(key);
    
      }
}

function doAnimation(cKey) {

  var activeButton = document.querySelector("." + cKey);

  activeButton.classList.add("clicked");

  setTimeout(function() {
    activeButton.classList.remove("clicked");
  }, 200);

}