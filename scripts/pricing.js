function drawCard1() {
const canvas = document.getElementById('gymMembership');
const ctx = canvas.getContext('2d');

ctx.font = '30px Arial';
ctx.textAlign = 'center';
ctx.fillStyle = 'green';
ctx.fillText('Basic', canvas.width / 2, canvas.height / 10);
ctx.fillText('10 $', canvas.width / 2, canvas.height/1.1);
ctx.font='bold 16px Arial'
ctx.fillStyle = 'black';
ctx.fillText("UNLIMITED ACCESS FOR A MONTH", canvas.width/2, canvas.height/4);
ctx.font='16px Arial';
ctx.fillText("Available 30 days after purchase", canvas.width/2, canvas.height/2.5);
ctx.fillText("Daily access", canvas.width/2, canvas.height/2);
ctx.fillText("1 entry/day", canvas.width/2, canvas.height/1.6)
}

function drawCard2() {
const canvas = document.getElementById('gymMembership2');
const ctx = canvas.getContext('2d');

ctx.font = '30px Arial';
ctx.textAlign = 'center';
ctx.fillStyle = 'yellow';
ctx.fillText('GOLD', canvas.width / 2, canvas.height / 10);
ctx.fillText('25 $', canvas.width / 2, canvas.height/1.1);
ctx.font='bold 16px Arial'
ctx.fillStyle = 'black';
ctx.fillText("UNLIMITED ACCESS FOR A MONTH", canvas.width/2, canvas.height/4);
ctx.font='16px Arial';
ctx.fillText("Available 30 days after purchase", canvas.width/2, canvas.height/2.5);
ctx.fillText("Daily access to all locations", canvas.width/2, canvas.height/2);
ctx.fillText("3 entries/day", canvas.width/2, canvas.height/1.6)
}

function drawCard3() {
    const canvas = document.getElementById('gymMembership3');
    const ctx = canvas.getContext('2d');
    
    ctx.font = '30px Arial';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'red';
    ctx.fillText('VIP', canvas.width / 2, canvas.height / 10);
    ctx.fillText('50 $', canvas.width / 2, canvas.height/1.1);
    ctx.font='bold 16px Arial'
    ctx.fillStyle = 'black';
    ctx.fillText("UNLIMITED ACCESS FOR A MONTH", canvas.width/2, canvas.height/4);
    ctx.font='16px Arial';
    ctx.fillText("Available 30 days after purchase", canvas.width/2, canvas.height/2.5);
    ctx.fillText("Daily access to all locations", canvas.width/2, canvas.height/2);
    ctx.fillText("Access to spa", canvas.width/2, canvas.height/1.6);
    ctx.fillText("Unlimited entries a day", canvas.width/2, canvas.height/1.35)
    }
    
    function subscription(){
        alert("You bought the Basic subscription! You are a member of SuperGym Now!"
        );
    }
    function subscription2(){
        alert("You bought the Gold subscription! You are a member of SuperGym Now!"
        );
    }
    function subscription3(){
        alert("You bought the Vip subscription! You are a member of SuperGym Now!"
        );
    }

drawCard1();
drawCard2();
drawCard3();










