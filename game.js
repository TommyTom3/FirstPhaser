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
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
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
        this.sys.game.canvas.width,
        this.sys.game.canvas.height,
        0x00ff00
    ).setOrigin(0.5);

    const background = this.add.image(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        'background'
    ).setOrigin(0.5);

    background.setDisplaySize(this.sys.game.canvas.width, this.sys.game.canvas.height);

    console.log('Image size:', background.displayWidth, background.displayHeight);
}