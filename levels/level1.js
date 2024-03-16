let level1;

/* it creates the level with a function, so the game is restartable */
function initLevel() {

 level1 = new Level(
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Endboss()
    ],
    [
        new CollectableCoin(),
        new CollectableCoin(),
        new CollectableCoin(),
        new CollectableCoin(),
        new CollectableCoin(),
        
    ],
    [
        new CollectableSalsa(),
        new CollectableSalsa(),
        new CollectableSalsa(),
        new CollectableSalsa(),
        new CollectableSalsa(),
        new CollectableSalsa(),
        new CollectableSalsa(),
        new CollectableSalsa(),
        new CollectableSalsa(),
        new CollectableSalsa(),
        new CollectableSalsa()
    ],
    [
        new Cloud()
    ],
    [
        new BackgroundObject('./img/5_background/layers/air.png', -719),
        new BackgroundObject('./img/5_background/layers/3_third_layer/2.png', -719),
        new BackgroundObject('./img/5_background/layers/2_second_layer/2.png', -719),
        new BackgroundObject('./img/5_background/layers/1_first_layer/2.png', -719),

        new BackgroundObject('./img/5_background/layers/air.png', 0),
        new BackgroundObject('./img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('./img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('./img/5_background/layers/1_first_layer/1.png', 0),

        new BackgroundObject('./img/5_background/layers/air.png', 719),
        new BackgroundObject('./img/5_background/layers/3_third_layer/2.png', 719),
        new BackgroundObject('./img/5_background/layers/2_second_layer/2.png', 719),
        new BackgroundObject('./img/5_background/layers/1_first_layer/2.png', 719),

        new BackgroundObject('./img/5_background/layers/air.png', 719*2),
        new BackgroundObject('./img/5_background/layers/3_third_layer/1.png', 719*2),
        new BackgroundObject('./img/5_background/layers/2_second_layer/1.png', 719*2),
        new BackgroundObject('./img/5_background/layers/1_first_layer/1.png', 719*2),

        new BackgroundObject('./img/5_background/layers/air.png', 719*3),
        new BackgroundObject('./img/5_background/layers/3_third_layer/2.png', 719*3),
        new BackgroundObject('./img/5_background/layers/2_second_layer/2.png', 719*3),
        new BackgroundObject('./img/5_background/layers/1_first_layer/2.png', 719*3)
    ]
);
}
