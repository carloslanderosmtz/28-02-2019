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
  p1.moverx();
  p1.movery();
  if (p1.salirx()) {
    p1.botarx();
  }
  if (p1.saliry()) {
    p1.botary();
  }

  p2.mostrar();
  p2.moverx();
  p2.movery();
  if (p2.salirx()) {
    p2.botarx();
  }
  if (p2.saliry()) {
    p2.botary();

  }
}

class Ball {
  constructor() {
    this.x = random(0, 400);
    this.y = random(0, 400);
    this.tam = 50;
    this.velx = 3;
    this.vely = 3;
    this.R = 0;
    this.G = 0;
    this.B = 0;
  }

  mostrar() {
    fill(this.R,this.G,this.B);
    ellipse(this.x, this.y, this.tam, this.tam);
  }

  moverx() {
    this.x = this.x + this.velx;
  }

  movery() {
    this.y = this.y + this.vely;
  }

  salirx() {
    var res;
    if (this.x < 25 || this.x > 375) {
      res = true;
    } else {
      res = false;
    }
    return res;
  }

  saliry() {
    var res;
    if (this.y < 25 || this.y > 375) {
      res = true;
    } else {
      res = false;
    }
    return res;
  }

  botarx() {
    this.velx = this.velx * -1;
    this.R = random(255);
    this.G = random(255);
    this.B = random(255);
  }
  botary() {
    this.vely = this.vely * -1
    this.R = random (255);
    this.G = random (255);
    this.B = random (255);
  }
}
