const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
const h1 = document.querySelector("h1")
const btn = document.getElementById("btn")
const scorefim = document.getElementById("score-final")
const scoreDiv = document.querySelector('.score');
const iniciar = document.querySelector("myModal")

var idUsuario = sessionStorage.getItem("idUsuario");

const menu = document.querySelector("menu")
const audiolost = new Audio("./assets/perdeu.mp3")
const audio = new Audio('./assets/audio.mp3');
const audiofundo = new Audio("./assets/musiquinha.mp3")
const size = 30;
var contador = 0;
const ip="10.18.6.64"
console.log(idUsuario);

let cobrinha = [
    { x: 270, y: 240 },
];


const inserir = () => {


    fetch(`http://${ip}:8080/pontos/inserir/${idUsuario}?pontos=${contador}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
    }).then((response) => {
        response.json()
            .then((res) => {
                alert("dados inseridos com sucesso")
                console.log(res)


            }).then(data => {
                console.log(data); // Retorna os dados inseridos, se tudo ocorrer corretamente
            }).catch(error => {
                console.error('Erro:', error);
            });

    }).catch(error => {
        console.error('Erro:', error);
    });





}



const listarporId = () => {
    var dados = {
        pontos: contador
    }

    fetch(`http://${ip}:8080/pontos/listar/${idUsuario}`, {
        method: "Get",
        headers: {
            'Content-Type': 'application/json'
        }

    }).then((response) => {
        response.json()
            .then((res) => {
                alert("dados listados com sucesso")
                console.log(res)

            }).catch(error => {
                console.error('Erro:', error);
            });

    }).catch(error => {
        console.error('Erro:', error);
    });
}



const desenhocobrinha = () => {
    ctx.fillStyle = "yellow";

    // for (let index = 0; index < cobrinha.length; index++) {
    //     const element = cobrinha[index];
    //     ctx.fillStyle="black"
    //     ctx.fillRect(element.x,element.y,size,size)

    // }


    cobrinha.forEach((posicao, index) => {
        if (index == cobrinha.length - 1) {
            ctx.fillStyle = "white"
        }
        // Defina o valor do border radius desejado

        ctx.beginPath();
        ctx.stroke();

        ctx.fillRect(posicao.x, posicao.y, size, size)
        //    console.log("desenhou cobrinha");
    })
}
let loopId
let direcao
let lostMusicPlayed = false


let conter = 0
let velocidadeInicial = 300;
let velocidadeMinima = 60;
let pontosParaDiminuir = 15;
let iteracoes = 0;
let boolgameOver = false;

const movercobrinha = () => {
    //   console.log("ENTROU MOVERCOBRINHA");
    if (!direcao) return

    const head = cobrinha[cobrinha.length - 1]
    // cobrinha.shift é o array o shift remove o primeiro elemento ou seja o INDEX 0 o pop remove o ultimo index do array
    if (direcao == "right") {
        cobrinha.push({ x: head.x + size, y: head.y })
    }
    if (direcao == "left") {
        cobrinha.push({ x: head.x - size, y: head.y })
    }
    if (direcao == "down") {
        cobrinha.push({ x: head.x, y: head.y + size })
    }
    if (direcao == "up") {
        cobrinha.push({ x: head.x, y: head.y - size })
    }
    cobrinha.shift()
}




const drawGrid = () => {

    ctx.lineWidth = 1
    ctx.strokeStyle = "#007bff"
    for (let i = 30; i < canvas.width; i += 30) {
        ctx.beginPath()
        ctx.lineTo(i, 0)
        ctx.lineTo(i, 600)
        ctx.stroke()


        ctx.beginPath()
        ctx.lineTo(0, i)
        ctx.lineTo(600, i)
        ctx.stroke()
    }
}

const randomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min)
}
const randomPosition = () => {
    const number = randomNumber(0, canvas.width - size)
    return Math.round(number / 30) * 30
}

const randomColor = () => {
    const red = randomNumber(0, 255)
    const green = randomNumber(0, 255)
    const blue = randomNumber(0, 255)

    return `rgb(${red},${green},${blue})`


}


var food = {
    x: randomPosition(),
    y: randomPosition(),
    color: randomColor()
}
const drawFood = () => {
    ctx.shadowColor = food.color
    ctx.shadowBlur = 10
    ctx.fillStyle = food.color
    ctx.fillRect(food.x, food.y, size, size)
    ctx.shadowBlur = 0
}

