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
    speed = 30;
    hurtIndex = 0;
    deadIndex = 0;
    dead_sound = new Audio('../audio/dead_chicken.wav');

    walkingImages = [
        '../img/4_enemie_boss_chicken/1_walk/G1.png',
        '../img/4_enemie_boss_chicken/1_walk/G2.png',
        '../img/4_enemie_boss_chicken/1_walk/G3.png',
        '../img/4_enemie_boss_chicken/1_walk/G4.png'
    ];

    alertImages = [
        '../img/4_enemie_boss_chicken/2_alert/G5.png',
        '../img/4_enemie_boss_chicken/2_alert/G6.png',
        '../img/4_enemie_boss_chicken/2_alert/G7.png',
        '../img/4_enemie_boss_chicken/2_alert/G8.png',
        '../img/4_enemie_boss_chicken/2_alert/G9.png',
        '../img/4_enemie_boss_chicken/2_alert/G10.png',
        '../img/4_enemie_boss_chicken/2_alert/G11.png',
        '../img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    hurtImages = [
        '../img/4_enemie_boss_chicken/4_hurt/G21.png',
        '../img/4_enemie_boss_chicken/4_hurt/G22.png',
        '../img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];

    attackImages = [
        '../img/4_enemie_boss_chicken/3_attack/G13.png',
        '../img/4_enemie_boss_chicken/3_attack/G14.png',
        '../img/4_enemie_boss_chicken/3_attack/G15.png',
        '../img/4_enemie_boss_chicken/3_attack/G16.png',
        '../img/4_enemie_boss_chicken/3_attack/G17.png',
        '../img/4_enemie_boss_chicken/3_attack/G18.png',
        '../img/4_enemie_boss_chicken/3_attack/G19.png',
        '../img/4_enemie_boss_chicken/3_attack/G20.png'
    ];

    deadImages = [
        '../img/4_enemie_boss_chicken/5_dead/G24.png',
        '../img/4_enemie_boss_chicken/5_dead/G25.png',
        '../img/4_enemie_boss_chicken/5_dead/G26.png'
    ];

    constructor() {
        super().loadImage(this.walkingImages[0]);
        this.loadImages(this.walkingImages);
        this.loadImages(this.alertImages);
        this.loadImages(this.hurtImages);
        this.loadImages(this.deadImages);
        this.loadImages(this.attackImages);
        this.x = 2600;
        this.animate();
    }

    animate() {
        setInterval(() => {
            if(this.health <= 0) {
                this.playAnimation(this.deadImages);
                this.deadIndex = 1;  
            } else if(this.hurtIndex == 1) {
                this.playAnimation(this.hurtImages);
                this.hurtIndex = 0;
            } else if(this.health < 100) {
                this.playAnimation(this.attackImages);      
            }else if(positionOfChar > 2150) {
                this.playAnimation(this.alertImages);      
            } else {
                this.playAnimation(this.walkingImages); 
            }      
        }, 250);
    }

}