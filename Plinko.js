
class Plinko
{
	constructor(x,y)
	{
		var options={
			isStatic:true,
			restitution:1.3,
			friction:7,
			density:10.2

			}
		this.x=x;
		this.y=y;
		this.r=10
		//this.image=loadImage("stone.png");
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var plinkopos=this.body.position;		
			
			push();
			translate(plinkopos.x, plinkopos.y);
			ellipseMode(RADIUS)
			strokeWeight(1);
			fill("white")
			ellipse(0,0,this.r, this.r);
			pop();
			
	}

}

