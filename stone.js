class Stone {
    constructor(){
        var options={
            isStatic:false,
            restitution:0,
            friction:1
        }

        this.body = Bodies.rectangle(250,390,20,20,options);
        this.width = 20;
        this.height = 20;
        this.image = loadImage('stone.png');
        World.add(world, this.body);
    }
      display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y, this.width*2.2, this.height*2.2);
    }
}
