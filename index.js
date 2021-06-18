for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function() {
      sound(this.innerHTML);
      animation(this.innerHTML);
    }
    );
  }

  document.addEventListener("keydown", function(event) {
    sound(event.key);
    animation(event.key);
  });
function sound(name)
{
  switch (name)
   {
    case 'w': {
      new Audio("sounds/tom-1.mp3").play();
      break;
    }
    case 'a': {
      new Audio("sounds/tom-2.mp3").play();
      break;
    }
    case 's': {
      new Audio("sounds/tom-3.mp3").play();
      break;
    }
    case 'd': {
      new Audio("sounds/tom-4.mp3").play();
      break;
    }
    case 'j': {
      new Audio("sounds/crash.mp3").play();
      break;
    }
    case 'k': {
      new Audio("sounds/kick-bass.mp3").play();
      break;
    }
    case 'l': {
      new Audio("sounds/snare.mp3").play();
      break;
    }
  }
}
function animation(curr)
{ var active=document.querySelector("."+curr);
  active.classList.add("pressed");
  setTimeout(function(){
   active.classList.remove("pressed");
  },100);
}
