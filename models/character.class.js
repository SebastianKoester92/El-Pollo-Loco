class Character extends MovableObject {

    height = 300;
    width = 140;
    y = 135; 
    speed = 10;
    offset = {
        top: 130,
        left: 30,
        right: 30,
        bottom: 20
    };
    
    walkingImages = [
        './img/2_character_pepe/2_walk/W-21.png',
        './img/2_character_pepe/2_walk/W-22.png',
        './img/2_character_pepe/2_walk/W-23.png',
        './img/2_character_pepe/2_walk/W-24.png',
        './img/2_character_pepe/2_walk/W-25.png',
        './img/2_character_pepe/2_walk/W-26.png'
    ];
    jumpingImages = [
        './img/2_character_pepe/3_jump/J-31.png',
        './img/2_character_pepe/3_jump/J-32.png',
        './img/2_character_pepe/3_jump/J-33.png',
        './img/2_character_pepe/3_jump/J-34.png',
        './img/2_character_pepe/3_jump/J-35.png',
        './img/2_character_pepe/3_jump/J-36.png',
        './img/2_character_pepe/3_jump/J-37.png',
        './img/2_character_pepe/3_jump/J-38.png',
        './img/2_character_pepe/3_jump/J-39.png'
    ];
    deadImages = [
        './img/2_character_pepe/5_dead/D-51.png',
        './img/2_character_pepe/5_dead/D-52.png',
        './img/2_character_pepe/5_dead/D-53.png',
        './img/2_character_pepe/5_dead/D-54.png',
        './img/2_character_pepe/5_dead/D-55.png',
        './img/2_character_pepe/5_dead/D-56.png',
        './img/2_character_pepe/5_dead/D-57.png'
    ];

    hurtImages = [
        './img/2_character_pepe/4_hurt/H-41.png',
        './img/2_character_pepe/4_hurt/H-42.png',
        './img/2_character_pepe/4_hurt/H-43.png'
    ];

    world;
    walking_sound = new Audio('./audio/running.mp3');
    jumping_sound = new Audio('./audio/jump.wav');

    constructor() {
        super().loadImage('./img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.walkingImages);
        this.loadImages(this.jumpingImages);
        this.loadImages(this.deadImages);
        this.loadImages(this.hurtImages);
        this.applyGravity();
        this.animate();
    }

    /* animates the character while moving left, right and jumping */
    animate() {
        setInterval(() => {
            this.walking_sound.pause();
            if(this.world.keyboard.right && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
                if(world_sound_index == 1) {
                    this.walking_sound.play();
                }
                positionOfChar = this.x;
                throwDirection = 0;
            }
            if(this.world.keyboard.left && this.x > 0) {
                this.moveLeft();
                this.otherDirection = true;
                if(world_sound_index == 1) {
                    this.walking_sound.play();
                }
                positionOfChar = this.x;
                throwDirection = 1;
            }
            if(this.world.keyboard.space && !this.isAboveGround()) {
               this.jump();
               if(world_sound_index == 1) {
               this.jumping_sound.play();
               } 
            }
            this.world.camera_x = -this.x + 100;   
        }, 1500 / 60);

        /* checks if the character is dead, hurt, above ground or moving and plays the specific animation */
        setInterval(() => {
            if(this.isDead()) {
                this.playAnimation(this.deadImages);
                this.world.endGame('lostScreen');
            } else if (this.isHurt()) {
                this.playAnimation(this.hurtImages);
            } else if (this.isAboveGround()) {
                this.playAnimation(this.jumpingImages);
            } else {
                if(this.world.keyboard.right || this.world.keyboard.left) {
                    this.playAnimation(this.walkingImages);
                }
            }
        }, 120); 
    }
}