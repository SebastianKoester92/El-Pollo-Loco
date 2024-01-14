class Chicken extends MovableObject {

    y = 360;
    width = 70;
    height = 70;
    chickenAlive = true;
    deadBody = true;
    walkingImages =[
        '../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        '../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        '../img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    deadImages =[
        '../img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ];

    constructor() {
        super().loadImage(this.walkingImages[0]);
        this.loadImages(this.walkingImages);
        this.loadImages(this.deadImages);
        this.x = 400 + Math.random() * 1900; 
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
    }
    

    animate() {

        setInterval(() => {
            if(this.chickenAlive === true) {
                this.moveLeft();
            }                                  
        }, 1000 / 60)

        setInterval(() => {
            if(this.chickenAlive === true) {
                this.playAnimation(this.walkingImages);  
            } else if(this.chickenAlive === false) {
                this.playAnimation(this.deadImages);
                this.deadBody = false; 
            }                           
        }, 150);    
    }
}  