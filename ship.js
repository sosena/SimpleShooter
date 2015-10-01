
Ship.prototype = Object.create(Phaser.Sprite.prototype);

Ship.prototype.constructor = Ship;

Ship.prototype.force = {x:0.0, y:0.0}; 


function Ship(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'ship');
    this.scale.set(0.5, 0.5);
    this.anchor.setTo(0.5, 0.5);
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.allowRotation = false;
    game.add.existing(this);

}

Ship.prototype.update = function() {
   
    var mX = game.input.mousePointer.x;
    var mY = game.input.mousePointer.y;
    /* look at the mouse */
   this.angle = Math.atan2(this.position.x - mX, this.position.y - mY)  * -57.2957795;
/*
    if(game.input.activePointer.isDown){
        game.physics.arcade.moveToXY(this , this.x , this.y - 3);
    }

    if(game.input.activePointer.isUp){
        game.physics.arcade.moveToXY(this , this.x , this.y + 3);
    }

     if(game.input.activePointer.isLeft){
        game.physics.arcade.moveToXY(this , this.x - 3 , this.y );
    }*/



    if (game.input.activePointer.isDown) {
        /* move towards the mouse */
        game.physics.arcade.moveToPointer(this, 60, game.input.activePointer, 500);
    }
   
}