let canvas;
let world;
let keyboard = new Keyboard();
let positionOfChar = 0;
let throwDirection = 0;
let world_sound_index = 1;

function showScreen(screenToShow) {
    document.getElementById('canvas').classList.add('d-none');
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('controlsScreen').classList.add('d-none');
    document.getElementById('lostScreen').classList.add('d-none');
    document.getElementById('wonScreen').classList.add('d-none');
    
    document.getElementById(screenToShow).classList.remove('d-none');  
}
function showMobileButtons() {
    document.getElementById('mobileButtons').classList.remove('d-none');
}

function hideMobileButtons() {
    document.getElementById('mobileButtons').classList.add('d-none');
}

function init() {
    checkMobileDevice();
    showScreen('canvas');
    initLevel();
    canvas = document.getElementById('canvas');
    canvas.value = '';
    world = new World(canvas, keyboard);
}

function checkMobileDevice() {
    if (isMobileDevice()) {
        showMobileButtons();
    }
}

function isMobileDevice() {
    return window.innerWidth <= 800 && window.innerHeight <= 600;
}

function muteMusic() {
    if(world_sound_index == 1) {
        world_sound_index = 0;
    }else{
        world_sound_index = 1;  
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


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnLeft').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.left = true;
    });
    document.getElementById('btnLeft').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.left = false;
    });
    document.getElementById('btnRight').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.right = true;
    });
    document.getElementById('btnRight').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.right = false;
    });
    document.getElementById('btnUp').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.space = true;
    });
    document.getElementById('btnUp').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.space = false;
    });
    document.getElementById('btnThrow').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.d = true;
    });
    document.getElementById('btnThrow').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.d = false;
    })
});
