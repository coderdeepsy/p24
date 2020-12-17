class Paper {
    constructor(x, y, width, height) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, 10, options);
      this.radius = 10;      

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill(255);
      strokeWeight(3)
      stroke("yellow")
      circle(0, 0, this.radius);
      pop();
    }
  };
  