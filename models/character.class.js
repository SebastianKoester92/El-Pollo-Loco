class Character extends MovableObject {

    height = 300;
    width = 140;
    y = 135; 
    speed = 10;
    isMoving = 0;
    offset = {
        top: 130,
        left: 30,
        right: 45,
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

    idleImages = [
        './img/2_character_pepe/1_idle/idle/I-1.png',
        './img/2_character_pepe/1_idle/idle/I-2.png',
        './img/2_character_pepe/1_idle/idle/I-3.png',
        './img/2_character_pepe/1_idle/idle/I-4.png',
        './img/2_character_pepe/1_idle/idle/I-5.png',
        './img/2_character_pepe/1_idle/idle/I-6.png',
        './img/2_character_pepe/1_idle/idle/I-7.png',
        './img/2_character_pepe/1_idle/idle/I-8.png',
        './img/2_character_pepe/1_idle/idle/I-9.png',
        './img/2_character_pepe/1_idle/idle/I-10.png',
    ];

    longIdleImages = [

        './img/2_character_pepe/1_idle/long_idle/I-11.png',
        './img/2_character_pepe/1_idle/long_idle/I-12.png',
        './img/2_character_pepe/1_idle/long_idle/I-13.png',
        './img/2_character_pepe/1_idle/long_idle/I-14.png',
        './img/2_character_pepe/1_idle/long_idle/I-15.png',
        './img/2_character_pepe/1_idle/long_idle/I-16.png',
        './img/2_character_pepe/1_idle/long_idle/I-17.png',
        './img/2_character_pepe/1_idle/long_idle/I-18.png',
        './img/2_character_pepe/1_idle/long_idle/I-19.png',
        './img/2_character_pepe/1_idle/long_idle/I-20.png'
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
        this.loadImages(this.idleImages);
        this.loadImages(this.longIdleImages);
        this.applyGravity();
        this.animate();
    }

    /** starts all functions for character animation */
    animate() {
        this.setCamera();
        this.characterMoveRight();
        this.characterMoveLeft();
        this.characterJump();
        this.characterAnimations();
        this.longIdleAnimation();
        this.idleAnimation();
        this.checkCharacterForSleep();
    }

    /** moves the camera depending on the movement of the character */
    setCamera() {
        setInterval(() => { 
            this.world.camera_x = -this.x + 100;   
        }, 1500 / 60);
    }

    /** animates the character while moving right */
    characterMoveRight() {
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
                this.isMoving = 1;
            }             
        }, 1500 / 60);
    }

    /** animates the character while moving left */
    characterMoveLeft() {
        setInterval(() => { 
            if(this.world.keyboard.left && this.x > 0) {
                this.moveLeft();
                this.otherDirection = true;
                if(world_sound_index == 1) {
                    this.walking_sound.play();
                }
                positionOfChar = this.x;
                throwDirection = 1;
                this.isMoving = 1;
            }        
        }, 1500 / 60);
    }

    /** animates the character while jumping */
    characterJump() {
        setInterval(() => { 
            if(this.world.keyboard.space && !this.isAboveGround()) {
                this.jump();
                if(world_sound_index == 1) {
                    this.jumping_sound.play();
                }
                this.isMoving = 1; 
            }    
        }, 1000 / 60);
    }

    /** checks if the character is dead, hurt, jumping or walking
     *  and plays the specific animation */
    characterAnimations() {
       setInterval(() => {
            if(this.isDead()) {
                this.playAnimation(this.deadImages);
                this.world.endGame('lostScreen');
            } else if (this.isHurt()) {
                this.playAnimation(this.hurtImages);
            } else if (this.isAboveGround()) {
                this.playAnimation(this.jumpingImages);
            } else if (this.world.keyboard.right || this.world.keyboard.left) {
                this.playAnimation(this.walkingImages);
            }
        }, 120); 
    }

    /** checks if the character is standing still.
     * If yes the sleep animation starts
     */
    checkCharacterForSleep() {
        setInterval(() => {
            if (!this.world.keyboard.right && !this.world.keyboard.left && this.isMoving < 3 && !this.isAboveGround() && !this.isHurt()) {
                this.playIdle();
                this.isMoving = 3;
            }
        }, 2000);  
    }

    /** sleep animation for the character if he doesn't move for 5 seconds */
    longIdleAnimation() {
      setInterval(() => {
            if (this.isMoving == 4) {
                this.playAnimation(this.longIdleImages);
            }
        }, 250);  
    }

    /** fall asleep animation for the character if he doesn't move. 
    * after 5 seconds the character falls asleep
    */
    idleAnimation() {
      setInterval(() => {
            if (this.isMoving == 3) {
                this.playAnimation(this.idleImages); 
            }
        }, 250);  
    }

    /** this function sets the sleep value for the character with 5 seconds delay */
    playIdle() {
        if (!this.isAboveGround() && this.y > 135) {
            setTimeout(() => {
                this.isMoving = 4;
            }, 4000);   
        }
        this.isMoving = 1;   
    }
}

