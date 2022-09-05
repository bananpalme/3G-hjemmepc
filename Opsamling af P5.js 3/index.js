let x = 925

function setup(){
    createCanvas(windowWidth, windowHeight)
}

function draw(){
    if (x > 960){
        x -= 4
    } else if(x < 960) {
        x += 4
    }
    
    x += movedX
    fill(255)
    background('midnightblue')
    rect(x, 400, 50, 50,)
}