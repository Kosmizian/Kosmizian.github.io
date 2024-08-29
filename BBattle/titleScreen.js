class titleScreen extends Phaser.Scene{
    constructor(){
        super("titleScreen");
        
    }
    preload(){
        this.load.image("player", "Assets/player box.png");
        this.load.spritesheet("background", "Assets/backgroundsprite.png", {
            frameWidth:64,
            frameHeight: 64,
        })
    }
    create(){
         this.currentframe =0;
        this.background = this.add.tileSprite(-2500,-2500,5000, 5000, "background", 0).setOrigin(0,0).setScale(2);
        this.player = this.physics.add.sprite(100, 100, "player").setScale(5);
        this.cameras.main.setBounds(-2500,-2500, 5000, 5000);
        this.cameras.main.startFollow(this.player);
 
        this.boundaries = this.add.group();
        this.leftb = this.physics.add.staticImage(-2500,0,null).setSize(10, 5000);
        this.rightb = this.physics.add.staticImage(2500,0,null).setSize(10, 5000);
        this.topb = this.physics.add.staticImage(0,-2500,null).setSize(5000, 10);
        this.bottomb = this.physics.add.staticImage(0,2500,null).setSize(5000, 10);
        this.boundaries.add(this.leftb);
        this.boundaries.add(this.rightb);
        this.boundaries.add(this.topb);
        this.boundaries.add(this.bottomb);
        this.physics.add.collider(this.player, this.boundaries);
    }


    pmovement(){
       
        
        this.player.setVelocity(0);
        if(move.up){
            this.player.setVelocityY(-playerdata.speed);
        }
        if(move.down){
            this.player.setVelocityY(playerdata.speed);
        }
        if(move.left){
            this.player.setVelocityX(-playerdata.speed);
        }
        if(move.right){
            this.player.setVelocityX(playerdata.speed);
        }
        this.player.body.velocity.normalize().scale(playerdata.speed);
        
    }
    
    backgroundanimation(){
        
    if(this.currentframe>=4.00001){
        this.currentframe=0;
    }
    this.background.setFrame(Math.round(this.currentframe));
    this.currentframe += 2/60;
    }

    update(){
        this.backgroundanimation();
        this.pmovement();
        

        // this.rectangle.x+=60/60;
    }
}