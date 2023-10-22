class Character extends MovableObject {

    height = 300;
    y = 135; 
    speed = 10;
    walkingImages = [
        '../img/2_character_pepe/2_walk/W-21.png',
        '../img/2_character_pepe/2_walk/W-22.png',
        '../img/2_character_pepe/2_walk/W-23.png',
        '../img/2_character_pepe/2_walk/W-24.png',
        '../img/2_character_pepe/2_walk/W-25.png',
        '../img/2_character_pepe/2_walk/W-26.png'
    ];
    world;
    walking_sound = new Audio('../audio/running.mp3');

    constructor() {
        super().loadImage('../img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.walkingImages);

        this.animate();
    }


    animate() {

        setInterval(() => {
            this.walking_sound.pause();
            if(this.world.keyboard.right && this.x < this.world.level.level_end_x) {
                this.otherDirection = false;
                this.x += this.speed;
                this.walking_sound.play();  
            }
            if(this.world.keyboard.left && this.x > 0) {
                this.otherDirection = true;
                this.x -= this.speed;
                this.walking_sound.play();
            }
            this.world.camera_x = -this.x + 100;   
        }, 1000 / 60);

        

        setInterval(() => {
            if(this.world.keyboard.right || this.world.keyboard.left) {
                this.playAnimation(this.walkingImages);
            }
        }, 50);
        
    }

    jump() {

    }
}