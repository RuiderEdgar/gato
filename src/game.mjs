//Game with two players
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

const victoria = (columns) => {
    let lleno = false;
    var arrayColumns = [columns.column1, columns.column2, columns.column3];
    var aplanado = arrayColumns.flat()
    var arrayCasillas = [];
    for (let i in aplanado) {
        arrayCasillas.push(aplanado[i].tiro)
    }
    lleno = arrayCasillas.includes('null') ? false : true;
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
    } else if (lleno) {
        draw();
    }
}


//Para no repetir lo que pasa cuando un jugador gana
const victoriaRed = () => {
    console.log("Antes del incremento: ", sessionStorage.getItem('red'));
    sessionStorage.setItem('RedWin', (parseInt(sessionStorage.getItem('RedWin')) + 1));
    console.log("antes del ajuste a 3 RedWin: ", sessionStorage.getItem('RedWin'))

    if (parseInt(sessionStorage.getItem('RedWin')) === 1) {
        sessionStorage.setItem('RedWin', 3);
        console.log("Antes del incremento dentro de if: ", sessionStorage.getItem('red'));
        sessionStorage.setItem('red', (parseInt(sessionStorage.getItem('red')) + 1));
        console.log("Despues del incremento dentro del if: ", sessionStorage.getItem('red'));

        document.querySelector('#redScore').innerHTML = sessionStorage.getItem('red');
    }
    console.log("Despues del incremento: ", sessionStorage.getItem('red'));
    console.log("despues del ajuste a 3 RedWin: ", sessionStorage.getItem('RedWin'))
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

    //game over
    localStorage.setItem('gameOver', true);

}
const victoriaBlue = () => {
    sessionStorage.setItem('BlueWin', (parseInt(sessionStorage.getItem('BlueWin')) + 1));
    //Aumentando el score
    if (parseInt(sessionStorage.getItem('BlueWin')) === 1) {
        sessionStorage.setItem('blue', (parseInt(sessionStorage.getItem('blue')) + 1));
        document.querySelector('#blueScore').innerHTML = sessionStorage.getItem('blue');
    }

    document.querySelector('#turno').classList.remove('red');
    document.querySelector('#turno').classList.add('blue');
    document.querySelector('#turno').innerHTML = 'Gana el Azul';
    var casillas = document.getElementsByClassName('casilla');
    //Desactivando las demas casillas
    for (let i = 0; i < casillas.length; i++) {
        casillas[i].disabled = true;
        casillas[i].style.cursor = 'default';
    }

    //game over
    localStorage.setItem('gameOver', true);
}
const draw = () => {
    //game over
    localStorage.setItem('gameOver', true);
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

//game with bot
export const gameBot = () => {
    sessionStorage.setItem('RedWin', 0)
    sessionStorage.setItem('BlueWin', 0)
    localStorage.setItem('gameOver', false);
    localStorage.setItem('tiroRed', true);
    localStorage.setItem('tiroBlue', false);
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
    eventBot(columns, columns.column1);
    eventBot(columns, columns.column2);
    eventBot(columns, columns.column3);
}

const eventBot = (columns, column) => {
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
                    document.querySelector('#turno').classList.remove('red');
                    document.querySelector('#turno').classList.add('blue');
                    document.querySelector('#turno').innerHTML = 'Turno Circulo';
                    //tiro bot (el tiro del bot se hace del turno del jugador ya que estamos en un addEventListen y se ejecuta despues de todos los cambios del tiro del jugador)
                    //Evaluamos si el juego ya ha terminado
                    if (JSON.parse(localStorage.getItem('gameOver')) === false) {
                        //Creamos una funcion para que el bot tire
                        setTimeout(() => {
                            tiroBot(columns);
                        }, 200);
                    }
                }
                //"turno" bot - para el cambio del tiro
                else if (JSON.parse(localStorage.getItem('tiroBlue'))) {
                    //Evalua en caso de victoria despues del tiro
                    //Conservamos los cambios que se hacen cuando se tira
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
            }
        });
    }
}

const tiroBot = (columns) => {
    let bandera = false;
    //tomar el objeto con las columnas
    const arrayColumns = [columns.column1, columns.column2, columns.column3];
    //El tiro al azar
    var tiroAzarColumna = Math.floor(Math.random() * 3);
    var tiroAzarCasilla = Math.floor(Math.random() * 3);
    //Evaluar si ya termino el juego y no entre en bucle
    if (JSON.parse(localStorage.getItem('gameOver')) === false) {
        //evaluar si no esta ocupada
        if (arrayColumns[tiroAzarColumna][tiroAzarCasilla].tiro === "null") {
            arrayColumns[tiroAzarColumna][tiroAzarCasilla].casilla.click();
        } else if (arrayColumns[tiroAzarColumna][tiroAzarCasilla].tiro !== "null") {
            //Evaluar si ya terminó el juego para que no entre en un bucle recursivo
            victoria(columns);
            if (JSON.parse(localStorage.getItem('gameOver')) === true) {
                bandera = true;
            }
            //funcion recursiva
            tiroBot(columns);
        }
    }
    //Todo Quitar esto y arreglar de otra manera el score con banderas
    //No aumente en medida el score

    if (!bandera) {
        victoria(columns);
    }
}