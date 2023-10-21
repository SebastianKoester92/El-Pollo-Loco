class Chicken extends MovableObject {

    y = 360;
    width = 70;
    height = 70;
    walkingImages =[
        '../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        '../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        '../img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    constructor() {
        super().loadImage('../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.walkingImages);
        this.x = 200 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
    }
    

    animate() {
        this.moveLeft();

        setInterval(() => {
            let i = this.currentImage % this.walkingImages.length;
            let path = this.walkingImages[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 150);
    }
}