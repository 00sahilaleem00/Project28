class Tree{
    constructor(){
        var options = {
            isStatic:false
        }

        this.body = Bodies.rectangle(600,350,350,350,options);
        this.width = 350;
        this.height = 350;
        this.image = loadImage('tree.png');
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image,590,430,this.width,this.height);
    }
}