import { game } from "./game.mjs";
window.addEventListener('load', () => {

    //LocalStogare para saber si se entra por primera vez a la pagina
    if (!sessionStorage.getItem('ingreso')) {
        sessionStorage.setItem('red', 0);
        sessionStorage.setItem('blue', 0);
        // establecer el localstorage en 1 para que no se vuelva a cumplir la condicion
        sessionStorage.setItem('ingreso', 1);
    };
    document.querySelector('.header-tablero').style.display = 'none';

    const buildTablero = () => {

        var divGame = document.querySelector('#game');
        for (let i = 1; i <= 9; i++) {
            var casilla = document.createElement('button');
            casilla.classList.add('casilla');
            casilla.setAttribute("id", `no${i}`);
            var imageTurnTache = document.createElement('img');
            imageTurnTache.classList.add('imageTurnTache');
            imageTurnTache.setAttribute("id", `imageTurnTache${i}`);
            imageTurnTache.setAttribute("src", '../assets/resources/icons/tache.png');
            var imageTurnCirculo = document.createElement('img');
            imageTurnCirculo.classList.add('imageTurnCirculo');
            imageTurnCirculo.setAttribute("id", `imageTurnCirculo${i}`);
            imageTurnCirculo.setAttribute("src", '../assets/resources/icons/circulo.png');

            casilla.appendChild(imageTurnTache);
            casilla.appendChild(imageTurnCirculo);
            divGame.appendChild(casilla);
        };
    }

    const btnTwoPlayers = document.querySelector('#twoPlayers');
    btnTwoPlayers.addEventListener('click', () => {
        const reloadBtn = document.querySelector('#btn-retry');
        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        })
        btnTwoPlayers.style.display = 'none';
        btnBot.style.display = 'none';
        document.querySelector('.header-tablero').style.display = 'grid';
        document.querySelector('#tablero').classList.remove('container-btn');
        // document.querySelector('.header-tablero').style.display = 'grid';
        // document.querySelector('.container-btn-reboot').style.display = 'flex';
        document.querySelector('#game').style.display = 'grid';
        buildTablero();

        game();


    });

    const btnBot = document.querySelector('#bot');
    btnBot.addEventListener('click', () => {
        btnTwoPlayers.style.display = 'none';
        btnBot.style.display = 'none';
    });





})