
class Particle
{
	constructor(x,y,r)
	{
		var options={
			//isStatic:false,
			restitution:0.4
			//friction:1.2,
			//density:0.2

			}
		//this.x=x;
		//this.y=y;
		this.r=r
		//this.image=loadImage("stone.png");

		this.body=Bodies.circle(x, y,this.r, options)
		this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;	
			var angle=this.body.angle;	

			push()
			translate(pos.x, pos.y);
			rotate(angle);
			//rectMode(CENTER)
			strokeWeight(1);
			fill(255,0,255)
			//imageMode(CENTER);
			//image(this.image, 0,0,this.r, this.r)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}

