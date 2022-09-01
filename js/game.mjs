export const game = () => {
    const columns = {
        column1: [
            { casilla: document.querySelector('#no1'), tiro: 'null' },
            { casilla: document.querySelector('#no4'), tiro: 'null' },
            { casilla: document.querySelector('#no7'), tiro: 'null' },
        ],
        column2: [
            { casilla: document.querySelector('#no2'), tiro: 'null' },
            { casilla: document.querySelector('#no5'), tiro: 'null' },
            { casilla: document.querySelector('#no8'), tiro: 'null' },
        ],
        column3: [
            { casilla: document.querySelector('#no3'), tiro: 'null' },
            { casilla: document.querySelector('#no6'), tiro: 'null' },
            { casilla: document.querySelector('#no9'), tiro: 'null' },
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
                if (localStorage.getItem('tiroRed') == 'true') {
                    document.querySelector(`#imageTurn${i}`).setAttribute("src", '../assets/resources/icons/tache.png');
                    localStorage.setItem('tiroRed', false);
                    localStorage.setItem('tiroBlue', true);
                    column[i].casilla.disabled = 'true';
                    column[i].casilla.style.cursor = 'default';
                } else if (localStorage.getItem('tiroBlue') == 'true') {
                    document.querySelector(`#imageTurn${i}`).setAttribute("src", '../assets/resources/icons/circulo.png');
                    column[i].tiro = 'blue';
                    localStorage.setItem('tiroRed', true);
                    localStorage.setItem('tiroBlue', false);
                    column[i].casilla.disabled = 'true';
                    column[i].casilla.style.cursor = 'default';
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
    document.querySelector('#game').style.display = 'none';
    document.querySelector('#victory').style.display = 'flex';
    document.querySelector('#victory').classList.add('red');
    document.querySelector('#victory').innerHTML = 'Gana el Rojo';
}
const victoriaBlue = () => {
    document.querySelector('#game').style.display = 'none';
    document.querySelector('#victory').style.display = 'flex';
    document.querySelector('#victory').classList.add('blue');
    document.querySelector('#victory').innerHTML = 'Gana el Azul';
}
const draw = () => {
    document.querySelector('#game').style.display = 'none';
    document.querySelector('#victory').style.display = 'flex';
    document.querySelector('#victory').innerHTML = 'Empate';
}