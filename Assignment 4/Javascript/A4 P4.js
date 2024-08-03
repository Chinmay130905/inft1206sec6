/*
Chinmay Singh 
100948966
2024-08-02
Assignment 4 Part 4
*/



// Get the canvas element and its 2D drawing context
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// Get the score element to display the number of remaining balls
const score = document.querySelector('p');

// Set the canvas dimensions to match the window size
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// Function to generate a random number between min and max (inclusive)
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random RGB color
function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

// Base class for shapes
class Shape {
    constructor(x, y, velX, velY){
        this.x = x; 
        // X-coordinate

        this.y = y; 
        // Y-coordinate

        this.velX = velX; 
        // Velocity in X direction

        this.velY = velY; 
        // Velocity in Y direction
    }
}

// Class for Ball, which extends Shape
class Ball extends Shape {
   constructor(x, y, velX, velY, color, size, exists) {
      super(x, y, velX, velY);
      // Ball's color
      this.color = color; 
      // Ball's size
      this.size = size; 
      // Whether the ball is active or not
      this.exists = exists; 
   }

   // Draw the ball on the canvas
   draw() {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.fill();
   }

   // Update the ball's position and handle boundary collisions
   update() {
      // Reverse direction if hitting the right or left boundary
      if ((this.x + this.size) >= width) {
         this.velX = -Math.abs(this.velX);
      }

      if ((this.x - this.size) <= 0) {
         this.velX = Math.abs(this.velX);
      }

      // Reverse direction if hitting the top or bottom boundary
      if ((this.y + this.size) >= height) {
         this.velY = -Math.abs(this.velY);
      }

      if ((this.y - this.size) <= 0) {
         this.velY = Math.abs(this.velY);
      }

      // Update the ball's position based on its velocity
      this.x += this.velX;
      this.y += this.velY;
   }

   // Detect collisions with other balls and change color on collision
   collisionDetect() {
    for (const ball of balls) {
      if (!(this === ball) && ball.exists) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // If balls collide, change their colors
        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB();
        }
      }
    }
  }  
}


class EvilCircle extends Shape {
    constructor(x, y){
        // Initialize with fixed velocity
        super(x, y, 20, 20); 
        // Evil Circle color
        this.color = 'white'; 
        // Evil Circle size
        this.size = 10; 

        // Add event listeners to control the Evil Circle with key presses
        window.addEventListener("keydown", (e) => {
            switch (e.key) {
              case "a":
                this.x -= this.velX; 
                // Move left
                break;
              case "d":
                this.x += this.velX; 
                // Move right
                break;
              case "w":
                this.y -= this.velY; 
                // Move up
                break;
              case "s":
                this.y += this.velY; 
                // Move down
                break;
            }
          });

        window.addEventListener("keydown", (e) => {
            switch (e.key) {
              case "ArrowLeft":
                this.x -= this.velX; 
                // Move left
                break;
              case "ArrowRight":
                this.x += this.velX; 
                // Move right
                break;
              case "ArrowUp":
                this.y -= this.velY; 
                // Move up
                break;
              case "ArrowDown":
                this.y += this.velY; 
                // Move down
                break;                
            }
        });          
    }

    // Draw the Evil Circle on the canvas
    draw() {
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.stroke();
    }

    // Check if the Evil Circle is out of bounds and adjust its position
    checkBounds() {
        if ((this.x + this.size) >= width) {
            // Keep it within the canvas width
            this.x -= this.size; 
        }

        if ((this.x - this.size) <= 0) {
            // Keep it within the canvas width
            this.x += this.size; 
        }

        if ((this.y + this.size) >= height) {
            // Keep it within the canvas height
            this.y -= this.size; 
        }

        if ((this.y - this.size) <= 0) {
            // Keep it within the canvas height
            this.y += this.size; 
        }
    }

    // Detect collisions with balls and remove collided balls
    collisionDetect() {
        for (const ball of balls) {
          if (ball.exists) {
            const dx = this.x - ball.x;
            const dy = this.y - ball.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // If Evil Circle collides with a ball, remove the ball
            if (distance < this.size + ball.size) {
              ball.exists = false;
              ball_count -= 1;
            }
          }
        }
    }  
}

// Array to store the balls
const balls = [];

// Create an Evil Circle instance
const evil = new EvilCircle(10,10);

// Generate 25 random balls and add them to the array
while (balls.length < 25) {
   const size = random(10,20);
   const ball = new Ball(
      random(0 + size, width - size),
      random(0 + size, height - size),
      random(-7,7),
      random(-7,7),
      randomRGB(),
      size,
      
      // Ball is initially active
      true 
      
   );

  balls.push(ball);
}

// Initialize the count of active balls
let ball_count = balls.length;

// Main animation loop
function loop() {
   // Clear the canvas with a semi-transparent black rectangle
   ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
   ctx.fillRect(0, 0, width, height);

   // Update and draw each ball
   for (const ball of balls) {
     if (ball.exists) {
        ball.draw();
        ball.update();
        ball.collisionDetect();
     }
   }

   // Update the score display with the number of remaining balls
   score.textContent = `Ball Count: ${ball_count}`;

   // Draw the EvilCircle, check its bounds, and detect collisions
   evil.draw();
   evil.checkBounds();
   evil.collisionDetect();

   // Request the next animation frame
   requestAnimationFrame(loop);
}

// Start the animation loop
loop();
