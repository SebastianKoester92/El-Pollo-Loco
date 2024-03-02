class Chicken extends MovableObject {

    y = 360;
    width = 70;
    height = 70;
    deadBody = true;
    health = 20;
    enemyType = 1;
    offset = {
        top: 10,
        left: 10,
        right: 20,
        bottom: 20
    };

    dead_sound = new Audio('./audio/dead_chicken.wav');

    walkingImages =[
        './img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        './img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        './img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    deadImages =[
        './img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ];

    constructor() {
        super().loadImage(this.walkingImages[0]);
        this.loadImages(this.walkingImages);
        this.loadImages(this.deadImages);
        this.x = 400 + Math.random() * 1900; 
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
    }
    
    /* animates the chicken moving left */
    animate() {

        setInterval(() => {
            if(this.health >= 1) {
                this.moveLeft();
            }                                  
        }, 1000 / 60)

        setInterval(() => {
            if(this.health >= 1) {
                this.playAnimation(this.walkingImages);  
            } else if(this.health <= 0) {
                this.playAnimation(this.deadImages);
                this.deadBody = false; 
            }                           
        }, 150);    
    }
}  