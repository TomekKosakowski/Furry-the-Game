/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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
        this.showCoin = function () {
            this.board[ this.index(this.coin.x,this.coin.y) ].classList.add('coin');

        };

        this.startGame = function () {
            this.idSetInterval = setInterval(function () {
                self.moveFurry();
            }, 250);
        };

        this.moveFurry = function () {
            if (this.furry.direction === 'right') {
                this.furry.x = this.furry.x + 1;
            } else if (this.furry.direction === 'left') {
                this.furry.x = this.furry.x -1;
            } else if (this.furry.direction === 'up') {
                this.furry.y = this.furry.y +1;
            } else if (this.furry.direction === 'down') {
                this.furry.y = this.furry.y -1;
            }
        }

    };

    var game = new Game();
    game.showFurry();
    game.showCoin();
    game.startGame();
    game.moveFurry();






});



/***/ })
/******/ ]);