const pixelToAdd = [[{"x":0,"y":0,"color":"transparent"},{"x":1,"y":0,"color":"transparent"},{"x":2,"y":0,"color":"transparent"},{"x":3,"y":0,"color":"#000000"},{"x":4,"y":0,"color":"#000000"},{"x":5,"y":0,"color":"#000000"},{"x":6,"y":0,"color":"#000000"},{"x":7,"y":0,"color":"#000000"},{"x":8,"y":0,"color":"#000000"},{"x":9,"y":0,"color":"#000000"},{"x":10,"y":0,"color":"#000000"},{"x":11,"y":0,"color":"#000000"},{"x":12,"y":0,"color":"#000000"},{"x":13,"y":0,"color":"transparent"},{"x":14,"y":0,"color":"transparent"},{"x":15,"y":0,"color":"transparent"},{"x":0,"y":1,"color":"transparent"},{"x":1,"y":1,"color":"transparent"},{"x":2,"y":1,"color":"#000000"},{"x":3,"y":1,"color":"#c5a487"},{"x":4,"y":1,"color":"#8B5C33"},{"x":5,"y":1,"color":"#8B5C33"},{"x":6,"y":1,"color":"#8B5C33"},{"x":7,"y":1,"color":"#8B5C33"},{"x":8,"y":1,"color":"#8B5C33"},{"x":9,"y":1,"color":"#8B5C33"},{"x":10,"y":1,"color":"#c5a487"},{"x":11,"y":1,"color":"#c5a487"},{"x":12,"y":1,"color":"#c5a487"},{"x":13,"y":1,"color":"#000000"},{"x":14,"y":1,"color":"transparent"},{"x":15,"y":1,"color":"transparent"},{"x":0,"y":2,"color":"transparent"},{"x":1,"y":2,"color":"#000000"},{"x":2,"y":2,"color":"#8B5C33"},{"x":3,"y":2,"color":"#8B5C33"},{"x":4,"y":2,"color":"#c5a487"},{"x":5,"y":2,"color":"#8B5C33"},{"x":6,"y":2,"color":"#8B5C33"},{"x":7,"y":2,"color":"#8B5C33"},{"x":8,"y":2,"color":"#8B5C33"},{"x":9,"y":2,"color":"#8B5C33"},{"x":10,"y":2,"color":"#8B5C33"},{"x":11,"y":2,"color":"#8B5C33"},{"x":12,"y":2,"color":"#c5a487"},{"x":13,"y":2,"color":"#c5a487"},{"x":14,"y":2,"color":"#000000"},{"x":15,"y":2,"color":"transparent"},{"x":0,"y":3,"color":"transparent"},{"x":1,"y":3,"color":"#000000"},{"x":2,"y":3,"color":"#8B5C33"},{"x":3,"y":3,"color":"#8B5C33"},{"x":4,"y":3,"color":"#8B5C33"},{"x":5,"y":3,"color":"#8B5C33"},{"x":6,"y":3,"color":"#8B5C33"},{"x":7,"y":3,"color":"#8B5C33"},{"x":8,"y":3,"color":"#8B5C33"},{"x":9,"y":3,"color":"#8B5C33"},{"x":10,"y":3,"color":"#8B5C33"},{"x":11,"y":3,"color":"#8B5C33"},{"x":12,"y":3,"color":"#8B5C33"},{"x":13,"y":3,"color":"#c5a487"},{"x":14,"y":3,"color":"#000000"},{"x":15,"y":3,"color":"transparent"},{"x":0,"y":4,"color":"transparent"},{"x":1,"y":4,"color":"#000000"},{"x":2,"y":4,"color":"#8B5C33"},{"x":3,"y":4,"color":"#8B5C33"},{"x":4,"y":4,"color":"#8B5C33"},{"x":5,"y":4,"color":"#E7C09D"},{"x":6,"y":4,"color":"#E7C09D"},{"x":7,"y":4,"color":"#E7C09D"},{"x":8,"y":4,"color":"#E7C09D"},{"x":9,"y":4,"color":"#8B5C33"},{"x":10,"y":4,"color":"#E7C09D"},{"x":11,"y":4,"color":"#E7C09D"},{"x":12,"y":4,"color":"#000000"},{"x":13,"y":4,"color":"#000000"},{"x":14,"y":4,"color":"transparent"},{"x":15,"y":4,"color":"transparent"},{"x":0,"y":5,"color":"transparent"},{"x":1,"y":5,"color":"transparent"},{"x":2,"y":5,"color":"#000000"},{"x":3,"y":5,"color":"#8B5C33"},{"x":4,"y":5,"color":"#E7C09D"},{"x":5,"y":5,"color":"#8B5C33"},{"x":6,"y":5,"color":"#8B5C33"},{"x":7,"y":5,"color":"#8B5C33"},{"x":8,"y":5,"color":"#8B5C33"},{"x":9,"y":5,"color":"#E7C09D"},{"x":10,"y":5,"color":"#8B5C33"},{"x":11,"y":5,"color":"#8B5C33"},{"x":12,"y":5,"color":"#000000"},{"x":13,"y":5,"color":"transparent"},{"x":14,"y":5,"color":"transparent"},{"x":15,"y":5,"color":"transparent"},{"x":0,"y":6,"color":"transparent"},{"x":1,"y":6,"color":"transparent"},{"x":2,"y":6,"color":"#000000"},{"x":3,"y":6,"color":"#8B5C33"},{"x":4,"y":6,"color":"#8B5C33"},{"x":5,"y":6,"color":"#E7C09D"},{"x":6,"y":6,"color":"#FFFFFF"},{"x":7,"y":6,"color":"#000000"},{"x":8,"y":6,"color":"#E7C09D"},{"x":9,"y":6,"color":"#E7C09D"},{"x":10,"y":6,"color":"#E7C09D"},{"x":11,"y":6,"color":"#FFFFFF"},{"x":12,"y":6,"color":"#000000"},{"x":13,"y":6,"color":"transparent"},{"x":14,"y":6,"color":"transparent"},{"x":15,"y":6,"color":"transparent"},{"x":0,"y":7,"color":"transparent"},{"x":1,"y":7,"color":"transparent"},{"x":2,"y":7,"color":"#000000"},{"x":3,"y":7,"color":"#8B5C33"},{"x":4,"y":7,"color":"#8B5C33"},{"x":5,"y":7,"color":"#E7C09D"},{"x":6,"y":7,"color":"#000000"},{"x":7,"y":7,"color":"#000000"},{"x":8,"y":7,"color":"#E7C09D"},{"x":9,"y":7,"color":"#E7C09D"},{"x":10,"y":7,"color":"#E7C09D"},{"x":11,"y":7,"color":"#000000"},{"x":12,"y":7,"color":"#000000"},{"x":13,"y":7,"color":"transparent"},{"x":14,"y":7,"color":"transparent"},{"x":15,"y":7,"color":"transparent"},{"x":0,"y":8,"color":"transparent"},{"x":1,"y":8,"color":"transparent"},{"x":2,"y":8,"color":"#000000"},{"x":3,"y":8,"color":"#E7C09D"},{"x":4,"y":8,"color":"#E7C09D"},{"x":5,"y":8,"color":"#E7C09D"},{"x":6,"y":8,"color":"#E7C09D"},{"x":7,"y":8,"color":"#E7C09D"},{"x":8,"y":8,"color":"#E7C09D"},{"x":9,"y":8,"color":"#E7C09D"},{"x":10,"y":8,"color":"#E7C09D"},{"x":11,"y":8,"color":"#E7C09D"},{"x":12,"y":8,"color":"#000000"},{"x":13,"y":8,"color":"transparent"},{"x":14,"y":8,"color":"transparent"},{"x":15,"y":8,"color":"transparent"},{"x":0,"y":9,"color":"transparent"},{"x":1,"y":9,"color":"transparent"},{"x":2,"y":9,"color":"#000000"},{"x":3,"y":9,"color":"#000000"},{"x":4,"y":9,"color":"#000000"},{"x":5,"y":9,"color":"#000000"},{"x":6,"y":9,"color":"#E7C09D"},{"x":7,"y":9,"color":"#E7C09D"},{"x":8,"y":9,"color":"#E7C09D"},{"x":9,"y":9,"color":"#E7C09D"},{"x":10,"y":9,"color":"#E7C09D"},{"x":11,"y":9,"color":"#000000"},{"x":12,"y":9,"color":"#000000"},{"x":13,"y":9,"color":"#000000"},{"x":14,"y":9,"color":"transparent"},{"x":15,"y":9,"color":"transparent"},{"x":0,"y":10,"color":"transparent"},{"x":1,"y":10,"color":"transparent"},{"x":2,"y":10,"color":"#000000"},{"x":3,"y":10,"color":"#EF0033"},{"x":4,"y":10,"color":"#EF0033"},{"x":5,"y":10,"color":"#EF0033"},{"x":6,"y":10,"color":"#000000"},{"x":7,"y":10,"color":"#E7C09D"},{"x":8,"y":10,"color":"#E7C09D"},{"x":9,"y":10,"color":"#000000"},{"x":10,"y":10,"color":"#000000"},{"x":11,"y":10,"color":"#EF0033"},{"x":12,"y":10,"color":"#EF0033"},{"x":13,"y":10,"color":"#EF0033"},{"x":14,"y":10,"color":"#000000"},{"x":15,"y":10,"color":"transparent"},{"x":0,"y":11,"color":"transparent"},{"x":1,"y":11,"color":"#000000"},{"x":2,"y":11,"color":"#EF0033"},{"x":3,"y":11,"color":"#EF0033"},{"x":4,"y":11,"color":"#EF0033"},{"x":5,"y":11,"color":"#EF0033"},{"x":6,"y":11,"color":"#000000"},{"x":7,"y":11,"color":"#E7C09D"},{"x":8,"y":11,"color":"#E7C09D"},{"x":9,"y":11,"color":"#E7C09D"},{"x":10,"y":11,"color":"#000000"},{"x":11,"y":11,"color":"#EF0033"},{"x":12,"y":11,"color":"#EF0033"},{"x":13,"y":11,"color":"#EF0033"},{"x":14,"y":11,"color":"#000000"},{"x":15,"y":11,"color":"transparent"},{"x":0,"y":12,"color":"transparent"},{"x":1,"y":12,"color":"transparent"},{"x":2,"y":12,"color":"#000000"},{"x":3,"y":12,"color":"#000000"},{"x":4,"y":12,"color":"#000000"},{"x":5,"y":12,"color":"#000000"},{"x":6,"y":12,"color":"#EF0033"},{"x":7,"y":12,"color":"#EF0033"},{"x":8,"y":12,"color":"#EF0033"},{"x":9,"y":12,"color":"#EF0033"},{"x":10,"y":12,"color":"#000000"},{"x":11,"y":12,"color":"#000000"},{"x":12,"y":12,"color":"#000000"},{"x":13,"y":12,"color":"#000000"},{"x":14,"y":12,"color":"transparent"},{"x":15,"y":12,"color":"transparent"},{"x":0,"y":13,"color":"transparent"},{"x":1,"y":13,"color":"transparent"},{"x":2,"y":13,"color":"transparent"},{"x":3,"y":13,"color":"#000000"},{"x":4,"y":13,"color":"#EF0033"},{"x":5,"y":13,"color":"#EF0033"},{"x":6,"y":13,"color":"#000000"},{"x":7,"y":13,"color":"#000000"},{"x":8,"y":13,"color":"#000000"},{"x":9,"y":13,"color":"#EF0033"},{"x":10,"y":13,"color":"#000000"},{"x":11,"y":13,"color":"transparent"},{"x":12,"y":13,"color":"transparent"},{"x":13,"y":13,"color":"transparent"},{"x":14,"y":13,"color":"transparent"},{"x":15,"y":13,"color":"transparent"},{"x":0,"y":14,"color":"transparent"},{"x":1,"y":14,"color":"transparent"},{"x":2,"y":14,"color":"transparent"},{"x":3,"y":14,"color":"#000000"},{"x":4,"y":14,"color":"#E7C09D"},{"x":5,"y":14,"color":"#E7C09D"},{"x":6,"y":14,"color":"#000000"},{"x":7,"y":14,"color":"transparent"},{"x":8,"y":14,"color":"#000000"},{"x":9,"y":14,"color":"#E7C09D"},{"x":10,"y":14,"color":"#000000"},{"x":11,"y":14,"color":"transparent"},{"x":12,"y":14,"color":"transparent"},{"x":13,"y":14,"color":"transparent"},{"x":14,"y":14,"color":"transparent"},{"x":15,"y":14,"color":"transparent"},{"x":0,"y":15,"color":"transparent"},{"x":1,"y":15,"color":"transparent"},{"x":2,"y":15,"color":"transparent"},{"x":3,"y":15,"color":"#000000"},{"x":4,"y":15,"color":"#000000"},{"x":5,"y":15,"color":"#000000"},{"x":6,"y":15,"color":"#000000"},{"x":7,"y":15,"color":"transparent"},{"x":8,"y":15,"color":"#000000"},{"x":9,"y":15,"color":"#000000"},{"x":10,"y":15,"color":"#000000"},{"x":11,"y":15,"color":"transparent"},{"x":12,"y":15,"color":"transparent"},{"x":13,"y":15,"color":"transparent"},{"x":14,"y":15,"color":"transparent"},{"x":15,"y":15,"color":"transparent"}]];

