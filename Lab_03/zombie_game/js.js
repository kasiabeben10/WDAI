const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const sadMusic = document.getElementById("sad-music");
const shotSound = document.getElementById("shot-sound");
const popup = document.getElementById("popup");
const restartButton = document.getElementById("restart-button");
const crosshair = document.getElementById("crosshair");
const spriteWidth = 1800;
const spriteHeight = 312;
const newZombieTime = 1500 //1 zombie co 1,5s
let mouseX = 0;
let mouseY = 0;
let score = 0;
let lives = 3;
let gameOver = true;
let zombies = [];

const fullHeartImg = new Image();
fullHeartImg.src = "./images/full_heart.png";
const emptyHeartImg = new Image();
emptyHeartImg.src = "./images/empty_heart.png";
const zombieSprite = new Image();
zombieSprite.src = 'images/walkingdead.png';


function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function crosshairMove(e){
    crosshair.style.top = e.pageY + "px"
    crosshair.style.left = e.pageX + "px"
  }


function drawScoreAndLives(ctx, lives, score) {
    const canvasWidth = ctx.canvas.width;
    const canvasHeight = ctx.canvas.height;
    const scale = canvasWidth/600;
    const fontsize = Math.max(18, Math.min(48 * scale, 76));
    const height = fontsize+10;
    const heartWidth = fontsize;
    const heartHeight = fontsize;
    const heartMargin = fontsize*0.3;

    const drawLives = () => {
        for (let i = 0; i < 3; i++) {
            if (i<lives){
                ctx.drawImage(fullHeartImg, fontsize + i * (heartWidth + heartMargin), height - heartHeight / 2, heartWidth, heartHeight);
            } else {
                ctx.drawImage(emptyHeartImg, fontsize + i * (heartWidth + heartMargin), height - heartHeight / 2, heartWidth, heartHeight);
            }
        }
    };
    const drawScore = () => {
        ctx.font = `bold ${fontsize}px Arial`;
        ctx.textAlign = "right";
        ctx.textBaseline = "middle"; 
        ctx.fillStyle = "#FFFFFF";
        if (score<0){
            ctx.fillText(Math.abs(score).toString().padStart(5, "0").padStart(6,"-"), canvasWidth-fontsize, height);
        }
        else {
            ctx.fillText(score.toString().padStart(5, "0"), canvasWidth-fontsize, height);
        }
    };
    drawLives();
    drawScore();
}


class Zombie {
    constructor() {
        this.scale = canvas.width/1200 * Math.random() * 2 + 0.8;
        this.width = 80 * this.scale;
        this.height = 100 * this.scale;
        this.x = canvas.width;
        this.y = Math.random() * (canvas.height - this.height);
        this.speed = Math.random() * 3 + 1;
        this.frame = 0; 
        this.frameCount = 10; 
        this.steps = 0;
    }

    update() {
        this.x -= this.speed;
        this.steps++;
        if (this.steps>5){
            this.frame = (this.frame+1)%this.frameCount;
            this.steps = 0
        }
    }

    draw() {
        ctx.drawImage(zombieSprite, this.frame * 200, 0, 200, 312, this.x, this.y, this.width, this.height);
        //ctx.drawImage(image, sx, sy, sWisth, sHeight, dx, dy, dWidth, dHeight)
        //(obrazek, przesunięcie na sprite, rozmiary pojedynczego sprite, pozycja na canvasie, wyświetlany rozmiar)
    }
    isHit(mouseX, mouseY) {
        return (
            mouseX >= this.x &&
            mouseX <= this.x + this.width &&
            mouseY >= this.y &&
            mouseY <= this.y + this.height
        );
    };
    remove() {
        const index = zombies.indexOf(this);
        if (index > -1) zombies.splice(index, 1);
    }
}

function newZombie() {
    if (gameOver) return;
    zombies.push(new Zombie());
    setTimeout(newZombie, newZombieTime);
}


function animate() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    drawScoreAndLives(ctx, lives, score);
    zombies.forEach((zombie) => {
        zombie.update();
        zombie.draw();
        if (zombie.x + zombie.width < 0){
            zombie.remove();
            lives--;
        }
       
    });
    if (lives <= 0) {
        endGame();
    } else {
        requestAnimationFrame(animate);
    }
}

function startGame(){
    score = 0;
    lives = 3;
    gameOver = false;
    zombies = [];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    crosshair.style.display = "block";
    window.addEventListener("mousemove", crosshairMove);
    drawScoreAndLives(ctx, lives, score);
    newZombie();
    animate();
}

function endGame() {
    gameOver = true;
    sadMusic.play();
    popup.classList.remove('hidden');
    window.removeEventListener("mousemove", crosshairMove);
    crosshair.style.display = "none";
}

canvas.addEventListener('click', (e) => {
    if (gameOver) return;
    mouseX = e.clientX;
    mouseY = e.clientY;
    shotSound.pause();
    shotSound.currentTime=0;
    shotSound.play();
    const hitZombie = zombies.find((zombie) => zombie.isHit(mouseX, mouseY));

    if (hitZombie) {
        score += 20;
        hitZombie.remove();
    } else {
        score -= 5;
    }
});

restartButton.addEventListener('click', () => {
    popup.classList.add('hidden');
    sadMusic.pause();
    sadMusic.currentTime = 0;
    startGame();
});

zombieSprite.onload = () => {
    startGame();
}



