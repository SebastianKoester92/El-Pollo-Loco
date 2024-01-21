class Endboss extends MovableObject {

    height = 450;
    width = 270;
    y = 6;
    health = 100;
    enemyType = 2;
    offset = {
        top: 100,
        left: 35,
        right: 60,
        bottom: 150
    };
    deadIndex = 0;
    dead_sound = new Audio('../audio/dead_chicken.wav');

    walkingImages = [
        '../img/4_enemie_boss_chicken/2_alert/G5.png',
        '../img/4_enemie_boss_chicken/2_alert/G6.png',
        '../img/4_enemie_boss_chicken/2_alert/G7.png',
        '../img/4_enemie_boss_chicken/2_alert/G8.png',
        '../img/4_enemie_boss_chicken/2_alert/G9.png',
        '../img/4_enemie_boss_chicken/2_alert/G10.png',
        '../img/4_enemie_boss_chicken/2_alert/G11.png',
        '../img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    deadImages = [
        '../img/4_enemie_boss_chicken/5_dead/G24.png',
        '../img/4_enemie_boss_chicken/5_dead/G25.png',
        '../img/4_enemie_boss_chicken/5_dead/G26.png'
    ];

    constructor() {
        super().loadImage(this.walkingImages[0]);
        this.loadImages(this.walkingImages);
        this.loadImages(this.deadImages);
        this.x = 2600;
        this.animate();
    }

    animate() {
        setInterval(() => {
            if(this.health > 0) {
                this.playAnimation(this.walkingImages);   
            } else if(this.deadIndex == 0) {
                this.playAnimation(this.deadImages);
                this.deadIndex = 1;  
            }   
        }, 250);
    }

}