var view = {
    displayMassage: function(msg) {
        var massageArea = document.getElementById("messageArea");
        massageArea.innerHTML = msg;
    },
    
    displayHit: function(location) {
        var cell = document.getElementById(location); 
        cell.setAttribute("class", "hit");
    },

    displayMiss: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }


};
var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSank: 0,
    
    ships: [{ locations: ["06", "16", "26"], hits: ["", "", ""] },
            { locations: ["24", "34", "44"], hits: ["", "", ""] },
            { locations: ["10", "11", "12"], hits: ["", "", ""] }],
    
    fire: function(guess) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            var index = ship.locations.indexOf(guess);
            if (index >= 0) {
                ship.hits[index]  = "hit";
                view.displayHit(guess);
                view.displayMassage("HIT");
                if (this.isSunk(ship)) {
                    view.displayMassage("You sank my battleship!");
                    this.shipsSank++; 
                }
                return true;
            }

        }
        view.displayMiss(guess);
        view.displayMassage("You missed")
        return false;
    },

    isSunk: function(ship) {
        for (var i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    }
};

var controller = {
    guesses: 0,

    processGuess: function(guess) {

    }

    function parseGuess(guess) {
        var alphabet = ["A","B","C","D","E","F","G"];

        if (guess === null || guess.lenght !== 2) {
            alert ("Oops, please enter a letter and a namber on the board.");
        }
        else {
            firstChar = guess.charAt(0);
            var row = alphabet.indexOf(firstChar);
            var colum = guess.charAt(1);
            
            if (isNaN(row) || isNaN(colum)) {
                alert("Oops, that's off the board!");
            } else if (row < 0 || row >= model.boardSize || colum < 0 || colum >= model.boardSize) {
                alert("Oops, that's off the board!");
            } else {
                return row + colum;
            }
        }
        return null;
    }
};
 



model.fire("53");
model.fire("06");
model.fire("16");
model.fire("26");
model.fire("34");
model.fire("24");
model.fire("44");
model.fire("12");
model.fire("11");
model.fire("10");
model.fire("00");
/*
view.displayMiss("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");
view.displayMassage("POpa");1
*/
