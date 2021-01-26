class Circle{
    constructor(x,y,r){
        var options={
            
        }
        this.r=r
        this.x=x
        this.y=y
        
        this.body= Bodies.circle(x,y,10,options);
        World.add(world,this.body)
        
    }
    display(){
        var pos=this.body.position.x;
        var angle =  this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        
       ellipseMode(RADIUS)
        ellipse(0,0,10);
        pop()
        
       
    }
    
}