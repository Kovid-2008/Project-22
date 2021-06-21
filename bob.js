class Bob{
    constructor(x,y,radius){
        
        
        var options={
          frictionAir:0.01,
          isStatic:false
        
        }

        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        World.add(world,this.body);
       
    }
    show(){
        var pos = this.body.position;
        push();
        fill("Green");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius);
        pop();
    }
}