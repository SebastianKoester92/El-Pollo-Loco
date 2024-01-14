class CollectableCoin extends MovableObject {

    y = 150;
    width = 130;
    height = 130;

    walkingImages =[
        '../img/8_coin/coin_1.png',
        '../img/8_coin/coin_2.png'
    ];

    constructor() {
        super().loadImage(this.walkingImages[0]);
        this.loadImages(this.walkingImages);
        this.x = 400 + Math.random() * 1700;
        this.y = 50 + Math.random() * 150;
        this.animate();
    }
    

    animate() {
        setInterval(() => {
            this.playAnimation(this.walkingImages);
        }, 700);
    }
}
