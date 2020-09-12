class Ground{
    constructor(){
        this.body = Bodies.rectangle(width/2,height-100,width,20);
        this.width = width;
        this.height = 20;
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER)
        rect(width/2,height-100,this.width,this.height)
    }
}