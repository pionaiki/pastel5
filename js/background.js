function setup() {
    createCanvas(windowWidth, windowHeight);
    }
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function draw() {
    background(240, 248, 255); //#f0f8ff
    line(0,0,width,height); //debug
}