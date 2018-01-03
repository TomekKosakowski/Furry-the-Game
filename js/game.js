document.addEventListener('DOMContentLoaded', function () {

var Game = require('./app.js');
var game = new Game();
game.showFurry();
game.showCoin();
game.startGame()

});