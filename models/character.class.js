class Character extends MovableObject {

    height = 300;
    width = 140;
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
    jumpingImages = [
        '../img/2_character_pepe/3_jump/J-31.png',
        '../img/2_character_pepe/3_jump/J-32.png',
        '../img/2_character_pepe/3_jump/J-33.png',
        '../img/2_character_pepe/3_jump/J-34.png',
        '../img/2_character_pepe/3_jump/J-35.png',
        '../img/2_character_pepe/3_jump/J-36.png',
        '../img/2_character_pepe/3_jump/J-37.png',
        '../img/2_character_pepe/3_jump/J-38.png',
        '../img/2_character_pepe/3_jump/J-39.png'
    ];

    world;
    walking_sound = new Audio('../audio/running.mp3');

    constructor() {
        super().loadImage('../img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.walkingImages);
        this.loadImages(this.jumpingImages);
        this.applyGravity();
        this.animate();
    }


    animate() {

        setInterval(() => {
            this.walking_sound.pause();
            if(this.world.keyboard.right && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.walking_sound.play();
            }
            if(this.world.keyboard.left && this.x > 0) {
                this.moveLeft();
                this.walking_sound.play();
            }

            if(this.world.keyboard.space && !this.isAboveGround()) {
               this.jump(); 
            }

            this.world.camera_x = -this.x + 100;   
        }, 1000 / 60);

        

        setInterval(() => {

            if(this.isAboveGround()) {
                this.playAnimation(this.jumpingImages);
            } else {

                if(this.world.keyboard.right || this.world.keyboard.left) {
                    this.playAnimation(this.walkingImages);
                }
            }
        }, 50);
        
    }
}