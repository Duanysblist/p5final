/*Code by Daniel Duany May 17th, 2018
A program that emulates the game "Super Mario"
that allows for the ability to move with the 
arrow keys. Most obstacles for aesthetic only.
Read about this code on my blog: https://icanduanything.wordpress.com/2018/05/18/my-final-project/*/

var mario //had to create a second mario variable in order to provide movement when it's a defined object
var on = false; //boolean value to go from one screen to another. 
var Cloud = { //declaring my cloud as an object
  x: 100,
  y: 200,
}
var shells; //variable to display and move my shells
var shell; //variable used to load shell image
var mountains; //variable for the background on second screen
var welcome = ["Here", "We", "Go"]; //variable for welcome text in an array to be ordered later on

//Images
function preload() { //used to load in images from jpg or png files in sketch folder
  mario = loadImage("mario.jpg.jpeg"); //loads Mario icon
  cloud = loadImage("cloud.jpg.jpg"); //loads both cloud icons
  shell = loadImage("shell.png"); //loads shells to be shot from one side of screen to other
  mountains = loadImage("mountains.png") //loads background image on second screen
}
 
function setup() {
  createCanvas(600, 600);
  
//Constructor Function calls on this  
  shells= new Shell(); //creates new shells every time the program loops in the constructor function
  
  }
  
    var Mario = { //object determining the x and y values for the mario icon to start
      x: 0,
      y: 415
    }

    var ladyBug = { // object determining values for ladybug
    x: 300,
    y: 250,
    r: 255,
    g: 0,
    b: 0,
    diam: 20,
    xspeed: 3
  }
  
    var sun = { //object determining values for sun
      x: 50,
      y: 50,
      diam: 150,
      r: 255,
      g: 255,
      b: 0
    }
    
    var grass = { //object determining the values for grass
      y: 550,
      w: 50,
      h: 50,
      r: 0,
      g: 255,
      b: 0
    }
    
    var flowers = { //object determining values for flowers
      y: 500,
      w: 20,
      h: 100
    }
    
    var bulbs = { //object determining values for flower bulbs
      y: 500,
      diam: 50,
      r: 150,
      g: 90,
      b: 0
    }
    
    var boxes = { // object determining values for boxes on start screen and play screen
      y: 300,
      w: 40,
      h: 40,
    }
    
    var words = { //object determining values for the words "Welcome to Super Mario"
      spacing: 20,
      y: 325,
    }
    
    var Welcome = { //object with values determined for the Here We Go text
      spacing: 200,
      x: 50,
      y: 500
    }
    
    var road = { //object with values determined for the road Mario walks on
      y: 450,
      l: 20,
      w: 5
    }
    
    var roadTwo = { //object with values determined for the second road
      y: 205
    }
  
