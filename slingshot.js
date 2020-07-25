class Slingshot{
    constructor(bodya,pointb){
    var options={
        bodyA:bodya,
       pointB:pointb,
        length:10,
        stiffness:0.04


    }
      this.sling=  Matter.Constraint.create(options)
      World.add(world,this.sling)
    
}
fly(){
    this.sling.bodyA=null
}
display(){
    if(this.sling.bodyA){
    line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y)
    }
}

    }
