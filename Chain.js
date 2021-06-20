class Chain{
    constructor(BodyA, BodyB, Stiffness, Length){

        var chain_options={
            bodyA: BodyA,
            bodyB: BodyB,
            stifness: Stiffness,
            length: Length
        }
        this.chain = Constraint.create(chain_options)
        World.add(world, this.chain)    
    }
    display(){
        var pointA = this.chain.bodyA.position
        var pointB = this.chain.bodyB.position

        strokeWeight (5)
        line (pointA.x, pointA.y, pointB.x, pointB.y)
    }
}