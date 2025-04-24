/* global Phaser */

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    backgroundColor: '#ffffff',
    scene: {
        preload: preload,
        create: create
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 800,
        height: 600,
        min: {
            width: 320,
            height: 240
        }
    },
    pixelArt: false
};

const game = new Phaser.Game(config);

function preload() {
    this.load.image('background', 'assets/background.png');
}

function create() {
    console.log('Config size:', this.sys.game.config.width, this.sys.game.config.height);
    console.log('Rendered size:', this.sys.game.canvas.width, this.sys.game.canvas.height);

    const rect = this.add.rectangle(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        this.cameras.main.width,
        this.cameras.main.height,
        0x00ff00
    ).setOrigin(0.5);   

    const background = this.add.image(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        'background'
    ).setOrigin(0.5);

    background.setDisplaySize(this.sys.game.canvas.width, this.sys.game.canvas.height);

    console.log('Image size:', background.displayWidth, background.displayHeight);   


// Adding blue circle 
const circleRadius = 30;
const circleX = this.cameras.main.centerX;
const circleY = this.cameras.main.height * 2 / 3 + 50;

//Create graphics object for circle 
const circle = this.add.graphics();
circle.fillStyle(0x0000ff, 1);
circle.fillCircle(circleX, circleY, circleRadius);

// Bring to front 
circle.setDepth(10);

//Make circle interactive
circle.setInteractive(
    new Phaser.Geom.Circle(circleX, circleY, circleRadius),
    Phaser.Geom.Circle.Contains
);

// Enable dragging
this.input.setDraggable(circle);
circle.on('drag', (pointer, dragX, dragY) => {

   circle.clear();
   circle.fillStyle(0x0000ff, 1);
   circle.fillCircle(dragX, dragY, circleRadius);

    // Update interactive area to follow circle 
    circle.input.hitArea.setTo(adjustedX, adjustedY, circleRadius);
});

}