class MovableObject extends DrawableObject {
    speed = 0.2;
    otherDirection = false;
    speedY = 0;
    acceleration = 3;
    energy = 100;
    lastHit = 0;

    /** applies gravity to those objects which can have gravity */
    applyGravity() {
        setInterval(() => {
            if(this.isAboveGround() || this.speedY > 0 || this.hitIndex == 0){
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    /** checks if an object is above ground */
    isAboveGround() {
        if(this instanceof ThrowableObject) {
            return true;
        } else {
           return this.y < 135; 
        }  
    }
    
    /** checks the collision between two movable objects including offsets */
    isColliding(mo) {

            return  this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
                    this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
                    this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
                    this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom                 
    }

    /** reduces the energy of the character and saves the time of the last hit */
    hit() {
        this.energy -= 15;
        if(this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /** takes the time of the last hit and checks if time passed is above 1 second.
     * if not the character can't get hit again
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }
    /** checks if the energy of the character is 0 */
    isDead() {
        return this.energy == 0;
    }

    /** animates each object that is movable */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /** lets the character move right */
    moveRight() {
        this.x += this.speed;
    }

    /** lets the character move right */
    moveLeft() {
        this.x -= this.speed;   
    }

    /** lets the character jump */
    jump() {
        this.speedY = 30; 
    }
}
