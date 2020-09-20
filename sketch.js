var drop,rain = []


function preload() {
  backgroundImg = loadImage("winter background.jpg");
 
}



function setup() {
  createCanvas(windowWidth, windowHeight);

  for(var i=0; i<400; i=i+1){
    drop = new Drop(random(0,width), random(0,height))
    rain.push(drop);
  }
  
  
}

function draw() {
  background(backgroundImg);

 

  for(var i=0; i<rain.length; i=i+1){
    rain[i].display()
    rain[i].fall();
  }
  
}

