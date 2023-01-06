window.onload = function() {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
  
   // Set the canvas size
canvas.width = 360;
canvas.height = 70;

// Draw the background
context.fillStyle = '#000000';
context.fillRect(0, 0, canvas.width, canvas.height);

context.translate(canvas.width/11, canvas.height / 8);

// Draw the stickman
context.beginPath();
context.arc(50, 25, 15, 0, 2 * Math.PI); // Head
context.moveTo(50, 40);
context.lineTo(50, 50); // Torso
context.moveTo(50, 50);
context.lineTo(45, 60); // Left leg
context.moveTo(50, 50);
context.lineTo(55, 60); // Right leg
context.moveTo(50, 40);
context.lineTo(40, 25); // Left arm
context.moveTo(50, 40);
context.lineTo(60, 25); // Right arm
context.strokeStyle = '#ffffff';
context.lineWidth = 2;
context.stroke();

// Add eyes
context.moveTo(47, 22);
context.arc(47, 22, 1, 0, 2 * Math.PI); // Left eye
context.moveTo(53, 22);
context.arc(53, 22, 1, 0, 2 * Math.PI); // Right eye

context.strokeStyle = '#ffffff';
context.lineWidth = 2;
context.stroke();

// Draw the barbell
context.beginPath();
context.rect(0, 10, 20, 30); // Left weight plate
context.rect(80, 10, 20, 30); // Right weight plate
context.moveTo(20, 25);
context.lineTo(80, 25); // Bar
context.strokeStyle = '#ffffff';
context.lineWidth = 2;
context.stroke();
};
//   // Add text
//   context.font = '24px sans-serif';
//   context.fillStyle = '#ffffff';
//   context.textAlign = 'center';
//   context.textBaseline = 'middle';
//   context.translate(5,5);
//   context.fillText('Left', -30,35);
  
//   context.textAlign='right';
//   context.fillText('Right text', 340, 35);

  
  