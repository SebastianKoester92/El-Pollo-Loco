class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBarHealth = new StatusBarHealth();
    statusBarBottle = new StatusBarBottle();
    statusBarCoin = new StatusBarCoin();
    throwableObjects = [];


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkThrowObjects();
            this.checkCollisions();
        }, 50);
    }

    checkThrowObjects() {
        if(this.keyboard.d && this.statusBarBottle.percentage > 0 && this.throwableObjects.length == 0) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 120);
            this.throwableObjects.push(bottle);
            this.statusBarBottle.percentage -= 20;
            this.statusBarBottle.setPercentage(this.statusBarBottle.percentage);
        }
    }

    checkCollisions() {
        this.characterCollisionWithEnemy();
        this.bottleCollisionWithGround();
        this.bottleCollisionWithEnemy();
        this.collisionWithCoin();
        this.collisionWithSalsa();
    }

    characterCollisionWithEnemy() {
        this.level.enemies.forEach( (enemy, i) => {
            if(this.character.isColliding(enemy) && !this.character.isAboveGround() && enemy.chickenAlive == true) {
                this.character.hit();
                this.statusBarHealth.setPercentage(this.character.energy);
            } else {
                if(this.character.isColliding(enemy) && this.character.isAboveGround() && enemy.chickenAlive == true) {
                    this.character.jump();
                    enemy.chickenAlive = false;       
                    this.removeChickenFromMap(); 
                }
            }
        }); 
    }

    bottleCollisionWithEnemy() {
        this.throwableObjects.forEach( (bottle, i) => {
            this.level.enemies.forEach( (enemy, y) => {
                if(bottle.isColliding(enemy)) {
                    enemy.chickenAlive = false;
                    this.removeChickenFromMap(y);
                    bottle.bottleSplashIndex = 1;
                    bottle.bottleFlyIndex = 0;
                    bottle.hitIndex = 1;
                    this.removeSplashedBottle(i);  
                }
            });   
        });
    }

    bottleCollisionWithGround() {
        this.throwableObjects.forEach( (bottle, i) => {
            if(bottle.y > 310) {
                bottle.bottleSplashIndex = 1;
                bottle.bottleFlyIndex = 0;
                bottle.hitIndex = 1;
                this.removeSplashedBottle(i);  
            }   
        });  
    }

    collisionWithCoin() {
        this.level.collectableCoins.forEach( (coin, i) => {
            if(this.character.isColliding(coin)) {
                this.statusBarCoin.percentage += 20;
                this.statusBarCoin.setPercentage(this.statusBarCoin.percentage);
                this.removeCoinFromMap(i);
            }
        }); 
    }

    collisionWithSalsa() {
        this.level.collectableSalsa.forEach( (salsa, i) => {
            if(this.character.isColliding(salsa) && this.statusBarBottle.percentage < 100 ) {
                this.statusBarBottle.percentage += 20;
                this.statusBarBottle.setPercentage(this.statusBarBottle.percentage);
                this.removeSalsaFromMap(i);
            }
        }); 
    }

    removeSplashedBottle(i){
        setTimeout(() => {
            this.throwableObjects.splice(i, 1);
        }, 500) ;
    }

    removeChickenFromMap() {
        setTimeout(() => {
            this.level.enemies.forEach( (enemy, i) => {
                if(!enemy.chickenAlive) {
                    this.level.enemies.splice(i, 1);  
                } 
            });
        }, 500);    
    }

    removeCoinFromMap(i) {
        this.level.collectableCoins.splice(i, 1); 
    }

    removeSalsaFromMap(i) {
        this.level.collectableSalsa.splice(i, 1); 
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);

        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.collectableCoins);
        this.addObjectsToMap(this.level.collectableSalsa);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
        this.addToMap(this.character);

        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBarHealth);
        this.addToMap(this.statusBarBottle);
        this.addToMap(this.statusBarCoin);
        this.ctx.translate(this.camera_x, 0);

        this.ctx.translate(-this.camera_x, 0);
        
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o); 
        });
    }
    
    addToMap(mo) {
        if(mo.otherDirection){
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if(mo.otherDirection){
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

}