const container = document.querySelector('.bottom-pixel-container');

const pixelToChange = [[{"x":0,"y":0,"color":"transparent"},{"x":1,"y":0,"color":"transparent"},{"x":2,"y":0,"color":"transparent"},{"x":3,"y":0,"color":"transparent"},{"x":4,"y":0,"color":"#000000"},{"x":5,"y":0,"color":"#000000"},{"x":6,"y":0,"color":"#000000"},{"x":7,"y":0,"color":"#000000"},{"x":8,"y":0,"color":"#000000"},{"x":9,"y":0,"color":"#000000"},{"x":10,"y":0,"color":"#000000"},{"x":11,"y":0,"color":"#000000"},{"x":12,"y":0,"color":"#000000"},{"x":13,"y":0,"color":"#000000"},{"x":14,"y":0,"color":"transparent"},{"x":15,"y":0,"color":"transparent"},{"x":0,"y":1,"color":"transparent"},{"x":1,"y":1,"color":"transparent"},{"x":2,"y":1,"color":"transparent"},{"x":3,"y":1,"color":"#000000"},{"x":4,"y":1,"color":"#c5a487"},{"x":5,"y":1,"color":"#8B5C33"},{"x":6,"y":1,"color":"#8B5C33"},{"x":7,"y":1,"color":"#8B5C33"},{"x":8,"y":1,"color":"#8B5C33"},{"x":9,"y":1,"color":"#8B5C33"},{"x":10,"y":1,"color":"#8B5C33"},{"x":11,"y":1,"color":"#c5a487"},{"x":12,"y":1,"color":"#c5a487"},{"x":13,"y":1,"color":"#c5a487"},{"x":14,"y":1,"color":"#000000"},{"x":15,"y":1,"color":"transparent"},{"x":0,"y":2,"color":"transparent"},{"x":1,"y":2,"color":"transparent"},{"x":2,"y":2,"color":"#000000"},{"x":3,"y":2,"color":"#8B5C33"},{"x":4,"y":2,"color":"#8B5C33"},{"x":5,"y":2,"color":"#c5a487"},{"x":6,"y":2,"color":"#8B5C33"},{"x":7,"y":2,"color":"#8B5C33"},{"x":8,"y":2,"color":"#8B5C33"},{"x":9,"y":2,"color":"#8B5C33"},{"x":10,"y":2,"color":"#8B5C33"},{"x":11,"y":2,"color":"#8B5C33"},{"x":12,"y":2,"color":"#8B5C33"},{"x":13,"y":2,"color":"#c5a487"},{"x":14,"y":2,"color":"#c5a487"},{"x":15,"y":2,"color":"#000000"},{"x":0,"y":3,"color":"transparent"},{"x":1,"y":3,"color":"transparent"},{"x":2,"y":3,"color":"#000000"},{"x":3,"y":3,"color":"#8B5C33"},{"x":4,"y":3,"color":"#8B5C33"},{"x":5,"y":3,"color":"#8B5C33"},{"x":6,"y":3,"color":"#8B5C33"},{"x":7,"y":3,"color":"#8B5C33"},{"x":8,"y":3,"color":"#8B5C33"},{"x":9,"y":3,"color":"#8B5C33"},{"x":10,"y":3,"color":"#8B5C33"},{"x":11,"y":3,"color":"#8B5C33"},{"x":12,"y":3,"color":"#8B5C33"},{"x":13,"y":3,"color":"#8B5C33"},{"x":14,"y":3,"color":"#c5a487"},{"x":15,"y":3,"color":"#000000"},{"x":0,"y":4,"color":"transparent"},{"x":1,"y":4,"color":"transparent"},{"x":2,"y":4,"color":"#000000"},{"x":3,"y":4,"color":"#8B5C33"},{"x":4,"y":4,"color":"#8B5C33"},{"x":5,"y":4,"color":"#8B5C33"},{"x":6,"y":4,"color":"#E7C09D"},{"x":7,"y":4,"color":"#E7C09D"},{"x":8,"y":4,"color":"#E7C09D"},{"x":9,"y":4,"color":"#E7C09D"},{"x":10,"y":4,"color":"#8B5C33"},{"x":11,"y":4,"color":"#E7C09D"},{"x":12,"y":4,"color":"#E7C09D"},{"x":13,"y":4,"color":"#000000"},{"x":14,"y":4,"color":"#000000"},{"x":15,"y":4,"color":"transparent"},{"x":0,"y":5,"color":"transparent"},{"x":1,"y":5,"color":"transparent"},{"x":2,"y":5,"color":"transparent"},{"x":3,"y":5,"color":"#000000"},{"x":4,"y":5,"color":"#8B5C33"},{"x":5,"y":5,"color":"#E7C09D"},{"x":6,"y":5,"color":"#8B5C33"},{"x":7,"y":5,"color":"#8B5C33"},{"x":8,"y":5,"color":"#8B5C33"},{"x":9,"y":5,"color":"#8B5C33"},{"x":10,"y":5,"color":"#E7C09D"},{"x":11,"y":5,"color":"#8B5C33"},{"x":12,"y":5,"color":"#8B5C33"},{"x":13,"y":5,"color":"#000000"},{"x":14,"y":5,"color":"transparent"},{"x":15,"y":5,"color":"transparent"},{"x":0,"y":6,"color":"transparent"},{"x":1,"y":6,"color":"transparent"},{"x":2,"y":6,"color":"transparent"},{"x":3,"y":6,"color":"#000000"},{"x":4,"y":6,"color":"#8B5C33"},{"x":5,"y":6,"color":"#8B5C33"},{"x":6,"y":6,"color":"#E7C09D"},{"x":7,"y":6,"color":"#FFFFFF"},{"x":8,"y":6,"color":"#000000"},{"x":9,"y":6,"color":"#E7C09D"},{"x":10,"y":6,"color":"#E7C09D"},{"x":11,"y":6,"color":"#E7C09D"},{"x":12,"y":6,"color":"#FFFFFF"},{"x":13,"y":6,"color":"#000000"},{"x":14,"y":6,"color":"transparent"},{"x":15,"y":6,"color":"transparent"},{"x":0,"y":7,"color":"transparent"},{"x":1,"y":7,"color":"transparent"},{"x":2,"y":7,"color":"transparent"},{"x":3,"y":7,"color":"#000000"},{"x":4,"y":7,"color":"#8B5C33"},{"x":5,"y":7,"color":"#8B5C33"},{"x":6,"y":7,"color":"#E7C09D"},{"x":7,"y":7,"color":"#000000"},{"x":8,"y":7,"color":"#000000"},{"x":9,"y":7,"color":"#E7C09D"},{"x":10,"y":7,"color":"#E7C09D"},{"x":11,"y":7,"color":"#E7C09D"},{"x":12,"y":7,"color":"#000000"},{"x":13,"y":7,"color":"#000000"},{"x":14,"y":7,"color":"transparent"},{"x":15,"y":7,"color":"transparent"},{"x":0,"y":8,"color":"transparent"},{"x":1,"y":8,"color":"transparent"},{"x":2,"y":8,"color":"transparent"},{"x":3,"y":8,"color":"#000000"},{"x":4,"y":8,"color":"#E7C09D"},{"x":5,"y":8,"color":"#E7C09D"},{"x":6,"y":8,"color":"#E7C09D"},{"x":7,"y":8,"color":"#E7C09D"},{"x":8,"y":8,"color":"#E7C09D"},{"x":9,"y":8,"color":"#E7C09D"},{"x":10,"y":8,"color":"#E7C09D"},{"x":11,"y":8,"color":"#E7C09D"},{"x":12,"y":8,"color":"#E7C09D"},{"x":13,"y":8,"color":"#000000"},{"x":14,"y":8,"color":"transparent"},{"x":15,"y":8,"color":"transparent"},{"x":0,"y":9,"color":"transparent"},{"x":1,"y":9,"color":"transparent"},{"x":2,"y":9,"color":"transparent"},{"x":3,"y":9,"color":"transparent"},{"x":4,"y":9,"color":"#000000"},{"x":5,"y":9,"color":"#c5a487"},{"x":6,"y":9,"color":"#E7C09D"},{"x":7,"y":9,"color":"#E7C09D"},{"x":8,"y":9,"color":"#E7C09D"},{"x":9,"y":9,"color":"#E7C09D"},{"x":10,"y":9,"color":"#E7C09D"},{"x":11,"y":9,"color":"#E7C09D"},{"x":12,"y":9,"color":"#000000"},{"x":13,"y":9,"color":"transparent"},{"x":14,"y":9,"color":"transparent"},{"x":15,"y":9,"color":"transparent"},{"x":0,"y":10,"color":"transparent"},{"x":1,"y":10,"color":"transparent"},{"x":2,"y":10,"color":"transparent"},{"x":3,"y":10,"color":"#000000"},{"x":4,"y":10,"color":"#000000"},{"x":5,"y":10,"color":"#000000"},{"x":6,"y":10,"color":"#000000"},{"x":7,"y":10,"color":"#c5a487"},{"x":8,"y":10,"color":"#E7C09D"},{"x":9,"y":10,"color":"#E7C09D"},{"x":10,"y":10,"color":"#000000"},{"x":11,"y":10,"color":"#000000"},{"x":12,"y":10,"color":"#000000"},{"x":13,"y":10,"color":"#000000"},{"x":14,"y":10,"color":"#000000"},{"x":15,"y":10,"color":"transparent"},{"x":0,"y":11,"color":"transparent"},{"x":1,"y":11,"color":"transparent"},{"x":2,"y":11,"color":"transparent"},{"x":3,"y":11,"color":"#000000"},{"x":4,"y":11,"color":"#EF0033"},{"x":5,"y":11,"color":"#EF0033"},{"x":6,"y":11,"color":"#EF0033"},{"x":7,"y":11,"color":"#000000"},{"x":8,"y":11,"color":"#E7C09D"},{"x":9,"y":11,"color":"#E7C09D"},{"x":10,"y":11,"color":"#E7C09D"},{"x":11,"y":11,"color":"#000000"},{"x":12,"y":11,"color":"#EF0033"},{"x":13,"y":11,"color":"#EF0033"},{"x":14,"y":11,"color":"#EF0033"},{"x":15,"y":11,"color":"#000000"},{"x":0,"y":12,"color":"transparent"},{"x":1,"y":12,"color":"transparent"},{"x":2,"y":12,"color":"#000000"},{"x":3,"y":12,"color":"#EF0033"},{"x":4,"y":12,"color":"#EF0033"},{"x":5,"y":12,"color":"#EF0033"},{"x":6,"y":12,"color":"#EF0033"},{"x":7,"y":12,"color":"#000000"},{"x":8,"y":12,"color":"#EF0033"},{"x":9,"y":12,"color":"#EF0033"},{"x":10,"y":12,"color":"#EF0033"},{"x":11,"y":12,"color":"#000000"},{"x":12,"y":12,"color":"#EF0033"},{"x":13,"y":12,"color":"#EF0033"},{"x":14,"y":12,"color":"#EF0033"},{"x":15,"y":12,"color":"#000000"},{"x":0,"y":13,"color":"transparent"},{"x":1,"y":13,"color":"transparent"},{"x":2,"y":13,"color":"transparent"},{"x":3,"y":13,"color":"#000000"},{"x":4,"y":13,"color":"#000000"},{"x":5,"y":13,"color":"#000000"},{"x":6,"y":13,"color":"#000000"},{"x":7,"y":13,"color":"#000000"},{"x":8,"y":13,"color":"#000000"},{"x":9,"y":13,"color":"#000000"},{"x":10,"y":13,"color":"#EF0033"},{"x":11,"y":13,"color":"#000000"},{"x":12,"y":13,"color":"#000000"},{"x":13,"y":13,"color":"#000000"},{"x":14,"y":13,"color":"#000000"},{"x":15,"y":13,"color":"transparent"},{"x":0,"y":14,"color":"transparent"},{"x":1,"y":14,"color":"transparent"},{"x":2,"y":14,"color":"transparent"},{"x":3,"y":14,"color":"transparent"},{"x":4,"y":14,"color":"#000000"},{"x":5,"y":14,"color":"#E7C09D"},{"x":6,"y":14,"color":"#E7C09D"},{"x":7,"y":14,"color":"#000000"},{"x":8,"y":14,"color":"transparent"},{"x":9,"y":14,"color":"#000000"},{"x":10,"y":14,"color":"#E7C09D"},{"x":11,"y":14,"color":"#000000"},{"x":12,"y":14,"color":"transparent"},{"x":13,"y":14,"color":"transparent"},{"x":14,"y":14,"color":"transparent"},{"x":15,"y":14,"color":"transparent"},{"x":0,"y":15,"color":"transparent"},{"x":1,"y":15,"color":"transparent"},{"x":2,"y":15,"color":"transparent"},{"x":3,"y":15,"color":"transparent"},{"x":4,"y":15,"color":"#000000"},{"x":5,"y":15,"color":"#000000"},{"x":6,"y":15,"color":"#000000"},{"x":7,"y":15,"color":"#000000"},{"x":8,"y":15,"color":"transparent"},{"x":9,"y":15,"color":"#000000"},{"x":10,"y":15,"color":"#000000"},{"x":11,"y":15,"color":"#000000"},{"x":12,"y":15,"color":"transparent"},{"x":13,"y":15,"color":"transparent"},{"x":14,"y":15,"color":"transparent"},{"x":15,"y":15,"color":"transparent"}]];
var pixelData = pixelToAdd;

