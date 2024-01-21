let canvas;
let world;
let keyboard = new Keyboard();

function showControls() {
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('controlsScreen').classList.remove('d-none');
}

function showStartScreen() {
    document.getElementById('controlsScreen').classList.add('d-none');
    document.getElementById('startScreen').classList.remove('d-none');
    document.getElementById('lostScreen').classList.add('d-none');
    document.getElementById('wonScreen').classList.add('d-none'); 
}

function showEndScreen(value) {
    document.getElementById('canvas').classList.add('d-none');
    document.getElementById(`${value}Screen`).classList.remove('d-none');
}


function init() {
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('lostScreen').classList.add('d-none');
    document.getElementById('canvas').classList.remove('d-none');
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
    } else if(element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
      element.msRequestFullscreen();
    } else if(element.webkitRequestFullscreen) {  // iOS Safari
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