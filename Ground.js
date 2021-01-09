class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          density:1.5,
          restitution:0.5,
          friction:2
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("yellow");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };