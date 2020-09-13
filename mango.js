class Mango{
    constructor(x,y){
        var options = {
            isStatic: true,
        }

        this.body = Bodies.circle(x,y,20,options);
        this.radius = 20;
        this.image = loadImage('mango.png');
        World.add(world,this.body);
    }

    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.radius*2,this.radius*2);   
    }
}
