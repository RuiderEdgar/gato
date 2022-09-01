import { casilla } from "./casilla.mjs";
window.addEventListener('load', () => {

    const buildTablero = () => {
        for (let i = 1; i <= 9; i++) {

            var casilla = document.createElement('button');
            casilla.classList.add('casilla');
            casilla.setAttribute("id", `no${i}`);
            buttonsGame.append(casilla);
        };
    }

    const btnTwoPlayers = document.querySelector('#twoPlayers');
    btnTwoPlayers.addEventListener('click', () => {
        btnTwoPlayers.style.display = 'none';
        btnBot.style.display = 'none';
        document.querySelector('#tablero').classList.remove('container-btn');
        document.querySelector('.header-tablero').style.display = 'grid';
        document.querySelector('.container-btn-reboot').style.display = 'flex';
        document.querySelector('#game').style.display = 'grid';

        buildTablero();
    });

    const btnBot = document.querySelector('#bot');
    btnBot.addEventListener('click', () => {
        btnTwoPlayers.style.display = 'none';
        btnBot.style.display = 'none';
    });

})