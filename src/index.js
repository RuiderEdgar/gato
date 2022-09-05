import { game, gameBot } from "./game.mjs";
import "./css/main.css";
import "./assets/icons/github.png";
import "./assets/icons/reload.png";
import "./assets/icons/score-board.png";
import "./assets/icons/tache.png";
import "./assets/icons/circulo.png";

window.addEventListener('load', () => {
    //LocalStogare para saber si se entra por primera vez a la pagina
    if (!sessionStorage.getItem('ingreso')) {
        sessionStorage.setItem('red', 0);
        sessionStorage.setItem('blue', 0);
        // establecer el sessionStorage en 1 para que no se vuelva a cumplir la condicion
        sessionStorage.setItem('ingreso', 1);
        localStorage.setItem('tiroRed', true);
        localStorage.setItem('tiroBlue', false);
    };
    document.querySelector('.header-tablero').style.display = 'none';
    //Para el puntaje actual
    document.querySelector('#redScore').innerHTML = sessionStorage.getItem('red');
    document.querySelector('#blueScore').innerHTML = sessionStorage.getItem('blue');
    document.querySelector('#txtEasteEgg').style.display = 'none';
    document.querySelector('#EasteEggTitle').style.display = 'none';

    //Para mostrar o no el boton de reiniciar el puntaje
    if (parseInt(sessionStorage.getItem('red')) > 0 || parseInt(sessionStorage.getItem('blue')) > 0) {
        document.querySelector('.container-btn-reboot').style.display = 'flex';
    }
    //Construyendo el tablero
    const buildTablero = () => {
        var divGame = document.querySelector('#game');
        for (let i = 1; i <= 9; i++) {
            var casilla = document.createElement('button');
            casilla.classList.add('casilla');
            casilla.setAttribute("id", `no${i}`);
            var imageTurnTache = document.createElement('img');
            imageTurnTache.classList.add('imageTurnTache');
            imageTurnTache.setAttribute("id", `imageTurnTache${i}`);
            imageTurnTache.setAttribute("src", './assets/icons/tache.png');
            var imageTurnCirculo = document.createElement('img');
            imageTurnCirculo.classList.add('imageTurnCirculo');
            imageTurnCirculo.setAttribute("id", `imageTurnCirculo${i}`);
            imageTurnCirculo.setAttribute("src", './assets/icons/circulo.png');

            casilla.appendChild(imageTurnTache);
            casilla.appendChild(imageTurnCirculo);
            divGame.appendChild(casilla);
        };
    }

    const btnTwoPlayers = document.querySelector('#twoPlayers');
    //Boton dos jugadores escuchando
    btnTwoPlayers.addEventListener('click', () => {
        const reloadBtn = document.querySelector('#btn-retry');
        //Boton reload escuchando
        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        })
        btnTwoPlayers.style.display = 'none';
        btnBot.style.display = 'none';
        document.querySelector('.header-tablero').style.display = 'grid';
        document.querySelector('#tablero').classList.remove('container-btn');
        document.querySelector('#game').style.display = 'grid';
        document.querySelector('#turno').innerHTML = JSON.parse(localStorage.getItem('tiroRed')) ? 'Empieza Tache' : 'Empieza Circulo';
        JSON.parse(localStorage.getItem('tiroRed')) ?
            document.querySelector('#turno').classList.add('red') :
            document.querySelector('#turno').classList.add('blue');
        buildTablero();

        game();
    });

    const btnBot = document.querySelector('#bot');
    btnBot.addEventListener('click', () => {
        btnTwoPlayers.style.display = 'none';
        btnBot.style.display = 'none';
        const reloadBtn = document.querySelector('#btn-retry');
        //Boton reload escuchando
        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        })
        btnTwoPlayers.style.display = 'none';
        btnBot.style.display = 'none';
        document.querySelector('.header-tablero').style.display = 'grid';
        document.querySelector('#tablero').classList.remove('container-btn');
        document.querySelector('#game').style.display = 'grid';
        document.querySelector('#turno').innerHTML = JSON.parse(localStorage.getItem('tiroRed')) ? 'Empieza Tache' : 'Empieza Circulo';
        document.querySelector('#txtBluePlayer').innerHTML = "Bot 🤖"
        JSON.parse(localStorage.getItem('tiroRed')) ?
            document.querySelector('#turno').classList.add('red') :
            document.querySelector('#turno').classList.add('blue');
        buildTablero();

        gameBot();
    });


    //Reset score
    const resetbtn = document.querySelector('#resetScore');
    resetbtn.addEventListener('click', () => {
        sessionStorage.setItem('red', 0);
        sessionStorage.setItem('blue', 0);
        window.location.reload();
    })

    //EasterEgg
    const easterEgg = document.querySelector('#easterEgg');
    easterEgg.addEventListener('click', () => {
        btnBot.style.display = 'none';
        btnTwoPlayers.style.display = 'none';
        document.querySelector('#tablero').classList.add('container-easterEgg');
        document.querySelector('#txtEasteEgg').style.display = 'block';
        document.querySelector('#txtEasteEgg').innerHTML = 'Te Amo Paola 💙';
        document.querySelector('#EasteEggTitle').style.display = 'block';

    })


})