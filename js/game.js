let canvas;
let world;
let keyboard = new Keyboard();
let positionOfChar = 0;

function showScreen(screenToShow) {
    document.getElementById('canvas').classList.add('d-none');
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('controlsScreen').classList.add('d-none');
    document.getElementById('lostScreen').classList.add('d-none');
    document.getElementById('wonScreen').classList.add('d-none');
    
    document.getElementById(screenToShow).classList.remove('d-none');  
}

function init() {
    showScreen('canvas');
    canvas = document.getElementById('canvas');
    canvas.value = '';
    world = new World(canvas, keyboard);
}

function fullscreen() {
    let fullscreen = document.getElementById('fullscreen');
    enterFullscreen(fullscreen);
}

function enterFullscreen(element) {
    if(element.requestFullscreen) {
      element.requestFullscreen();
    } else if(element.msRequestFullscreen) {      
      element.msRequestFullscreen();
    } else if(element.webkitRequestFullscreen) {  
      element.webkitRequestFullscreen();
    }
  }

  function exitFullscreen() {
    if(document.exitFullscreen) {
      document.exitFullscreen();
    } else if(document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }


window.addEventListener("keydown", (e) => {
    if (e.keyCode == 39) {
        keyboard.right = true;
    }
    if (e.keyCode == 37) {
        keyboard.left = true;
    }
    if (e.keyCode == 38) {
        keyboard.up = true;
    }
    if (e.keyCode == 40) {
        keyboard.down = true;
    }
    if (e.keyCode == 32) {
        keyboard.space = true;
    }
    if (e.keyCode == 68) {
        keyboard.d = true;
    }
});

window.addEventListener("keyup", (e) => {
    if (e.keyCode == 39) {
        keyboard.right = false;
    }
    if (e.keyCode == 37) {
        keyboard.left = false;
    }
    if (e.keyCode == 38) {
        keyboard.up = false;
    }
    if (e.keyCode == 40) {
        keyboard.down = false;
    }
    if (e.keyCode == 32) {
        keyboard.space = false;
    }
    if (e.keyCode == 68) {
        keyboard.d = false;
    }
});