function draw() {
  background(0); //background starts off as black

//Daytime level

  if(on) { //if the screen is switched on with the mousePressed function, the following will display
    background(mountains); //function creating a background pulled from the image I uploaded preload function
    
    fill(sun.r, sun.g, sun.b); //assigns the predetermined values for the sun
    ellipse(sun.x, sun.y, sun.diam, sun.diam);//sun
      for(j = 0; j <= width; j += 50) { //creates a loop for all items within these brackets
                                        //variable "j" defined and assigned the value of zero. The loop will continue for the width of the screen and created each item spaced 50 pixels apart
      stroke(0); //white outline for following shapes
      strokeWeight(4); //slight outline on shapes
      fill(grass.r, grass.g, grass.b); //assigns the predetermined values for the color of the grass
      rect(j, grass.y, grass.w, grass.h); //grass
      rect(j, flowers.y, flowers.w, flowers.h);//flower stalks
      
      fill(bulbs.r, bulbs.g, bulbs.b); //assigns the predetermined values for the color of the flower bulbs
      ellipse(j, bulbs.y, bulbs.diam, bulbs.diam);//flower bulbs
      
      stroke(0);//white outline for text
      textSize(30); //determines size of text
      text('?', j + words.spacing, words.y); // put "?" in all boxes, pulls values from words object defined above to space out the question marks, and places the question marks along the predetermined y axis value
      
      fill(random(255), random(255), random(255)); //fill the boxes with random colors that changes every time the loop finishes
      rect(j, boxes.y, boxes.w, boxes.h);//boxes
      } 

//Mario Icon

    image(mario, Mario.x, Mario.y);//created a new Mario object above because I already created a mario variable to load my image
      if(Mario.y > road.y) { //if the Mario icon's y-axis value is greater ( trying to go below the line) than the y-axis value of the road (predeterminged and static)
        Mario.y = road.y; //then the Mario icon will not be allowed below the road's y-axis value
      }
      if(Mario.x > 550) { //if Mario gets to the end of the road
        Mario.y = roadTwo.y - 25; //he will start up on the right end of the second road
      }

//LadyBug
    
    stroke(0); //white outline
    strokeWeight(3); //slight outline
    fill(ladyBug.r, ladyBug.g, ladyBug.b); //fills predetermined color values for the ladybug (red)
    ellipse(ladyBug.x, ladyBug.y, ladyBug.diam, ladyBug.diam); //ladybug shape
    ladyBug.x = ladyBug.x + ladyBug.xspeed; //making the ladybug move
      if(ladyBug.x > width || ladyBug.x < 0) { //if the ladybug hit's the extremes of the canvas on the x-axis
      ladyBug.xspeed = ladyBug.xspeed * -1 //the ladybug will reverse motion
    }
    
 //Allowing constructor function to display objects here and move them in the canvas   
    
    shells.display(); //calls the variable "shells" (above) to make sure it is defined, and calls on my constructor function to display and move the shells according to the parameters set in the constructor
    shells.move();

 //Clouds   
    image(cloud, Cloud.x, Cloud.y); //displays the image of the clouds with the x-axis and y-axis value I set above  
    image(cloud, Cloud.x + 300, Cloud.y); //offset from the other cloud so they aren't on top of each other
 
 //Roads   
     for(j = 0; j <= width; j += 5) { //moved it into the other for loop so it only displays on day screen
      fill(0);//black color
      rect(j, road.y, road.l, road.w);//road
      rect(j, roadTwo.y, road.l, road.w); //second road
    } //will create a loop with a variable declared as "j" with a value of zero, that will continue along the x-axis to the end of the canvas, spacing the rectangles that make up the road 5 pixels apart from each other

//Start Screen    
  }
  else{ //if the second screen is not created because the boolean value of "on" equals false (when we click the mouse), then the following actions will occur
    for(j = 0; j <= width; j += 50) { // creates another loop for all functions following this until the brackets are closed
                                      //the variable "j" is declared and has a value of zero, the functions will loop along the x-axis until the edge of the canvas is reached, and exerything will be spaced 50 pixels away from each other
    fill(225); //will make the color of the moon almost white, almost grey
    ellipse(sun.x, sun.y, sun.diam, sun.diam); //moon
    
    fill(random(255), random(255), random(255)); //fill in the boxes we declared above with random colors, but this time on the black background
    rect(j, boxes.y, boxes.w, boxes.h); //boxes
      
    textSize(30);
    stroke(0); //white outline
    text('?', j + words.spacing, words.y) // put "?" in all boxes just as they were in the second screen   
    }
    
    textSize(50);
    text('Welcome To Super Mario', words.spacing, 200) //displays the text "Welcome to Super Mario", spaced out using our same value as from our question marks, and is displayed along the y-axis value of 200

//Puts array into a text function   
   for(i = 0; i < 3; i++) { //creates a loop for the words in the welcome array to say here we go. There are only three words, so while "i" is leass than three, which it is, it will display the words in that order in a loop forever
    textSize(50);
    text(welcome[i], i * Welcome.spacing, Welcome.y); //pulls words from our welcome array to create text that are spaced out by multiplying our value for "i" by the value of spacing that we determined above in the object "Welcome"
   }
  }
  
    
}     

//Movement provided by directional keys
      
function keyPressed() { //calls a function that is already declared in the library of P5 called "keyPressed". Basically saying: "When the following keys are clicked, perform the following actions"
  if (keyCode === RIGHT_ARROW) { //if the right arrow key is clicked once
    Mario.x = Mario.x + 20 //move the Mario icon to the right 20 pixels
  } else if (keyCode === LEFT_ARROW) { //left arrow key clicked
    Mario.x = Mario.x - 20 //move Mario left 20 pixels
  } else if (keyCode === UP_ARROW) { //up arrow clicked
    Mario.y = Mario.y - 20 //move Mario up 20 pixels
  } else if (keyCode === DOWN_ARROW) { //down arrow clicked
    Mario.y = Mario.y + 20 //move Mario down 20 pixels
    }
  
  return false; //stops the function from executing continually
}

//Toggling from one screen to another

function mousePressed() { //calls another function already recognized in the P5 library that says if the mouse button is clicked just one, perform the following actions
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) { //if the mouse is anywhere within the canvas
    on = !on //make our variable "on" with the boolean value of "false" false. Basically saying, turn on the play screen
  }
}

//Shell constructor function

function Shell() { //constructor function for our shells. This calls on the variable "shells" that we created above and sees that it's value is "new Shells", meaning new shells will be created every time the constructor function loops
  this.x = 350; //places the shells' x position
  this.y = 360; //places the shells' y position
  this.speed = 10; // makes the shells move 10 pixels for every loop ran
  
    this.display = function() { //displays the shells on the canvas
      image(shell, this.x, this.y); //displays the image of the shell that we uploaded in the preload function, and places it in the x and y coordinates determined above
      image(shell, this.x, this.y - 250); //displays another shell on the second road
      
    }
    
    this.move = function() { //creates the function "move" that will perform in the "draw" function under the parameters set in this shell constructor function
      this.x = this.x - this.speed //moves the shell backwards along the x axis (determined by our values stated above)
          if(this.x < 0) { //provided the condition that the x coordinate of the shell is less than zero (hits the left edge of the screen), then...
        this.x = width; //the shells will start moving backwards again from the other edge of the canvas (the right side)
      }
    }
}
     


 