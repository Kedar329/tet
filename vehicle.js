class vehicle{

   constructor(x,y){
     this.pos = createVector(random(width),random(height));
     this.target = createVector(x,y);
     this.vel = p5.Vector.random2D();
     this.acc = createVector();
     this.ms = 6;
     this.mf = 1.0;
   }
    update(){
      this.pos.add(this.vel);
      this.vel.add(this.acc);
      this.acc.mult(0);
    }
    show(){
      fill(255);
      noStroke();
      ellipse(this.pos.x,this.pos.y,4);
    }
    behaviour(){
      //var seek = this.seek(this.target);
    var arrive = this.arrive(this.target);
    var applyForce = this.applyForce(arrive);
    }
        arrive(target){
          var d = p5.Vector.sub(target, this.pos);
          var l = d.mag();
          this.speed = this.ms;
          if(d < 100){
          var  speed = map(d, 0 , 100, 0 , this.ms);
          }
          d.setMag(speed);
          var steer = p5.Vector.sub(d,this.vel);
          steer.limit(this.mf);
          return steer;
        }
  applyForce(arrive){
    this.acc.add(arrive)
  }

}
