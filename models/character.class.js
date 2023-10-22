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

    constructor() {
        super().loadImage('../img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.walkingImages);

        this.animate();
    }


    animate() {

        setInterval(() => {
            if(this.world.keyboard.right) {
                this.otherDirection = false;
                this.x += this.speed;  
            }
            if(this.world.keyboard.left) {
                this.otherDirection = true;
                this.x -= this.speed;
            }
            this.world.camera_x = -this.x;   
        }, 1000 / 60);

        

        setInterval(() => {
            if(this.world.keyboard.right || this.world.keyboard.left) {
                let i = this.currentImage % this.walkingImages.length;
                let path = this.walkingImages[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 50);
        
    }

    jump() {

    }
}