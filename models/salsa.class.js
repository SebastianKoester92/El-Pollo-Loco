class CollectableSalsa extends MovableObject {

    y = 350;
    width = 60;
    height = 70;
    offset = {
        top: 15,
        left: 27,
        right: 22,
        bottom: 12
    };

    walkingImages =[
        './img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        './img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];

    bottleCollect_sound = new Audio('./audio/bottle_collect.wav');

    constructor() {
        super().loadImage(this.walkingImages[0]);
        this.loadImages(this.walkingImages);
        this.x = 400 + Math.random() * 1700;
        this.animate();
    }
    

    animate() {
        setInterval(() => {
            this.playAnimation(this.walkingImages);
        }, 500);
    }
}
