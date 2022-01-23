class Slingshot{
    constructor(bodyA, point2){
        var options = {
            bodyA: bodyA,
            pointB: point2,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.b1 = bodyA
        this.p2 = point2
    }
   fly (){
       this.sling.bodyA=null
   }
    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position
        var pointB = this.p2
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}