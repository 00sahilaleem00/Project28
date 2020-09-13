class Tree{
    constructor(){
        this.x = 600;
        this.y = 430;
        this.width = 350;
        this.height = 350;
        this.image = loadImage('tree.png');
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.width,this.height);
    }
}
