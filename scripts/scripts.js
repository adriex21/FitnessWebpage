const canvas = document.getElementById('gymMembership');
const ctx = canvas.getContext('2d');

ctx.font = '24px sans-serif';
ctx.textAlign = 'center';
ctx.fillStyle = 'black';
ctx.fillText('Gym Membership', canvas.width / 2, canvas.height / 2);