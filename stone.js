class Stone {
    constructor(){
        var options= {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }

        this.body = Bodies.rectangle(300,100,50,50,options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage('stone.png');
        World.add(world, this.body);
    }
      display(){
        imageMode(CENTER);
        image(this.image, 300,100, this.width, this.height);
    }
}