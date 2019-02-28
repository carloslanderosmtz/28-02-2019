var p1;
var p2;

function setup() {
  createCanvas(400, 400);
  p1 = new Ball();
  p2 = new Ball();
}

function draw() {
  background(220);
  p1.mostrar();
  p1.moverX();
  p1.moverY();
  
  if (p1.salirX()) {
    p1.botarX();
  }
  if (p1.salirY()) {
    p1.botarY();
  }
  
  p2.mostrar();
  p2.moverX();
  p2.moverY();
  
  if (p2.salirY()) {
    p2.botarY();
  }
      if (p2.salirX()) {
    p2.botarX();
  }
}
class Ball {
  constructor() {
    this.x = random(0, 200);
    this.y = random(0, 200);
    this.tam = 50;
    this.velx = 5;
    this.vely =5;

  }
  mostrar() {
    ellipse(this.x, this.y, this.tam, this.tam);
  }
  moverX() {
    this.x = this.x + this.velx;
  }
  moverY() {
    this.y = this.y + this.vely;
  }
  salirX() {
    var res;
    if (this.x < 25 || this.x > 375) {
      res = true;
    } else {
      res = false;
    }
    return res;

  }
  salirY() {
    var res;
    if (this.y < 25 || this.y > 375) {
      res = true;
    } else {
      res = false;
    }
    return res;

  }
  botarX() {
    this.velx = this.velx * -1;
  }
  botarY() {
    this.vely = this.vely * -1;
  }
}
