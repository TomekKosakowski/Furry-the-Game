document.addEventListener('DOMContentLoaded', function () {

    var Furry = function(x, y, direction) {
        this.x = 0;
        this.y = 0;
        this.direction = 'right';
    };

    var Coin = function (x, y) {
        this.x = Math.floor(Math.random() * 10);
        this.y = Math.floor(Math.random() * 10);

    };

    var Game = function (board, furry, coin, score) {
        this.board = document.querySelectorAll('#board div');
        this.furry = new Furry();
        this.coin = new Coin();
        this.score = 0;
        var self = this;

        this.index = function (x, y) {
            return x + (y*10);
        };

        this.showFurry = function () {
            this.board[ this.index(this.furry.x,this.furry.y) ].classList.add('furry');
        };

        this.hideVisibleFurry = function () {
                var hideFurry = document.querySelector('.furry');
                hideFurry.classList.remove('furry');
        };

        this.showCoin = function () {
            this.board[ this.index(this.coin.x,this.coin.y) ].classList.add('coin');

        };

        this.moveFurry = function () {
            this.hideVisibleFurry();
            if (this.furry.direction === 'right') {
                this.furry.x = this.furry.x + 1;
            } else if (this.furry.direction === 'left') {
                this.furry.x = this.furry.x -1;
            } else if (this.furry.direction === 'up') {
                this.furry.y = this.furry.y +1;
            } else if (this.furry.direction === 'down') {
                this.furry.y = this.furry.y -1;
            } return this.showFurry()
        };

        this.startGame = function () {
            this.idSetInterval = setInterval(function () {
                self.moveFurry();
            }, 250);
        };

        this.turnFurry = function (event) {
            switch (event.which) {
                case 37:
                    this.furry.direction = 'left';
                    break;
                case 38:
                    this.furry.direction = 'down';
                    break;
                case 39:
                    this.furry.direction = 'right';
                    break;
                case 40:
                    this.furry.direction = 'up';
                    break;
            }
        };

        document.addEventListener('keydown', function (event) {
                self.turnFurry(event);
        });

        this.checkCoinCollision = function () {
            

        }


    };

    var game = new Game();
    game.showFurry();
    game.showCoin();
    game.startGame();







});

