class StatusBarHealthEndboss extends DrawableObject {

    imagesHealth = [
        './img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
        './img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        './img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        './img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        './img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        './img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png'
    ];

    percentage = 100;
    speed = 2;

    constructor() {
        super();
        this.loadImages(this.imagesHealth);
        this.x = 2650;
        this.y = 0;
        this.width = 160;
        this.height = 48;
        this.setPercentage(100);
        this.moveHealthBar();
    }

    /** selects the image depending on the percentage */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.imagesHealth[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /** returns the image number depending on the percentage */
    resolveImageIndex() {
        if(this.percentage == 100) {
            return 5;
        } else if (this.percentage == 80) {
            return 4;
        } else if (this.percentage == 60) {
            return 3;
        } else if (this.percentage == 40) {
            return 2;
        } else if (this.percentage == 20) {
            return 1;
        } else {
            return 0;
        }
    }

    /** moves the HealthBar of the endboss while he is moving left */
    moveHealthBar() {
        setInterval(() => {
            if(endbossGotHitIndex == 1) {
                this.x -= this.speed;
            }
        }, 1000 / 60);
    }
}