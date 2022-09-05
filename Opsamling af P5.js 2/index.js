function setup(){
    createCanvas(windowWidth, windowHeight)
    background('midnightblue')
}

function draw(){

    stroke(255, 255, 255)
    noFill()
    ellipse(mouseX, mouseY, frameCount % 120)
}