class StatusBarBottle extends DrawableObject {
    
    imagesBottle = [
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png'
    ];

    percentage = 0;

    constructor() {
        super();
        this.loadImages(this.imagesBottle);
        this.x = 5;
        this.y = 40;
        this.width = 160;
        this.height = 48;
        this.setPercentage(0);
    }

    /** selects the image depending on the percentage */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.imagesBottle[this.resolveImageIndex()];
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

}