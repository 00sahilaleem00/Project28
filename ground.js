class Ground{
    constructor(){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(width/2,height-100,width,20,options);
        this.width = width;
        this.height = 20;
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}
