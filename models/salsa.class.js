class CollectableSalsa extends MovableObject {

    y = 350;
    width = 60;
    height = 70;

    walkingImages =[
        '../img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        '../img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];

    constructor() {
        super().loadImage(this.walkingImages[0]);
        this.loadImages(this.walkingImages);
        this.x = 400 + Math.random() * 1700;
        this.y = 70 + Math.random() * 280;
        this.animate();
    }
    

    animate() {
        setInterval(() => {
            this.playAnimation(this.walkingImages);
        }, 700);
    }
}