function createDivForPlayers(players) {
    $(".bottom-pixel-container").empty();
    for (let i = 0; i < players; i++) {
        const rowContainer = document.createElement('div');
        rowContainer.className = 'row-container';
        container.appendChild(rowContainer);
    }
}
var playersNumber = 0;
function changePixels() {
    console.log("running..." + playersNumber);
    createDivForPlayers(playersNumber); //Funciona
    const pixelContainers = document.querySelectorAll('.row-container');
    for (const pixelDiv of pixelContainers) {
            pixelDiv.innerHTML = ''; // Limpiar el contenido actual del div
    }
    if (pixelData === pixelToAdd) {
        pixelData = pixelToChange;
    } else {
        pixelData = pixelToAdd;
    }
    for (let i = 0; i < pixelContainers.length; i++) {
        const containerForAvatar = pixelContainers[i];
        for (const row of pixelData) {
            for (const pixel of row) {
                const div = document.createElement('div');
                div.classList.add('pixel');
                div.style.backgroundColor = pixel.color;
                containerForAvatar.appendChild(div);
            }
        }
    }
}

function setPlayersNumber (number) {
    playersNumber = number;
}

// Cambiar los píxeles cada segundo (1000 ms)
setInterval(changePixels, 100);

// Cambiar los píxeles inmediatamente al cargar la página
changePixels();