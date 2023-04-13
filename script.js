const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 240;
const CANVAS_HEIGHT = canvas.height = 120;

const playerImage = new Image();
// playerImage.src = 'dados.png';


playerImage.src = 'https://cdn.jsdelivr.net/gh/hsbergamo/cdn/dados.png';



const spriteWH = 120;
let gameFrame = 0;
const staggerFrames = 5;

let play = false;
let inc_roll = 0;



let result = 2, result2 = 2;

function animate() {

    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    ctx.drawImage(playerImage, spriteWH * result, 0, spriteWH, spriteWH, 0, 0, spriteWH, spriteWH);

    ctx.drawImage(playerImage, spriteWH * result2, 0, spriteWH, spriteWH, spriteWH, 0, spriteWH, spriteWH);


    gameFrame++;


    if (gameFrame % staggerFrames == 0 && play) {

        inc_roll += 1;

        if (inc_roll > 10) { play = false; setTimeout(reset, 50) }

        result = Math.floor(Math.random() * 6); result2 = Math.floor(Math.random() * 6);
    }



    requestAnimationFrame(animate);

}


but_jogar = document.getElementById('jogar');


but_jogar.addEventListener('click', () => {

    but_jogar.disabled = true;

    play = true;
    inc_roll = 0;

    clearInterval(interval)


});





function reset() {

    but_jogar.disabled = false;

}




function auto() {

    but_jogar.disabled = true;

    play = true;
    inc_roll = 0;





}

let interval;


playerImage.onload = () => {
    
    but_jogar.style.visibility = "visible";
    animate();

interval = setInterval(auto, 4000);

};

