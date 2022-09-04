export const game = () => {
    const columns = {
        column1: [
            { casilla: document.querySelector('#no1'), tiro: 'null', noCasilla: 1 },
            { casilla: document.querySelector('#no4'), tiro: 'null', noCasilla: 4 },
            { casilla: document.querySelector('#no7'), tiro: 'null', noCasilla: 7 },
        ],
        column2: [
            { casilla: document.querySelector('#no2'), tiro: 'null', noCasilla: 2 },
            { casilla: document.querySelector('#no5'), tiro: 'null', noCasilla: 5 },
            { casilla: document.querySelector('#no8'), tiro: 'null', noCasilla: 8 },
        ],
        column3: [
            { casilla: document.querySelector('#no3'), tiro: 'null', noCasilla: 3 },
            { casilla: document.querySelector('#no6'), tiro: 'null', noCasilla: 6 },
            { casilla: document.querySelector('#no9'), tiro: 'null', noCasilla: 9 },
        ]
    };
    event(columns, columns.column1);
    event(columns, columns.column2);
    event(columns, columns.column3);
}

const event = (columns, column) => {

    for (let i = 0; i < column.length; i++) {
        column[i].casilla.addEventListener('click', () => {
            if (column[i].tiro == 'null') {
                //Turnos
                if (JSON.parse(localStorage.getItem('tiroRed'))) {
                    column[i].tiro = 'red';
                    localStorage.setItem('tiroRed', false);
                    localStorage.setItem('tiroBlue', true);
                    column[i].casilla.disabled = 'true';
                    column[i].casilla.style.cursor = 'default';
                    document.querySelector(`#imageTurnTache${column[i].noCasilla}`).style.display = "inline";
                    document.querySelector('#turno').classList.remove('red')
                    document.querySelector('#turno').classList.add('blue')
                    document.querySelector('#turno').innerHTML = 'Turno Circulo'

                } else if (JSON.parse(localStorage.getItem('tiroBlue'))) {
                    column[i].tiro = 'blue';
                    localStorage.setItem('tiroRed', true);
                    localStorage.setItem('tiroBlue', false);
                    column[i].casilla.disabled = true;
                    column[i].casilla.style.cursor = 'default';

                    document.querySelector(`#imageTurnCirculo${column[i].noCasilla}`).style.display = "inline";
                    document.querySelector('#turno').classList.remove('blue');
                    document.querySelector('#turno').classList.add('red');
                    document.querySelector('#turno').innerHTML = 'Turno Tache';

                }
                victoria(columns);
            }
        });
    }
}

var tiros = 0;
const victoria = (columns) => {
    tiros++;
    //por filas
    if (columns.column1[0].tiro == 'red' && columns.column2[0].tiro == 'red' && columns.column3[0].tiro == 'red') {
        victoriaRed();
    } else if (columns.column1[0].tiro == 'blue' && columns.column2[0].tiro == 'blue' && columns.column3[0].tiro == 'blue') {
        victoriaBlue();
    } else if (columns.column1[1].tiro == 'red' && columns.column2[1].tiro == 'red' && columns.column3[1].tiro == 'red') {
        victoriaRed();
    } else if (columns.column1[1].tiro == 'blue' && columns.column2[1].tiro == 'blue' && columns.column3[1].tiro == 'blue') {
        victoriaBlue();
    } else if (columns.column1[2].tiro == 'red' && columns.column2[2].tiro == 'red' && columns.column3[2].tiro == 'red') {
        victoriaRed();
    } else if (columns.column1[2].tiro == 'blue' && columns.column2[2].tiro == 'blue' && columns.column3[2].tiro == 'blue') {
        victoriaBlue();
    }
    //por columnas
    else if (columns.column1[0].tiro == 'red' && columns.column1[1].tiro == 'red' && columns.column1[2].tiro == 'red') {
        victoriaRed();
    } else if (columns.column1[0].tiro == 'blue' && columns.column1[1].tiro == 'blue' && columns.column1[2].tiro == 'blue') {
        victoriaBlue();
    } else if (columns.column2[0].tiro == 'red' && columns.column2[1].tiro == 'red' && columns.column2[2].tiro == 'red') {
        victoriaRed();
    } else if (columns.column2[0].tiro == 'blue' && columns.column2[1].tiro == 'blue' && columns.column2[2].tiro == 'blue') {
        victoriaBlue();
    } else if (columns.column3[0].tiro == 'red' && columns.column3[1].tiro == 'red' && columns.column3[2].tiro == 'red') {
        victoriaRed();
    } else if (columns.column3[0].tiro == 'blue' && columns.column3[1].tiro == 'blue' && columns.column3[2].tiro == 'blue') {
        victoriaBlue();
    }
    //por diagonal
    else if (columns.column1[0].tiro == 'red' && columns.column2[1].tiro == 'red' && columns.column3[2].tiro == 'red') {
        victoriaRed();
    } else if (columns.column1[0].tiro == 'blue' && columns.column2[1].tiro == 'blue' && columns.column3[2].tiro == 'blue') {
        victoriaBlue();
    } else if (columns.column1[2].tiro == 'red' && columns.column2[1].tiro == 'red' && columns.column3[0].tiro == 'red') {
        victoriaRed();
    } else if (columns.column1[2].tiro == 'blue' && columns.column2[1].tiro == 'blue' && columns.column3[0].tiro == 'blue') {
        victoriaBlue();
    } else if (tiros === 9) {
        draw();
    }
}

//Para no repetir lo que pasa cuando un jugador gana
const victoriaRed = () => {
    document.querySelector('#turno').classList.remove('blue');
    document.querySelector('#turno').classList.add('red');
    document.querySelector('#turno').innerHTML = 'Gana el Rojo';
    var casillas = document.getElementsByClassName('casilla');
    //Desactivando las demas casillas
    for (let i = 0; i < casillas.length; i++) {
        casillas[i].disabled = true;
        casillas[i].style.cursor = 'default';
    }
    //Aumentando el score
    sessionStorage.setItem('red', (parseInt(sessionStorage.getItem('red')) + 1));
    document.querySelector('#redScore').innerHTML = sessionStorage.getItem('red');


}
const victoriaBlue = () => {
    document.querySelector('#turno').classList.remove('red');
    document.querySelector('#turno').classList.add('blue');
    document.querySelector('#turno').innerHTML = 'Gana el Azul';
    var casillas = document.getElementsByClassName('casilla');
    //Desactivando las demas casillas
    for (let i = 0; i < casillas.length; i++) {
        casillas[i].disabled = true;
        casillas[i].style.cursor = 'default';
    }
    sessionStorage.setItem('blue', (parseInt(sessionStorage.getItem('blue')) + 1));
    document.querySelector('#blueScore').innerHTML = sessionStorage.getItem('blue');
}
const draw = () => {
    document.querySelector('#turno').classList.remove('red');
    document.querySelector('#turno').classList.remove('blue');
    document.querySelector('#turno').classList.add('draw');
    document.querySelector('#turno').style.display = 'flex';
    document.querySelector('#turno').innerHTML = 'Empate';
    var casillas = document.getElementsByClassName('casilla');
    //Desactivando las demas casillas
    for (let i = 0; i < casillas.length; i++) {
        casillas[i].disabled = true;
        casillas[i].style.cursor = 'default';
    }
}