let shapes = [];
let shapeTypes = ['circle', 'line', 'square', 'triangle'];
let range = 60;
let bgColor;

function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    
    colorMode(RGB, 255);
    bgColor = color(240, 248, 255); //#f0f8ff
    colorMode(HSL, 360, 100, 100, 1);
    
    for (let i = 0; i < 100; i++) {
        shapes[i] = new shape();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    for (let i = 0; i < shapes.length; i++) {
        shapes[i].position = createVector(random(0, windowWidth), random(0, windowHeight));
    }
}

function draw() {
    background(bgColor);
    noFill();
    strokeWeight(2);
    stroke(color(0, 0 , 0, 0.1)); line(0,0,width,height); //debug
    for (let i = 0; i < shapes.length; i++) {
        shapes[i].refresh();
        shapes[i].draw();
    }
}

class shape {
    constructor() {
        this.shape = random(shapeTypes);

        this.color = color(random(0, 360), 90, 75);

        this.position = createVector(random(0, windowWidth), random(0, windowHeight));
        this.velocity = createVector(random(-1, 1), random(-1, 1));
        this.velocity.limit(0.04);

        if (this.shape == 'circle') {
            this.r = random(1, 25);
        }
        else if (this.shape == 'square' || this.shape == 'triangle') {
            this.a = random(10, 25);
            this.deg = random(0, 2*PI);
        }
        else if (this.shape == 'line') {
            this.r = random(20, 40);
            this.deg = random (0, 2*PI);
        }
    }
    refresh() {
        let a = createVector(0, 0);
        for (let other of shapes) {
            if (other != this && this.position.dist(other.position) < range) {
                a.add(this.position);
                a.sub(other.position);
                a.div(sq(this.position.dist(other.position)));
            }
        }
        if (this.position.x < range/6) {
            a.x += 0.01;
        }
        if (this.position.x > windowWidth - range/6) {
            a.x -= 0.01;
        }
        if (this.position.y < range/6) {
            a.y += 0.01;
        }
        if (this.position.y > windowHeight - range/6) {
            a.y -= 0.01;
        }
        this.velocity.add(a);
        this.velocity.limit(0.1);

        a.mult(0);
        let mouse = createVector(mouseX, mouseY);
        if (this.position.dist(mouse) < range * 2) {
            a.add(this.position);
            a.sub(mouse);
            a.div(sq(this.position.dist(mouse)));
            a.mult(10);
            //a.limit(1);
        }
        this.velocity.add(a);

        this.position.add(this.velocity);
    }
    draw() {
        stroke(this.color);
        if (this.shape == 'circle') {
            circle(this.position.x, this.position.y, this.r);
        }
        else if (this.shape == 'line') {
            push();
                translate(this.position.x, this.position.y);
                line(-this.r*cos(this.deg)/2, -this.r*sin(this.deg)/2, this.r*cos(this.deg)/2, this.r*sin(this.deg)/2);
            pop();
        }
        else if (this.shape == 'square') {
            push();
                translate(this.position.x, this.position.y);
                rotate(this.deg);
                square(0, 0, this.a);
            pop();
        }
        else if (this.shape == 'triangle') {
            push();
                translate(this.position.x, this.position.y);
                rotate(this.deg);
                translate(-this.a/2, (this.a*sqrt(3)/2)*1/3);
                triangle(0, 0, 0 + this.a, 0, 0 + (this.a / 2), 0 - (this.a*sqrt(3)/2));
            pop();
        }
    }
}