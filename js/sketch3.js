//en la posicion del mouse.onClick reproducir 100 particulas
//pos init mouse x y Y
// direccion en x y Y * = -1


class Particle{
    constructor(x, y, size, xDir, yDir, img){
        this.x = x;
        this.y = y;
        this.xDir = xDir;
        this.yDir = yDir;
        this.size = size;
        this.img = img;

        this.intersect = function(other){
            let d = collideCircleCircle(this.x, this.y, this.size, other.x, other.y, this.size);
            if(d){                
                return true;
            }else{
                return false;
            }
        }

        this.changePos = function(){
            this.xDir = this.xDir * -1;
            this.yDir = this.yDir * -1;
        }

    }

   

    update(){
        
        this.x +=this.xDir;
        this.y +=this.yDir;

        if(this.x < 0 || this.x > windowWidth ){
            this.xDir = this.xDir * -1;

        }

        if(this.y < 0 || this.y > windowHeight){
            this.yDir = this.yDir * -1;
        }

    }

   

    display(){        
        stroke(255);
        
         line(mouseX, mouseY, this.x, this.y);

             push();
             fill(136, 107, 204);
            ellipse(this.x, this.y, 8, 8);
            pop();
        
    }
}

let canvas;

let count = 5;
let particles = [];
let img ;


  function preload(){
    img = loadImage('img/cube.png');
  }

  function mousePressed(){
   
             
    for(i = 0; i < count; i ++){
        particles[i] = new Particle(
            mouseX, 
            mouseY,
            3,
            random(-3, 3),
            random(3, -3),
            img
            

        );
        
    }

    

  }

function setup(){

canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0, 0);
canvas.parent('sketch-holder');
imageMode(CENTER);
noCursor();


mousePressed();

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }


function draw(){
    clear();
    push();
    stroke(238, 238, 238);
    strokeWeight(5);
    fill(255);
    ellipse(mouseX, mouseY, 40, 40);
    pop();


    for(i = 0; i < count; i++){
        particles[i].display();
        particles[i].update();

        for(let j = 0; j < count; j++){
            if( i != j && particles[i].intersect(particles[j])){
                particles[j].changePos();
                particles[i].changePos();
            }
        }
    }
    
}

