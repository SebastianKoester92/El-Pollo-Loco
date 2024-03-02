let canvas;
let world;
let keyboard = new Keyboard();
let positionOfChar = 0;
let throwDirection = 0;
let world_sound_index = 1;

/* Shows the specific screen that is needed */
function showScreen(screenToShow) {
    document.getElementById('canvas').classList.add('d-none');
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('controlsScreen').classList.add('d-none');
    document.getElementById('lostScreen').classList.add('d-none');
    document.getElementById('wonScreen').classList.add('d-none');
    
    document.getElementById(screenToShow).classList.remove('d-none');  
}

/* turn on mobile buttons */
function showMobileButtons() {
    document.getElementById('mobileButtons').classList.remove('d-none');
}

/* turn off mobile buttons */
function hideMobileButtons() {
    document.getElementById('mobileButtons').classList.add('d-none');
}

/* starts and creates the game */
function init() {
    checkMobileDevice();
    showScreen('canvas');
    initLevel();
    canvas = document.getElementById('canvas');
    canvas.value = '';
    world = new World(canvas, keyboard);
}

/* checks if the game is played on a mobile device */
function checkMobileDevice() {
    if (isMobileDevice()) {
        showMobileButtons();
    }
}

/* returns true if the device isn't bigger than 800 width and 600 height */
function isMobileDevice() {
    return window.innerWidth <= 800 && window.innerHeight <= 600;
}

/* mutes the music ingame */
function muteMusic() {
    if(world_sound_index == 1) {
        world_sound_index = 0;
    }else{
        world_sound_index = 1;  
    }
}


/* checks if a button is pressed */
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

/* checks if a button isn't pressed */
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

/* checks if a mobile button is pressed */
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
