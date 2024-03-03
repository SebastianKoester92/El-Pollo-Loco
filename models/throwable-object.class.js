class ThrowableObject extends MovableObject {
    
    offset = {
        top: 20,
        left: 20,
        right: 40,
        bottom: 40
    };

    walkingImages =[
        './img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];

    splashImages =[
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ]

    breaking_sound = new Audio('./audio/bottle-break.wav');
    bottleSplashIndex = 0;
    bottleFlyIndex = 1;
    hitIndex = 0;

    constructor(x, y) {
        super().loadImage(this.walkingImages[0]);
        this.loadImages(this.walkingImages);
        this.loadImages(this.splashImages);
        this.x = x;
        this.y = y;
        this.height = 70;
        this.width = 60;
        this.throw();
        this.animate();
    }

    throw() {
        this.speedY = 30;
        this.applyGravity();
        if(throwDirection == 0) {
            setInterval(() => {
                if(this.bottleFlyIndex == 1){
                    this.x += 10;  
                }           
            }, 25);
        } else {
            setInterval(() => {
                if(this.bottleFlyIndex == 1){
                    this.x -= 10;  
                }           
            }, 25);  
        }
    }

    animate() {
        setInterval(() => {
            if(this.bottleSplashIndex == 0){
                this.playAnimation(this.walkingImages);
            } else {
                this.speedY = 0;
                this.acceleration = 0;
                this.playAnimation(this.splashImages);  
            }   
        }, 80);
    }
}
