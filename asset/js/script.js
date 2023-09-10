let speed;
let breakingCar;
let contador = 0;
const msgI = document.getElementById("msgI");
const msgII = document.getElementById("msgII");
const msgIII = document.getElementById("msgIII");
const displayKm = document.querySelector("#displayKm");
const displayMiles = document.querySelector("#displayMiles");

function accelerator() {
    speed = setInterval(() => {
        if (contador > 120) {
            displayKm.innerHTML = kilometersHour(contador);
            displayMiles.innerHTML = milesHour(contador);
            msgIII.style.opacity = "1"
            msgIII.innerHTML = "PERIGO ALTA VELOCIDADE"
        }
        else {
            displayKm.innerHTML = kilometersHour(contador);
            displayMiles.innerHTML = milesHour(contador);
            msgIII.style.opacity = "0"
        }
        contador++;
        stoping()
    }, 100);
    msgI.style.opacity = "1";
    msgII.style.opacity = "0";


};

function breaking() {
    breakingCar = setInterval(() => {
        if (contador > 120) {
            displayKm.innerHTML = kilometersHour(contador);
            displayMiles.innerHTML = milesHour(contador);
            msgIII.style.opacity = "1"
            msgIII.style.innerHTML = "PERIGO ALTA VELOCIDADE"
        }
        else {
            displayKm.innerHTML = kilometersHour(contador);
            displayMiles.innerHTML = milesHour(contador);
            msgIII.style.opacity = "0"
        }
        contador--;
        stoping();
    }, 50);
    msgII.style.opacity = "1";
    msgI.style.opacity = "0";
};

function stoping() {
    if (contador > 300) {
        clearInterval(speed);
        contador = 300;
    }
    if (contador < 0) {
        clearInterval(breakingCar);
        contador = 0
        msgIII.style.opacity = "1";
        msgIII.innerHTML = "CARRO PARADO"
    }
};

function stableSpeed() {
    clearInterval(speed);
    clearInterval(breakingCar);
};
function kilometersHour(value) {
    return (`${value} km/h`);
};
function milesHour(value) {
    return (`${(value / 1.60934).toFixed(0)} mph`);
};

function tokmHours() {
    displayMiles.style.display = "none"
    displayKm.style.display = "block"
}
function tomilesHours() {
    displayKm.style.display = "none"
    displayMiles.style.display = "block"
};
