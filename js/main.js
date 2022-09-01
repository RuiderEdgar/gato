import { game } from "./game.mjs";
window.addEventListener('load', () => {

    //LocalStogare para saber si se entra por primera vez a la pagina
    if (!sessionStorage.getItem('ingreso')) {
        sessionStorage.setItem('red', 0);
        sessionStorage.setItem('blue', 0);
        // establecer el localstorage en 1 para que no se vuelva a cumplir la condicion
        sessionStorage.setItem('ingreso', 1);
    };

    const buildTablero = () => {
        var divGame = document.querySelector('#game');

        for (let i = 1; i <= 9; i++) {
            var casilla = document.createElement('button');
            casilla.classList.add('casilla');
            casilla.setAttribute("id", `no${i}`);
            var imageTurn = document.createElement('img');
            imageTurn.classList.add('imageTurn');
            imageTurn.setAttribute("id", `imageTurn${i}`);
            imageTurn.setAttribute("src", '');
            casilla.appendChild(imageTurn)
            divGame.appendChild(casilla);


        };
    }

    const btnTwoPlayers = document.querySelector('#twoPlayers');
    btnTwoPlayers.addEventListener('click', () => {
        btnTwoPlayers.style.display = 'none';
        btnBot.style.display = 'none';
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