const chackEat = () => {
    const head = cobrinha[cobrinha.length - 1]

    if (head.x == food.x && head.y == food.y) {
        iteracoes++;
        contador += 5;
        h1.innerText = contador
        audio.play()
        cobrinha.push(head)
        let x = randomPosition()
        let y = randomPosition()
        while (cobrinha.find((posicao) => posicao.x == x && posicao.y == y)) {
            x = randomPosition()
            y = randomPosition()
        }
        food.x = x,
            food.y = y,
            food.color = randomColor()
    }
}

function openModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('show-modal');
}







async function getIPv4() {
    try {
        const response = await fetch('https://api64.ipify.org?format=json');
        const data = await response.json();
        const ipv4 = data.ip;
        console.log('Endereço IPv4: ', ipv4);
        return ipv4;
    } catch (error) {
        console.error('Erro ao obter o endereço IPv4: ', error);
        return null;
    }
}

getIPv4();

const musica = () => {
    audiofundo.play()
}

audiofundo.addEventListener('ended', () => {
    musica();
});

const pararMusica = () => {
    audiofundo.pause();
}

const gameover = () => {
    direcao = undefined
    pararMusica()

}

const checkcolison = () => {
    const head = cobrinha[cobrinha.length - 1]
    const neckindex = cobrinha.length - 2
    const colisao = head.x < 0 || head.x > 570 || head.y < 0 || head.y > 570

    const selfcolisson = cobrinha.find((position, index) => {
        return index < neckindex && position.x == head.x && position.y == head.y

    })
    // sessionStorage.setItem('Score / Maquina'+getIPv4,contador);
    if (colisao || selfcolisson) {
        gameOver = true;
        velocidadeInicial = 300
        gameover()
        direcao = undefined
        if (!lostMusicPlayed) {
            // listarporId()
            inserir()
            audiolost.play();
            lostMusicPlayed = true; // Definir a variável como verdadeira para que a música não seja tocada novamente
        }
        scorefim.innerText = contador
        scoreDiv.style.display = 'none';
        const modal = document.getElementById('modal');
        modal.classList.add('show-modal');
    }

}


let counter = 0;
let velocidade = 300;

const gameloop = () => {

    // console.log(velocidade);
    clearInterval(loopId)
    ctx.clearRect(0, 0, 600, 600)
    drawGrid()
    drawFood()
    movercobrinha()
    desenhocobrinha()
    chackEat()
    checkcolison()


    document.addEventListener("keydown", (event) => {
        if ((event.key == "ArrowRight" || event.key == "d") && direcao != "left") {
            direcao = "right";
            musica();
        }
        if ((event.key == "ArrowLeft" || event.key == "a") && direcao != "right") {
            direcao = "left";
            musica();
        }
        if ((event.key == "ArrowUp" || event.key == "w") && direcao != "down") {
            direcao = "up";
            musica();
        }
        if ((event.key == "ArrowDown" || event.key == "s") && direcao != "up") {
            direcao = "down";
            musica();
        }
    });
    



    iteracoes++;
    conter++;

    if (conter % pontosParaDiminuir === 0 && velocidadeInicial > velocidadeMinima) {
        velocidadeInicial -= 30;
    }

    loopId = setTimeout(() => {
        gameloop();
    }, velocidadeInicial);

}


gameloop()





document.addEventListener("keydown", (event) => {
    if ((event.key == "ArrowRight" || event.key == "d") && direcao != "left") {
        direcao = "right";
        musica();
    }
    if ((event.key == "ArrowLeft" || event.key == "a") && direcao != "right") {
        direcao = "left";
        musica();
    }
    if ((event.key == "ArrowUp" || event.key == "w") && direcao != "down") {
        direcao = "up";
        musica();
    }
    if ((event.key == "ArrowDown" || event.key == "s") && direcao != "up") {
        direcao = "down";
        musica();
    }
});


btn.addEventListener("click", () => {
    lostMusicPlayed = false
    velocidadeInicial = 300
    h1.innerText = "00";
    scoreDiv.style.display = 'block';
    const modal = document.getElementById('modal');
    modal.classList.remove('show-modal');
    contador = 0;
    cobrinha = [{ x: 270, y: 240 }]
    food = {
        x: randomPosition(),
        y: randomPosition(),
        color: randomColor()
    }


})





